import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Wallet, 
  PieChart, 
  Settings, 
  LogOut,
  User,
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn(
      "flex w-64 flex-col border-r border-slate-800 bg-[#0F1219]/50 backdrop-blur-xl transition-all duration-300",
      className
    )}>
      <div className="flex h-20 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Finapp</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-4">
        <SidebarItem icon={<LayoutDashboard size={20} />} label="Painel" active />
        <SidebarItem icon={<History size={20} />} label="Transações" />
        <SidebarItem icon={<PieChart size={20} />} label="Análises" />
        <SidebarItem icon={<User size={20} />} label="Meu Perfil" />
      </nav>

      <div className="mt-auto border-t border-slate-800 p-4 space-y-2">
        <SidebarItem icon={<Settings size={20} />} label="Configurações" />
        <SidebarItem icon={<LogOut size={20} />} label="Sair" variant="ghost-destructive" />
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  variant?: 'default' | 'ghost-destructive';
}

function SidebarItem({ icon, label, active, variant = 'default' }: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-4 px-4 py-6 text-slate-400 font-medium hover:text-white hover:bg-slate-800/50 transition-all",
        active && "bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300",
        variant === 'ghost-destructive' && "hover:bg-red-500/10 hover:text-red-400"
      )}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
}
