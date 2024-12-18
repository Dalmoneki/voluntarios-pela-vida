import Image from 'next/image'
import Link from 'next/link'
import { LayoutGrid, Users2, ArrowLeftRight, Package, Wallet, Bell, FileText } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-pink-50 flex flex-col shadow-lg">
      {/* Logo Section with Blob Background */}
      <div className="p-4 flex flex-col items-center relative">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full bg-pink-300 opacity-70"
          style={{
            filter: 'blur(20px)',
            animation: 'blob 7s infinite',
          }}
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9BMFGVhi8nr7p7NSyJNnEJIEUIKO3n.png"
          alt="Voluntários Pela Vida Logo"
          width={120}
          height={120}
          className="relative z-10"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 flex flex-col justify-end pb-16">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/painel" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <LayoutGrid className="h-5 w-5 text-red-500" />
              <span className="font-medium">Painel</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/cadastros" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <Users2 className="h-5 w-5 text-orange-500" />
              <span className="font-medium">Cadastros</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/movimentacao" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <ArrowLeftRight className="h-5 w-5 text-green-500" />
              <span className="font-medium">Movimentação</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/estoque" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <Package className="h-5 w-5 text-purple-500" />
              <span className="font-medium">Controle de Estoque</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/caixa" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <Wallet className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">Controle de Caixa</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/alertas" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <Bell className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Alertas</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/relatorios" 
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-pink-100 rounded-lg transition-colors"
            >
              <FileText className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Relatórios</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* PIX Information */}
      <div className="p-4">
        <div className="bg-red-600 text-white p-3 rounded-lg text-center">
          <p className="font-bold">AJUDE CHAVE PIX E-MAIL</p>
          <p className="text-sm mt-1 break-words">
            voluntariospelavidasempre@gmail.com
          </p>
        </div>
      </div>
    </aside>
  )
}

