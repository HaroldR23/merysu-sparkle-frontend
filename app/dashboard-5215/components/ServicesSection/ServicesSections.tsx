'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Calendar } from 'lucide-react';
import { useDashboardContext } from '../../hooks/useDashboardContext';
import { ServiceStatus } from '../../../contexts/models';
import { NewServiceModal } from './NewServiceModal';

export function ServicesSection() {
  const { 
    services, 
    servicesLoading, 
    servicesError,
    servicesHasFetched,
    fetchServices,
  } = useDashboardContext();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    if (!servicesHasFetched) {
      fetchServices();
    }
  }, [servicesHasFetched, fetchServices]);
  
  const filteredServices = services.filter(service => {
    const matchesSearch =
      service.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    const serviceDate = service.date.slice(0, 10);
    const matchesFrom = dateFrom ? serviceDate >= dateFrom : true;
    const matchesTo = dateTo ? serviceDate <= dateTo : true;
    return matchesSearch && matchesFrom && matchesTo;
  });

  const getStatusColor = (estado: ServiceStatus) => {
    switch (estado) {
      case ServiceStatus.COMPLETADO:
        return 'bg-green-100 text-green-800';
      case ServiceStatus.PENDIENTE:
        return 'bg-amber-100 text-amber-800';
      case ServiceStatus.CANCELADO:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (servicesLoading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Cargando servicios...</div>
        </div>
      </div>
    );
  }

  if (servicesError) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-red-500">Error: {servicesError}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Servicios</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Gestión de servicios realizados</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          <Plus className="w-5 h-5" />
          <span>Nuevo Servicio</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por cliente o tipo de servicio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button
            onClick={() => setShowDateFilter(prev => !prev)}
            className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg transition-colors text-sm ${
              showDateFilter || dateFrom || dateTo
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:bg-gray-50 text-gray-600'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Filtrar por fecha</span>
          </button>
        </div>
        {showDateFilter && (
          <div className="flex flex-col sm:flex-row gap-3 mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-1">
              <label className="text-xs text-gray-500 whitespace-nowrap">Desde</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <label className="text-xs text-gray-500 whitespace-nowrap">Hasta</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            {(dateFrom || dateTo) && (
              <button
                onClick={() => { setDateFrom(''); setDateTo(''); }}
                className="px-3 py-2 text-xs text-gray-500 hover:text-gray-700 underline whitespace-nowrap"
              >
                Limpiar
              </button>
            )}
          </div>
        )}
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="sticky left-0 z-10 bg-gray-50 shadow-[1px_0_0_0_#e5e7eb] px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className=" md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo de Servicio
                </th>
                <th className=" lg:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empleados
                </th>
                <th className=" sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Horas
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ingreso
                </th>
                <th className=" md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Costo
                </th>
                <th className=" lg:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Margen
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <tr
                  key={service.id}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="sticky left-0 z-10 bg-white shadow-[1px_0_0_0_#e5e7eb] px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">
                    {service.customerName}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(service.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' })}
                  </td>
                  <td className=" md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {service.serviceType}
                  </td>
                  <td className=" lg:table-cell px-4 sm:px-6 py-4 text-sm text-gray-600">
                    {service.employeeNames.join(', ')}
                  </td>
                  <td className=" sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.workedHours}h
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    ${service.chargedPrice}
                  </td>
                  <td className=" md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    ${service.totalCost}
                  </td>
                  <td className=" lg:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.margin ? service.margin.toFixed(1) : '0'}%
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <NewServiceModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
