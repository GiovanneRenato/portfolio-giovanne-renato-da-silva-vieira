/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { TransactionList } from './components/dashboard/TransactionList';
import { SpendingChart } from './components/dashboard/SpendingChart';
import { BalanceChart } from './components/dashboard/BalanceChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-white">Bem-vindo de volta, Giovanne</h1>
          <p className="text-slate-400 mt-1">Aqui está o que está acontecendo com suas finanças hoje.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Saldo Total" 
            value="R$ 12.450,80" 
            change="+2.4%" 
            trend="up" 
            icon={<DollarSign className="text-blue-400" />} 
          />
          <StatCard 
            title="Receita Mensal" 
            value="R$ 4.200,00" 
            change="+12.2%" 
            trend="up" 
            icon={<TrendingUp className="text-emerald-400" />} 
          />
          <StatCard 
            title="Despesas Mensais" 
            value="R$ 2.150,40" 
            change="-4.1%" 
            trend="down" 
            icon={<ArrowDownRight className="text-red-400" />} 
          />
          <StatCard 
            title="Meta de Economia" 
            value="85%" 
            change="+5.4%" 
            trend="up" 
            icon={<ArrowUpRight className="text-purple-400" />} 
          />
        </div>

        {/* Balance Overview Chart */}
        <Card className="bg-[#0F1219]/50 border-slate-800 backdrop-blur-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Visão Geral do Saldo</CardTitle>
                <CardDescription className="text-slate-400">Seu desempenho nos últimos 6 meses</CardDescription>
              </div>
              <Badge variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-400">
                Tempo Real
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <BalanceChart />
          </CardContent>
        </Card>

        {/* Details Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 bg-[#0F1219]/50 border-slate-800 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionList />
            </CardContent>
          </Card>
          
          <Card className="bg-[#0F1219]/50 border-slate-800 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">Gastos por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <SpendingChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

function StatCard({ title, value, change, trend, icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-[#0F1219]/50 border-slate-800 backdrop-blur-xl overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          {icon}
        </div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-400">{title}</CardTitle>
          <div className="h-8 w-8 rounded-lg bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="ghost" className={cn(
              "px-1 py-0 h-auto text-xs font-semibold",
              trend === 'up' ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"
            )}>
              {change}
            </Badge>
            <span className="text-xs text-slate-500">vs mês anterior</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Utility function to avoid import conflicts or use the one from lib/utils
import { cn } from '@/lib/utils';

