/* eslint-disable @typescript-eslint/no-explicit-any */
import { DollarSign, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { mes: 'Ene', ingresos: 32000, costos: 20000, ganancia: 12000, margen: 37.5 },
  { mes: 'Feb', ingresos: 35500, costos: 21500, ganancia: 14000, margen: 39.4 },
  { mes: 'Mar', ingresos: 38200, costos: 23000, ganancia: 15200, margen: 39.8 },
  { mes: 'Abr', ingresos: 41000, costos: 24500, ganancia: 16500, margen: 40.2 },
  { mes: 'May', ingresos: 39500, costos: 23800, ganancia: 15700, margen: 39.7 },
  { mes: 'Jun', ingresos: 45280, costos: 28150, ganancia: 17130, margen: 37.8 },
];

export function FinancesSection() {
  const currentMonth = monthlyData[monthlyData.length - 1];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Finanzas</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Análisis financiero y rentabilidad</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span>Junio 2026</span>
        </button>
      </div>

      {/* Current Month Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Ingresos del Mes</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            ${currentMonth.ingresos.toLocaleString()}
          </p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-xs sm:text-sm font-medium text-green-600">+14.6%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Costos del Mes</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            ${currentMonth.costos.toLocaleString()}
          </p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-red-600" />
            <span className="text-xs sm:text-sm font-medium text-red-600">+18.3%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Ganancia del Mes</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            ${currentMonth.ganancia.toLocaleString()}
          </p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-xs sm:text-sm font-medium text-emerald-600">+9.1%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Margen del Mes</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            {currentMonth.margen.toFixed(1)}%
          </p>
          <div className="flex items-center gap-1">
            <TrendingDown className="w-4 h-4 text-amber-600" />
            <span className="text-xs sm:text-sm font-medium text-amber-600">-1.9%</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Revenue Evolution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Evolución de Ingresos</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: any) => `$${value.toLocaleString()}`}
              />
              <Line 
                type="monotone" 
                dataKey="ingresos" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
                name="Ingresos"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Margin */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Margen Mensual (%)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" domain={[0, 50]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: any) => `${value.toFixed(1)}%`}
              />
              <Bar dataKey="margen" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Margen" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Details Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Resumen Mensual Detallado</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Mes
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Ingresos
                </th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Costos
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Ganancia
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Margen (%)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {monthlyData.map((month, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {month.mes}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    ${month.ingresos.toLocaleString()}
                  </td>
                  <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    ${month.costos.toLocaleString()}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">
                    ${month.ganancia.toLocaleString()}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {month.margen.toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
