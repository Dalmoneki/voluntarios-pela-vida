'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9BMFGVhi8nr7p7NSyJNnEJIEUIKO3n.png"
            alt="Voluntários Pela Vida Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold text-blue-600">Voluntários pela Vida</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Início</Link>
          <Link href="/cadastros" className="text-gray-600 hover:text-blue-600">Cadastros</Link>
          <Link href="/movimentacao" className="text-gray-600 hover:text-blue-600">Movimentação</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block text-gray-600 hover:text-blue-600">Início</Link>
          <Link href="/cadastros" className="block text-gray-600 hover:text-blue-600">Cadastros</Link>
          <Link href="/movimentacao" className="block text-gray-600 hover:text-blue-600">Movimentação</Link>
        </nav>
      )}
    </header>
  )
}

