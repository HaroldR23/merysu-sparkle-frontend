'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Users, Clock, DollarSign, ClipboardList, TrendingUp, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { useDashboardContext } from '../../hooks/useDashboardContext';
import NewEmployeeModal from './NewEmployeeModal';
import { CreateEmployeeData } from '@/app/contexts/models';

export function EmployeesSection() {
  const [showModal, setShowModal] = useState(false);
  const { 
    employees, 
    employeeMetrics,
    employeesLoading, 
    employeesError, 
    createEmployee,
    fetchEmployees 
  } = useDashboardContext();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const productivityData = employees.map(emp => ({
    name: emp.name.split(' ')[0],
    productivity: emp.productivity,
  }));

  const totalEmployees = employeeMetrics?.totalEmployees || 0;
  const totalHours = employeeMetrics?.totalHours || 0;
  const totalCost = employeeMetrics?.totalCost || 0;
  const totalServicesCount = employeeMetrics?.totalServices || 0;

  const handleSaveEmployee = (data: CreateEmployeeData) => {
    createEmployee(data);
  };

  if (employeesLoading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Cargando empleados...</div>
        </div>
      </div>
    );
  }

  if (employeesError) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-red-500">Error: {employeesError}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Empleados</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Gestión de equipo y productividad</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Nuevo Empleado</span>
          <span className="sm:hidden">Nuevo</span>
        </button>
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
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">{totalEmployees}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Horas Totales</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">{totalHours}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Costo Total</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">${totalCost}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Servicios Total</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">{totalServicesCount}</p>
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
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-700">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-900">
                          {employee.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {employee.workedHours}h
                    </td>
                    <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      ${employee.employeeCost}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {employee.servicesCount}
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
       {showModal && (
        <NewEmployeeModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveEmployee}
        />
      )}
    </div>
  );
};
