/* eslint-disable @typescript-eslint/no-explicit-any */
import { Users, Clock, DollarSign, ClipboardList, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Employee {
  id: string;
  nombre: string;
  horasTrabajadas: number;
  costoMensual: number;
  serviciosRealizados: number;
  productividad: number;
}

const mockEmployees: Employee[] = [
  {
    id: '1',
    nombre: 'María González',
    horasTrabajadas: 168,
    costoMensual: 3360,
    serviciosRealizados: 42,
    productividad: 95,
  },
  {
    id: '2',
    nombre: 'Juan Pérez',
    horasTrabajadas: 156,
    costoMensual: 3120,
    serviciosRealizados: 38,
    productividad: 88,
  },
  {
    id: '3',
    nombre: 'Ana Martínez',
    horasTrabajadas: 152,
    costoMensual: 3040,
    serviciosRealizados: 36,
    productividad: 92,
  },
  {
    id: '4',
    nombre: 'Carlos López',
    horasTrabajadas: 145,
    costoMensual: 2900,
    serviciosRealizados: 35,
    productividad: 86,
  },
  {
    id: '5',
    nombre: 'Laura Rodríguez',
    horasTrabajadas: 138,
    costoMensual: 2760,
    serviciosRealizados: 32,
    productividad: 84,
  },
];

const productivityData = mockEmployees.map(emp => ({
  name: emp.nombre.split(' ')[0],
  productividad: emp.productividad,
}));

export function EmployeesSection() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Empleados</h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">Gestión de equipo y productividad</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Total Empleados</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">5</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Horas Totales</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">759</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Costo Total</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">$15,180</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Servicios Total</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">183</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Employees Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Lista de Empleados</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nombre
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Horas
                  </th>
                  <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Costo
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Servicios
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-700">
                            {employee.nombre.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-900">
                          {employee.nombre}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {employee.horasTrabajadas}h
                    </td>
                    <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      ${employee.costoMensual.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {employee.serviciosRealizados}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Productivity Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-700" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Productividad por Empleado</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: any) => [`${value}%`, 'Productividad']}
              />
              <Bar dataKey="productividad" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
