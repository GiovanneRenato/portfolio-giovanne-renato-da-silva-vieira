import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShoppingCart, Car, Home, Coffee, CreditCard } from 'lucide-react';

const TRANSACTIONS = [
  {
    id: '1',
    name: 'Apple Store',
    category: 'Tecnologia',
    amount: -1299.00,
    date: '12 Mai, 2024',
    status: 'Concluído',
    icon: <ShoppingCart size={16} />,
  },
  {
    id: '2',
    name: 'Viagem de Uber',
    category: 'Transporte',
    amount: -24.50,
    date: '11 Mai, 2024',
    status: 'Concluído',
    icon: <Car size={16} />,
  },
  {
    id: '3',
    name: 'Pagamento de Aluguel',
    category: 'Moradia',
    amount: -2100.00,
    date: '10 Mai, 2024',
    status: 'Pendente',
    icon: <Home size={16} />,
  },
  {
    id: '4',
    name: 'Depósito de Salário',
    category: 'Trabalho',
    amount: 4200.00,
    date: '05 Mai, 2024',
    status: 'Concluído',
    icon: <CreditCard size={16} />,
  },
  {
    id: '5',
    name: 'Starbucks',
    category: 'Alimentação',
    amount: -6.50,
    date: '04 Mai, 2024',
    status: 'Concluído',
    icon: <Coffee size={16} />,
  },
];

export function TransactionList() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader className="border-slate-800">
          <TableRow className="hover:bg-transparent border-slate-800">
            <TableHead className="text-slate-400">Transação</TableHead>
            <TableHead className="text-slate-400">Categoria</TableHead>
            <TableHead className="text-slate-400">Data</TableHead>
            <TableHead className="text-right text-slate-400">Valor</TableHead>
            <TableHead className="text-right text-slate-400">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TRANSACTIONS.map((tx) => (
            <TableRow key={tx.id} className="border-slate-800 hover:bg-slate-800/30 transition-colors">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300">
                    {tx.icon}
                  </div>
                  <span className="text-slate-200">{tx.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-slate-400">{tx.category}</TableCell>
              <TableCell className="text-slate-400">{tx.date}</TableCell>
              <TableCell className={`text-right font-semibold ${tx.amount > 0 ? 'text-emerald-400' : 'text-slate-200'}`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </TableCell>
              <TableCell className="text-right">
                <Badge 
                  variant="outline" 
                  className={
                    tx.status === 'Concluído' 
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" 
                      : "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                  }
                >
                  {tx.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
