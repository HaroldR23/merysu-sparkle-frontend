import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'María González', horas: 168 },
  { name: 'Juan Pérez', horas: 156 },
  { name: 'Ana Martínez', horas: 152 },
  { name: 'Carlos López', horas: 145 },
  { name: 'Laura Rodríguez', horas: 138 },
];

const HoursPerEmployeeChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Horas Trabajadas por Empleado (Mes)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" stroke="#9ca3af" />
          <YAxis dataKey="name" type="category" stroke="#9ca3af" width={120} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Bar dataKey="horas" fill="#14b8a6" radius={[0, 8, 8, 0]} name="Horas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HoursPerEmployeeChart;
