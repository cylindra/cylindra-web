// app/api/upload/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    // --- Parachoques de categoría ---
    const rawCategory = (formData.get('category') as string) || 'Other'
    const allowedCategories = new Set(['Other', 'SOLAS']) // añade aquí más si tu CHECK lo permite
    const category = allowedCategories.has(rawCategory) ? rawCategory : 'Other'
    // --------------------------------

    const source = (formData.get('source') as string) || 'Manual AI Feed'

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const filePath = `uploads/${Date.now()}_${file.name}`

    // Bucket de Storage correcto
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('docs')
      .upload(filePath, new Uint8Array(arrayBuffer), {
        contentType: file.type || 'application/octet-stream',
        cacheControl: '3600',
        upsert: true,
      })
    if (uploadError) throw uploadError

    // Tabla correcta en Postgres
    const { data: dbData, error: dbError } = await supabase
      .from('documents')
      .insert([
        {
          title: file.name,
          source,
          category,
          file_url: uploadData?.path || filePath, // path relativo dentro del bucket
          metadata: { size: file.size, type: file.type },
        },
      ])
      .select()
    if (dbError) throw dbError

    return NextResponse.json(
      { message: 'File uploaded successfully', document: dbData[0] },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error uploading file:', error?.message || error)
    return NextResponse.json({ error: error?.message ?? 'unknown error' }, { status: 500 })
  }
}

