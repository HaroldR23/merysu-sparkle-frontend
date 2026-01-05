/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileText, Download, Calendar, Users, Building } from 'lucide-react';

interface ReportCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  stats: string;
}

const reports: ReportCard[] = [
  {
    id: 'monthly',
    title: 'Reporte Mensual',
    description: 'Resumen completo de operaciones y finanzas del mes',
    icon: Calendar,
    color: 'blue',
    stats: 'Junio 2026',
  },
  {
    id: 'employee',
    title: 'Reporte por Empleado',
    description: 'Productividad, horas y rendimiento individual',
    icon: Users,
    color: 'emerald',
    stats: '5 empleados',
  },
  {
    id: 'client',
    title: 'Reporte por Cliente',
    description: 'Historial de servicios y facturación por cliente',
    icon: Building,
    color: 'purple',
    stats: '48 clientes activos',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
};

export function ReportsSection() {
  const handleExport = (type: 'pdf' | 'excel', reportId: string) => {
    console.log(`Exporting ${reportId} as ${type}`);
    // Handle export logic
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Reportes</h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">Genera y exporta reportes detallados</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs sm:text-sm text-gray-600">Reportes Generados</span>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">24</p>
          <p className="text-xs text-gray-500 mt-1">Este mes</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs sm:text-sm text-gray-600">Último Reporte</span>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">Ayer</p>
          <p className="text-xs text-gray-500 mt-1">Reporte mensual</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs sm:text-sm text-gray-600">Formato Preferido</span>
            <Download className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">PDF</p>
          <p className="text-xs text-gray-500 mt-1">85% de exportaciones</p>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {reports.map((report) => {
          const Icon = report.icon;
          const colors = colorClasses[report.color];
          
          return (
            <div
              key={report.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`${colors.bg} ${colors.border} border-b p-4 sm:p-6`}>
                <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center border ${colors.border} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{report.description}</p>
                <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                  {report.stats}
                </span>
              </div>
              
              <div className="p-4 bg-gray-50 flex gap-2">
                <button
                  onClick={() => handleExport('pdf', report.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4" />
                  PDF
                </button>
                <button
                  onClick={() => handleExport('excel', report.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4" />
                  Excel
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Reportes Recientes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Tipo de Reporte
                </th>
                <th className="hidden sm:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Periodo
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Fecha Generación
                </th>
                <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Formato
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Reporte Mensual
                </td>
                <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Junio 2026
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  03/01/2026
                </td>
                <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  PDF
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Descargar</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Reporte por Empleado
                </td>
                <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Mayo 2026
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  01/06/2026
                </td>
                <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Excel
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Descargar</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Reporte por Cliente
                </td>
                <td className="hidden sm:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Mayo 2026
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  28/05/2026
                </td>
                <td className="hidden md:table-cell px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  PDF
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Descargar</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
