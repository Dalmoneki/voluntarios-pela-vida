import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Transaction {
  description: string;
  amount: number;
  type: 'entrada' | 'saida';
}

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
  onCancel: () => void;
  initialData?: Transaction | null;
}

export default function TransactionForm({ onSubmit, onCancel, initialData }: TransactionFormProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'entrada' | 'saida'>('entrada');

  useEffect(() => {
    if (initialData) {
      setDescription(initialData.description);
      setAmount(initialData.amount.toString());
      setType(initialData.type);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      description,
      amount: parseFloat(amount),
      type,
    });
    setDescription('');
    setAmount('');
    setType('entrada');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div>
        <Label htmlFor="description">Descrição</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="amount">Valor (R$)</Label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <RadioGroup value={type} onValueChange={(value: 'entrada' | 'saida') => setType(value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="entrada" id="entrada" />
          <Label htmlFor="entrada">Entrada</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="saida" id="saida" />
          <Label htmlFor="saida">Saída</Label>
        </div>
      </RadioGroup>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">
          {initialData ? 'Atualizar' : 'Adicionar'}
        </Button>
      </div>
    </form>
  )
}
