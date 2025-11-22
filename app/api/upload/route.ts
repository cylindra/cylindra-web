import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const category = formData.get('category') as string || 'Other'
    const source = formData.get('source') as string || 'Manual AI Feed'

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const filePath = `uploads/${Date.now()}_${file.name}`

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('documents')
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: true,
      })

    if (uploadError) throw uploadError

    const { data: dbData, error: dbError } = await supabase
      .from('documents')
      .insert([
        {
          title: file.name,
          source,
          category,
          file_url: uploadData?.path || filePath,
          metadata: { size: file.size, type: file.type },
        },
      ])
      .select()

    if (dbError) throw dbError

    return NextResponse.json({
      message: 'File uploaded successfully',
      document: dbData[0],
    })
  } catch (error: any) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
