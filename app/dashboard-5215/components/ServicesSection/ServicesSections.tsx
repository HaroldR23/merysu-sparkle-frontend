import { useState } from 'react';
import { Plus, Search, Eye, Calendar } from 'lucide-react';
import { NewServiceModal } from './NewServiceModal';

interface Service {
  id: string;
  fecha: string;
  cliente: string;
  tipo: string;
  empleados: string[];
  horas: number;
  ingreso: number;
  costo: number;
  margen: number;
  estado: 'completado' | 'pendiente' | 'cancelado';
}

const mockServices: Service[] = [
  {
    id: '1',
    fecha: '2026-01-03',
    cliente: 'Corporativo Tech SA',
    tipo: 'Limpieza de Oficina',
    empleados: ['María G.', 'Juan P.'],
    horas: 4,
    ingreso: 280,
    costo: 160,
    margen: 42.9,
    estado: 'completado',
  },
  {
    id: '2',
    fecha: '2026-01-03',
    cliente: 'Familia Martínez',
    tipo: 'Limpieza de Hogar',
    empleados: ['Ana M.'],
    horas: 3,
    ingreso: 180,
    costo: 90,
    margen: 50.0,
    estado: 'completado',
  },
  {
    id: '3',
    fecha: '2026-01-04',
    cliente: 'Hotel Plaza',
    tipo: 'Limpieza Profunda',
    empleados: ['María G.', 'Carlos L.', 'Laura R.'],
    horas: 8,
    ingreso: 650,
    costo: 420,
    margen: 35.4,
    estado: 'pendiente',
  },
  {
    id: '4',
    fecha: '2026-01-02',
    cliente: 'Apartamento 5B',
    tipo: 'Mudanza',
    empleados: ['Juan P.', 'Carlos L.'],
    horas: 5,
    ingreso: 320,
    costo: 220,
    margen: 31.3,
    estado: 'completado',
  },
];

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = mockServices.filter(service =>
    service.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case 'completado':
        return 'bg-green-100 text-green-800';
      case 'pendiente':
        return 'bg-amber-100 text-amber-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
          <span className="hidden sm:inline">Registrar Nuevo Servicio</span>
          <span className="sm:hidden">Nuevo Servicio</span>
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
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span>Filtrar por fecha</span>
          </button>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo de Servicio
                </th>
                <th className="hidden lg:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empleados
                </th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Horas
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ingreso
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Costo
                </th>
                <th className="hidden lg:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Margen
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(service.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.cliente}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {service.tipo}
                  </td>
                  <td className="hidden lg:table-cell px-4 sm:px-6 py-4 text-sm text-gray-600">
                    {service.empleados.join(', ')}
                  </td>
                  <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.horas}h
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    ${service.ingreso}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    ${service.costo}
                  </td>
                  <td className="hidden lg:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.margen.toFixed(1)}%
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.estado)}`}>
                      {service.estado}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 p-1">
                      <Eye className="w-4 h-4" />
                    </button>
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