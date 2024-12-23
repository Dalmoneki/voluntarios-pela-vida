'use client'

import { useState, useEffect, ReactNode } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, ArrowLeftRight, Bell, Sparkles, Sun } from 'lucide-react'

interface Transaction {
  id: number;
  data: string;
  documento: string;
  historico: string;
  entrada?: number;
  saida?: number;
}

interface ClientPageProps {
  children: ReactNode;
}

export default function ClientPage({ children }: ClientPageProps) {
  const [lancamentos, setLancamentos] = useState<Transaction[]>([])
  const [saldoAnterior, setSaldoAnterior] = useState('0,00')

  useEffect(() => {
    const savedLancamentos = localStorage.getItem('lancamentos')
    const savedSaldoAnterior = localStorage.getItem('saldoAnterior')
    
    if (savedLancamentos) {
      setLancamentos(JSON.parse(savedLancamentos))
    }
    if (savedSaldoAnterior) {
      setSaldoAnterior(savedSaldoAnterior)
    }
  }, [])

  const calcularTotais = () => {
    return lancamentos.reduce((acc, lanc) => ({
      entradas: acc.entradas + (lanc.entrada || 0),
      saidas: acc.saidas + (lanc.saida || 0)
    }), { entradas: 0, saidas: 0 })
  }

  const { entradas, saidas } = calcularTotais()
  const saldoAtualCalculado = parseFloat(saldoAnterior.replace(',', '.')) + entradas - saidas

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Painel de Controle</h1>
          <Sparkles className="h-6 w-6 text-yellow-400" />
        </div>
        <p className="text-sm text-gray-600">Última atualização: {children}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium text-green-600 mb-2">Total Entradas</h3>
            <p className="text-2xl font-bold">R$ {entradas.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium text-red-600 mb-2">Total Saídas</h3>
            <p className="text-2xl font-bold">R$ {saidas.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <h3 className="text-sm font-medium text-blue-600 mb-2">Saldo Atual</h3>
            <p className="text-2xl font-bold">R$ {saldoAtualCalculado.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border-none">
          <CardContent className="pt-6 flex flex-col items-center">
            <Users className="h-6 w-6 text-blue-600 mb-2" />
            <span className="text-3xl font-bold mb-1">Em construção</span>
            <p className="text-sm text-blue-800 text-center">Pessoas cadastradas no sistema</p>
          </CardContent>
        </Card>

        <Card className="bg-pink-50 border-none">
          <CardContent className="pt-6 flex flex-col items-center">
            <Heart className="h-6 w-6 text-pink-600 mb-2" />
            <span className="text-3xl font-bold mb-1">Em construção</span>
            <p className="text-sm text-pink-800 text-center">Crianças com necessidades especiais</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-none">
          <CardContent className="pt-6 flex flex-col items-center">
            <ArrowLeftRight className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-3xl font-bold mb-1">{lancamentos.length}</span>
            <p className="text-sm text-green-800 text-center">Total de movimentações no mês</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-none">
          <CardContent className="pt-6 flex flex-col items-center">
            <Bell className="h-6 w-6 text-purple-600 mb-2" />
            <span className="text-3xl font-bold mb-1">Em construção</span>
            <p className="text-sm text-purple-800 text-center">Alertas pendentes de ação</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 shadow-md">
        <CardContent className="p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-600 mb-4">
            <Heart className="h-5 w-5" />
            Bem-vindo ao Sistema Voluntários pela Vida
          </h2>
          <p className="text-gray-600 mb-4">
            Este é o sistema de gerenciamento do Projeto Voluntários pela Vida. Aqui você pode realizar ações que fazem a diferença na vida das pessoas:
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• Realizar cadastros de beneficiários, trazendo esperança para quem precisa</li>
            <li>• Gerenciar cadastros especiais para crianças com necessidades específicas, oferecendo cuidado personalizado</li>
            <li>• Controlar movimentações de medicamentos, garantindo que a ajuda chegue a quem precisa</li>
            <li>• Monitorar alertas importantes, permitindo ações rápidas e eficientes</li>
            <li>• Gerenciar o controle de caixa, acompanhando entradas e saídas financeiras do projeto</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center text-gray-500 italic relative py-4">
        <div className="absolute right-0 top-0">
          <Sun className="h-8 w-8 text-yellow-400" />
        </div>
        <p className="mb-2 px-4">&ldquo;Cada um contribua segundo tiver proposto no coração, não com tristeza ou por necessidade; porque Deus ama a quem dá com alegria&rdquo; - 2 Coríntios 9:7</p>
        <p className="text-sm">Feito com amor por Luís Dalmoneki e v0.dev ❤️</p>
      </div>
    </div>
  )
}

