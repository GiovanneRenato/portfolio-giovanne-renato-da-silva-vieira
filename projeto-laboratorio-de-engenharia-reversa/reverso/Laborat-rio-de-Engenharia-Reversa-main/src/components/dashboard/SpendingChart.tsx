import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from 'recharts';

const DATA = [
  { name: 'Moradia', value: 2100, color: '#3b82f6' },
  { name: 'Alimentação', value: 450, color: '#10b981' },
  { name: 'Transporte', value: 300, color: '#f59e0b' },
  { name: 'Tecnologia', value: 1299, color: '#8b5cf6' },
  { name: 'Outros', value: 200, color: '#64748b' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-slate-800 bg-[#0F1219] p-2 shadow-xl">
        <p className="text-sm font-medium text-slate-200">{payload[0].name}</p>
        <p className="text-sm font-bold text-blue-400">
          {payload[0].value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    );
  }
  return null;
};

export function SpendingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={DATA}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            content={({ payload }) => (
              <ul className="flex flex-wrap justify-center gap-4 pt-4">
                {payload?.map((entry: any, index: number) => (
                  <li key={`item-${index}`} className="flex items-center gap-2">
                    <div 
                      className="h-2 w-2 rounded-full" 
                      style={{ backgroundColor: entry.color }} 
                    />
                    <span className="text-xs text-slate-400">{entry.value}</span>
                  </li>
                ))}
              </ul>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
