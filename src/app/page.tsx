import { Metadata } from 'next'
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, ArrowLeftRight, Bell, Sparkles, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Painel de Controle - Voluntários pela Vida',
  description: 'Sistema de gerenciamento do Projeto Voluntários pela Vida',
}

export default async function Page() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-[1200px] mx-auto p-2 md:p-4">
      {/* Header with sparkle */}
      <div className="flex items-center justify-center lg:justify-start gap-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Painel de Controle</h1>
        <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        <Card className="bg-white shadow-md">
          <CardContent className="p-4 md:pt-6">
            <h3 className="text-xs md:text-sm font-medium text-green-600 mb-1 md:mb-2">Total Entradas</h3>
            <p className="text-lg md:text-2xl font-bold">R$ 5.000,00</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-4 md:pt-6">
            <h3 className="text-xs md:text-sm font-medium text-red-600 mb-1 md:mb-2">Total Saídas</h3>
            <p className="text-lg md:text-2xl font-bold">R$ 3.000,00</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md sm:col-span-2 md:col-span-1">
          <CardContent className="p-4 md:pt-6">
            <h3 className="text-xs md:text-sm font-medium text-blue-600 mb-1 md:mb-2">Saldo Atual</h3>
            <p className="text-lg md:text-2xl font-bold">R$ 2.000,00</p>
          </CardContent>
        </Card>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <Card className="bg-blue-50 border-none">
          <CardContent className="p-4 md:pt-6 flex flex-col items-center">
            <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mb-1 md:mb-2" />
            <span className="text-2xl md:text-3xl font-bold mb-1">0</span>
            <p className="text-xs md:text-sm text-blue-800 text-center">Pessoas cadastradas no sistema</p>
          </CardContent>
        </Card>

        <Card className="bg-pink-50 border-none">
          <CardContent className="p-4 md:pt-6 flex flex-col items-center">
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-600 mb-1 md:mb-2" />
            <span className="text-2xl md:text-3xl font-bold mb-1">0</span>
            <p className="text-xs md:text-sm text-pink-800 text-center">Crianças com necessidades especiais</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-none">
          <CardContent className="p-4 md:pt-6 flex flex-col items-center">
            <ArrowLeftRight className="h-5 w-5 md:h-6 md:w-6 text-green-600 mb-1 md:mb-2" />
            <span className="text-2xl md:text-3xl font-bold mb-1">0</span>
            <p className="text-xs md:text-sm text-green-800 text-center">Total de movimentações no mês</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-none">
          <CardContent className="p-4 md:pt-6 flex flex-col items-center">
            <Bell className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mb-1 md:mb-2" />
            <span className="text-2xl md:text-3xl font-bold mb-1">0</span>
            <p className="text-xs md:text-sm text-purple-800 text-center">Alertas pendentes de ação</p>
          </CardContent>
        </Card>
      </div>

      {/* Welcome Section */}
      <Card className="bg-white/80 shadow-md">
        <CardContent className="p-4 md:p-6">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-blue-600 mb-2 md:mb-4">
            <Heart className="h-4 w-4 md:h-5 md:w-5" />
            Bem-vindo ao Sistema Voluntários pela Vida
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
            Este é o sistema de gerenciamento do Projeto Voluntários pela Vida. Aqui você pode realizar ações que fazem a diferença na vida das pessoas:
          </p>

          <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
            <li>• Realizar cadastros de beneficiários, trazendo esperança para quem precisa</li>
            <li>• Gerenciar cadastros especiais para crianças com necessidades específicas, oferecendo cuidado personalizado</li>
            <li>• Controlar movimentações de medicamentos, garantindo que a ajuda chegue a quem precisa</li>
            <li>• Monitorar alertas importantes, permitindo ações rápidas e eficientes</li>
            <li>• Gerenciar o controle de caixa, acompanhando entradas e saídas financeiras do projeto</li>
          </ul>
        </CardContent>
      </Card>

      {/* Bible Verse */}
      <div className="text-center text-gray-500 italic relative py-2 md:py-4">
        <div className="absolute right-0 top-0">
          <Sun className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
        </div>
        <p className="text-xs md:text-sm mb-1 md:mb-2 px-2 md:px-4">&ldquo;Cada um contribua segundo tiver proposto no coração, não com tristeza ou por necessidade; porque Deus ama a quem dá com alegria&rdquo; - 2 Coríntios 9:7</p>
        <p className="text-xs md:text-sm">Feito com amor por Luís Dalmoneki e v0.dev ❤️</p>
      </div>
    </div>
  )
}

