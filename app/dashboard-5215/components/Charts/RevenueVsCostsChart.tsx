import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', ingresos: 32000, costos: 20000 },
  { name: 'Feb', ingresos: 35500, costos: 21500 },
  { name: 'Mar', ingresos: 38200, costos: 23000 },
  { name: 'Abr', ingresos: 41000, costos: 24500 },
  { name: 'May', ingresos: 39500, costos: 23800 },
  { name: 'Jun', ingresos: 45280, costos: 28150 },
];

const RevenueVsCostsChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ingresos vs Costos</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="ingresos" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 4 }}
            name="Ingresos"
          />
          <Line 
            type="monotone" 
            dataKey="costos" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', r: 4 }}
            name="Costos"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueVsCostsChart;
