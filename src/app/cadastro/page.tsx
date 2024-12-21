import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CadastroVoluntario() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Voluntário</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input id="nome" placeholder="Digite seu nome completo" />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="seu@email.com" />
        </div>
        <div>
          <Label htmlFor="telefone">Telefone</Label>
          <Input id="telefone" placeholder="(00) 00000-0000" />
        </div>
        <div>
          <Label htmlFor="area">Área de Atuação</Label>
          <Input id="area" placeholder="Ex: Saúde, Educação, Administrativo" />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  )
}

