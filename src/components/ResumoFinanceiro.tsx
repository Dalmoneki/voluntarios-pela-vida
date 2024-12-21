"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ResumoFinanceiroProps {
  entradas: number;
  saidas: number;
  saldoAtual: number;
}

export function ResumoFinanceiro({
  entradas,
  saidas,
  saldoAtual
}: ResumoFinanceiroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-white shadow-md">
        <CardContent className="pt-6">
          <h3 className="text-sm font-medium text-green-600 mb-2">
            Total Entradas
          </h3>
          <p className="text-2xl font-bold">R$ {entradas.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-md">
        <CardContent className="pt-6">
          <h3 className="text-sm font-medium text-red-600 mb-2">
            Total Saídas
          </h3>
          <p className="text-2xl font-bold">R$ {saidas.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-md">
        <CardContent className="pt-6">
          <h3 className="text-sm font-medium text-blue-600 mb-2">
            Saldo Atual
          </h3>
          <p
            className={`text-2xl font-bold ${
              saldoAtual >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            R$ {saldoAtual.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
