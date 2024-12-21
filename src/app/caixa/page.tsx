"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Lancamento {
  id: number;
  data: string;
  documento: string;
  historico: string;
  entrada?: number;
  saida?: number;
}

export default function MovimentoCaixa() {
  const [documento, setDocumento] = useState("");
  const [historico, setHistorico] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState<"entrada" | "saida">("entrada");
  const [lancamentos, setLancamentos] = useState<Lancamento[]>([]);
  const [mesSelecionado, setMesSelecionado] = useState(
    new Date().toISOString().slice(0, 7)
  );
  const [saldoAnterior, setSaldoAnterior] = useState("0,00");
  const [lancamentoEditando, setLancamentoEditando] =
    useState<Lancamento | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const savedLancamentos = localStorage.getItem("lancamentos");
    const savedSaldoAnterior = localStorage.getItem("saldoAnterior");

    if (savedLancamentos) {
      setLancamentos(JSON.parse(savedLancamentos));
    }
    if (savedSaldoAnterior) {
      setSaldoAnterior(savedSaldoAnterior);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lancamentos", JSON.stringify(lancamentos));
    localStorage.setItem("saldoAnterior", saldoAnterior);
  }, [lancamentos, saldoAnterior]);

  const validarFormulario = () => {
    if (!historico.trim()) {
      setErro("O histórico é obrigatório.");
      return false;
    }
    if (!valor || isNaN(parseFloat(valor.replace(",", ".")))) {
      setErro("O valor deve ser um número válido.");
      return false;
    }
    setErro(null);
    return true;
  };

  const adicionarLancamento = () => {
    if (!validarFormulario()) return;

    const novoLancamento: Lancamento = {
      id: Date.now(),
      data: new Date().toISOString().slice(0, 10),
      documento: documento,
      historico: historico,
      ...(tipo === "entrada"
        ? { entrada: parseFloat(valor.replace(",", ".")) }
        : { saida: parseFloat(valor.replace(",", ".")) })
    };
    setLancamentos([...lancamentos, novoLancamento]);
    limparFormulario();
  };

  const editarLancamento = (lancamento: Lancamento) => {
    setLancamentoEditando(lancamento);
    setDocumento(lancamento.documento);
    setHistorico(lancamento.historico);
    setValor(
      lancamento.entrada
        ? lancamento.entrada.toString()
        : lancamento.saida
        ? lancamento.saida.toString()
        : ""
    );
    setTipo(lancamento.entrada ? "entrada" : "saida");
  };

  const salvarEdicao = () => {
    if (!validarFormulario()) return;

    if (lancamentoEditando) {
      const lancamentosAtualizados = lancamentos.map((l) =>
        l.id === lancamentoEditando.id
          ? {
              ...l,
              documento: documento,
              historico: historico,
              entrada:
                tipo === "entrada"
                  ? parseFloat(valor.replace(",", "."))
                  : undefined,
              saida:
                tipo === "saida"
                  ? parseFloat(valor.replace(",", "."))
                  : undefined
            }
          : l
      );
      setLancamentos(lancamentosAtualizados);
      setLancamentoEditando(null);
      limparFormulario();
    }
  };

  const removerLancamento = (id: number) => {
    setLancamentos(lancamentos.filter((l) => l.id !== id));
  };

  const limparFormulario = () => {
    setDocumento("");
    setHistorico("");
    setValor("");
    setTipo("entrada");
    setErro(null);
  };

  const lancamentosFiltrados = lancamentos.filter((lanc) =>
    lanc.data.startsWith(mesSelecionado)
  );

  const calcularTotais = () => {
    return lancamentosFiltrados.reduce(
      (acc, lanc) => ({
        entradas: acc.entradas + (lanc.entrada || 0),
        saidas: acc.saidas + (lanc.saida || 0)
      }),
      { entradas: 0, saidas: 0 }
    );
  };

  const { entradas, saidas } = calcularTotais();
  const saldoAtualCalculado =
    parseFloat(saldoAnterior.replace(",", ".")) + entradas - saidas;

  return (
    <div className="container mx-auto p-4">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">MOVIMENTO DO CAIXA</h1>
          <div className="flex gap-4">
            <input
              type="month"
              value={mesSelecionado}
              onChange={(e) => setMesSelecionado(e.target.value)}
              className="p-2 border rounded-md"
            />
            <div className="text-sm">
              Data: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value="VOLUNTÁRIOS PELA VIDA"
            readOnly
            className="w-full p-2 border rounded-md bg-gray-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <Label htmlFor="documento">Doc. Nº</Label>
            <Input
              id="documento"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="historico">Histórico</Label>
            <Input
              id="historico"
              value={historico}
              onChange={(e) => setHistorico(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="valor">Valor</Label>
            <div className="flex gap-2">
              <Input
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="0,00"
              />
              <Select
                value={tipo}
                onValueChange={(value: "entrada" | "saida") => setTipo(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entrada">Entrada</SelectItem>
                  <SelectItem value="saida">Saída</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {erro && <p className="text-red-500 mb-4">{erro}</p>}

        <Button
          onClick={lancamentoEditando ? salvarEdicao : adicionarLancamento}
          className="w-full mb-6"
        >
          {lancamentoEditando ? "Salvar Edição" : "Adicionar Lançamento"}
        </Button>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">Data</th>
                <th className="border p-2 text-left">Doc. Nº</th>
                <th className="border p-2 text-left">Histórico</th>
                <th className="border p-2 text-right">Entradas</th>
                <th className="border p-2 text-right">Saídas</th>
                <th className="border p-2 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {lancamentosFiltrados.map((lancamento) => (
                <tr key={lancamento.id}>
                  <td className="border p-2">
                    {new Date(lancamento.data).toLocaleDateString()}
                  </td>
                  <td className="border p-2">{lancamento.documento}</td>
                  <td className="border p-2">{lancamento.historico}</td>
                  <td className="border p-2 text-right text-green-600">
                    {lancamento.entrada
                      ? `R$ ${lancamento.entrada.toFixed(2)}`
                      : "-"}
                  </td>
                  <td className="border p-2 text-right text-red-600">
                    {lancamento.saida
                      ? `R$ ${lancamento.saida.toFixed(2)}`
                      : "-"}
                  </td>
                  <td className="border p-2 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => editarLancamento(lancamento)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirmar exclusão</DialogTitle>
                        </DialogHeader>
                        <p>Tem certeza que deseja excluir este lançamento?</p>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => {}}>
                            Cancelar
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={() => removerLancamento(lancamento.id)}
                          >
                            Excluir
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <div className="border rounded-md p-4 w-full">
            <h2 className="text-lg font-semibold mb-4">DETALHES DO SALDO</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Saldo Anterior:</label>
                <Input
                  type="text"
                  value={saldoAnterior}
                  onChange={(e) => setSaldoAnterior(e.target.value)}
                  className="w-32 text-right"
                  placeholder="0,00"
                />
              </div>
              <div className="flex justify-between">
                <span>Total Entradas:</span>
                <span className="text-green-600">R$ {entradas.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Saídas:</span>
                <span className="text-red-600">R$ {saidas.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-bold">SALDO ATUAL:</span>
                <span
                  className={
                    saldoAtualCalculado >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  R$ {saldoAtualCalculado.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
