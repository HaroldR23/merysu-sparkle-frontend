import { Building, Search, Plus, TrendingUp, DollarSign, ClipboardList } from 'lucide-react';
import { useState } from 'react';

interface Client {
  id: string;
  nombre: string;
  tipo: 'residencial' | 'comercial';
  serviciosRealizados: number;
  totalFacturado: number;
  ultimoServicio: string;
  estado: 'activo' | 'inactivo';
}

const mockClients: Client[] = [
  {
    id: '1',
    nombre: 'Corporativo Tech SA',
    tipo: 'comercial',
    serviciosRealizados: 24,
    totalFacturado: 6720,
    ultimoServicio: '2026-01-03',
    estado: 'activo',
  },
  {
    id: '2',
    nombre: 'Familia Martínez',
    tipo: 'residencial',
    serviciosRealizados: 12,
    totalFacturado: 2160,
    ultimoServicio: '2026-01-03',
    estado: 'activo',
  },
  {
    id: '3',
    nombre: 'Hotel Plaza',
    tipo: 'comercial',
    serviciosRealizados: 18,
    totalFacturado: 11700,
    ultimoServicio: '2026-01-02',
    estado: 'activo',
  },
  {
    id: '4',
    nombre: 'Familia López',
    tipo: 'residencial',
    serviciosRealizados: 8,
    totalFacturado: 1440,
    ultimoServicio: '2025-12-28',
    estado: 'activo',
  },
  {
    id: '5',
    nombre: 'Oficinas Centro',
    tipo: 'comercial',
    serviciosRealizados: 15,
    totalFacturado: 4200,
    ultimoServicio: '2025-12-30',
    estado: 'activo',
  },
];

export function ClientsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = mockClients.filter(client =>
    client.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalClients = mockClients.length;
  const totalRevenue = mockClients.reduce((sum, client) => sum + client.totalFacturado, 0);
  const totalServices = mockClients.reduce((sum, client) => sum + client.serviciosRealizados, 0);
  const activeClients = mockClients.filter(c => c.estado === 'activo').length;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Clientes</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Gestión de clientes y relaciones</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Nuevo Cliente</span>
          <span className="sm:hidden">Nuevo</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Total Clientes</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">{totalClients}</p>
          <p className="text-xs text-gray-500 mt-1">{activeClients} activos</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Facturación Total</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">${totalRevenue.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Histórico</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Servicios Total</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">{totalServices}</p>
          <p className="text-xs text-gray-500 mt-1">Todos los tiempos</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">Promedio por Cliente</span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            ${Math.round(totalRevenue / totalClients).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">Facturación media</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Servicios
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Facturado
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Último Servicio
                </th>
                <th className="hidden lg:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Building className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-900">
                        {client.nombre}
                      </span>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      client.tipo === 'comercial'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {client.tipo}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                    {client.serviciosRealizados}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-green-600">
                    ${client.totalFacturado.toLocaleString()}
                  </td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                    {new Date(client.ultimoServicio).toLocaleDateString('es-ES')}
                  </td>
                  <td className="hidden lg:table-cell px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      client.estado === 'activo'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {client.estado}
                    </span>
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
