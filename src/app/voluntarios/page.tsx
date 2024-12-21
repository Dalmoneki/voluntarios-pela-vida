import { Metadata } from 'next'
import { Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lista de Voluntários - Voluntários pela Vida',
  description: 'Gerenciamento de voluntários cadastrados no projeto',
}

// Simulando dados de voluntários (em um cenário real, isso viria de um banco de dados)
const voluntarios = [
  { id: 1, nome: "Maria Silva", email: "maria@email.com", telefone: "(11) 98765-4321", areaAtuacao: "Saúde" },
  { id: 2, nome: "João Santos", email: "joao@email.com", telefone: "(11) 91234-5678", areaAtuacao: "Educação" },
  { id: 3, nome: "Ana Oliveira", email: "ana@email.com", telefone: "(11) 99876-5432", areaAtuacao: "Assistência Social" },
  { id: 4, nome: "Carlos Ferreira", email: "carlos@email.com", telefone: "(11) 98765-1234", areaAtuacao: "Administrativo" },
  { id: 5, nome: "Beatriz Lima", email: "beatriz@email.com", telefone: "(11) 91234-8765", areaAtuacao: "Saúde" },
]

export default function ListaVoluntarios() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <Users className="h-6 w-6" />
          Lista de Voluntários
        </h1>
        <Link href="/cadastros">
          <Button>Cadastrar Novo Voluntário</Button>
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Área de Atuação</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {voluntarios.map((voluntario) => (
              <TableRow key={voluntario.id}>
                <TableCell className="font-medium">{voluntario.nome}</TableCell>
                <TableCell>{voluntario.email}</TableCell>
                <TableCell>{voluntario.telefone}</TableCell>
                <TableCell>{voluntario.areaAtuacao}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Ver Detalhes</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

