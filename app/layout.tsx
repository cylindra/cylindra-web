"use client";
import "./globals.css";
import { GeistSans, GeistMono } from "next/font/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="layout">
          <aside className="sidebar">
            <h2>Cylindra AI</h2>
            <nav>
              <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/upload">Subir PDF</a></li>
                <li><a href="/history">Historial</a></li>
                <li><a href="/settings">Configuración</a></li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">{children}</main>
        </div>
        <style jsx>{`
          .layout {
            display: flex;
            height: 100vh;
            font-family: Arial, sans-serif;
          }
          .sidebar {
            width: 220px;
            background-color: #1F2937;
            color: white;
            padding: 20px;
          }
          .sidebar h2 {
            margin-bottom: 1rem;
          }
          .sidebar ul {
            list-style: none;
            padding: 0;
          }
          .sidebar li {
            margin-bottom: 1rem;
          }
          .sidebar a {
            color: #E5E7EB;
            text-decoration: none;
            font-size: 16px;
          }
          .sidebar a:hover {
            color: #3B82F6;
          }
          .main-content {
            flex-grow: 1;
            background-color: #F9FAFB;
            padding: 30px;
            overflow-y: auto;
          }
        `}</style>
      </body>
    </html>
  );
}
