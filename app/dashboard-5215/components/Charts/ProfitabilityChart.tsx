/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Limpieza de Hogar', value: 35, margin: 42 },
  { name: 'Limpieza de Oficina', value: 28, margin: 38 },
  { name: 'Limpieza Profunda', value: 22, margin: 35 },
  { name: 'Mudanza', value: 15, margin: 28 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

const ProfitabilityChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Rentabilidad por Tipo de Servicio</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: any, name: any, props: any) => [
              `${value}% de servicios | Margen: ${props.payload.margin}%`,
              name
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitabilityChart;
