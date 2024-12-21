import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voluntários pela Vida',
  description: 'Projeto de apoio à comunidade',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-pink-100 to-blue-100 p-4 sm:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

