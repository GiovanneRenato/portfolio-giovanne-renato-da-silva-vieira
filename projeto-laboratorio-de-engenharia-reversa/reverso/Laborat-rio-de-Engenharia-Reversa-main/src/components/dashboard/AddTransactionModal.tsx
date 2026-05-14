import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';

export function AddTransactionModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-semibold shadow-lg shadow-blue-600/20">
          <Plus size={18} />
          <span className="hidden sm:inline">Nova Transação</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0F1219] border-slate-800 text-slate-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Adicionar Transação</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Título</Label>
            <Input 
              id="title" 
              placeholder="ex: Compras da Semana" 
              className="bg-slate-900 border-slate-800" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Valor</Label>
              <Input 
                id="amount" 
                type="number" 
                placeholder="0,00" 
                className="bg-slate-900 border-slate-800" 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Categoria</Label>
              <Select>
                <SelectTrigger className="bg-slate-900 border-slate-800">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                  <SelectItem value="food">Alimentação & Bebidas</SelectItem>
                  <SelectItem value="tech">Tecnologia</SelectItem>
                  <SelectItem value="housing">Moradia</SelectItem>
                  <SelectItem value="transport">Transporte</SelectItem>
                  <SelectItem value="others">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Descrição (Opcional)</Label>
            <Textarea 
              id="description" 
              placeholder="Adicione mais detalhes..." 
              className="bg-slate-900 border-slate-800 resize-none" 
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            variant="ghost" 
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            Cancelar
          </Button>
          <Button 
            onClick={() => setOpen(false)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Salvar Transação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
