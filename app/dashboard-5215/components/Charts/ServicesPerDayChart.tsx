import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', servicios: 24 },
  { name: 'Mar', servicios: 28 },
  { name: 'Mié', servicios: 32 },
  { name: 'Jue', servicios: 26 },
  { name: 'Vie', servicios: 30 },
  { name: 'Sáb', servicios: 16 },
];

const ServicesPerDayChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Servicios por Día (Semana Actual)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Bar dataKey="servicios" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Servicios" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ServicesPerDayChart;
