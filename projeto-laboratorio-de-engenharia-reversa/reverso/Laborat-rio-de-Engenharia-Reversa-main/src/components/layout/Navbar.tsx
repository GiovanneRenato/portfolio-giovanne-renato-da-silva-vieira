import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './Sidebar';
import { AddTransactionModal } from '../dashboard/AddTransactionModal';

export function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#0A0C10]/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Sidebar Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-slate-400">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-[#0F1219] border-slate-800">
            <Sidebar className="w-full flex border-none" />
          </SheetContent>
        </Sheet>

        {/* Search Bar */}
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input 
            type="search" 
            placeholder="Buscar transações, tags..." 
            className="w-full border-slate-800 bg-slate-900/50 pl-10 focus-visible:ring-blue-500/50 text-slate-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Add Transaction Button */}
        <AddTransactionModal />

        <div className="h-8 w-px bg-slate-800 mx-2 hidden sm:block" />

        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-slate-800/50">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500" />
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border border-slate-700">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="User avatar" />
                <AvatarFallback className="bg-slate-800 text-slate-200">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#0F1219] border-slate-800 text-slate-200" align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-800" />
            <DropdownMenuItem className="hover:bg-slate-800 cursor-pointer">Perfil</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-800 cursor-pointer">Faturamento</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-800 cursor-pointer">Equipe</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-800" />
            <DropdownMenuItem className="hover:bg-slate-800 cursor-pointer text-red-400">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
