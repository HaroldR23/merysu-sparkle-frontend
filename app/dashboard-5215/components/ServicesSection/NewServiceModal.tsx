import { useState, useEffect } from 'react';
import { X, Calendar, DollarSign, Users, Loader2 } from 'lucide-react';
import { useDashboardContext } from '../../hooks/useDashboardContext';
import { CreateServiceData } from '@/app/contexts/models';

interface NewServiceModalProps {
  onClose: () => void;
}

export function NewServiceModal({ onClose }: NewServiceModalProps) {
  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toTimeString().split(' ')[0].slice(0, 5);

  const [formData, setFormData] = useState<CreateServiceData>({
    address: '',
    date: currentDate,
    customerName: '',
    distanceKm: 0,
    endTime: currentTime,
    hourlyRate: 0,
    chargedPrice: 0,
    serviceType: '',
    startTime: currentTime,
    totalCost: 0,
    internalNotes: '',
    employeeIds: [],
    customerId: '',
    workedHours: 0,
  });

  const { createService, clients, employees } = useDashboardContext();
  const [isLoading, setIsLoading] = useState(false);
  const [employeeError, setEmployeeError] = useState(false);

  useEffect(() => {
    const toMinutes = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    const diff = toMinutes(formData.endTime) - toMinutes(formData.startTime);
    const hours = diff > 0 ? Math.round(diff / 60) : 0;
    const price = Math.round(hours * formData.hourlyRate * 100) / 100;
    setFormData((prev) => ({ ...prev, workedHours: hours, chargedPrice: price }));
  }, [formData.startTime, formData.endTime, formData.hourlyRate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.employeeIds.length === 0) {
      setEmployeeError(true);
      return;
    }
    setIsLoading(true);
    try {
      await createService(formData);
      await new Promise(r => setTimeout(r, 600));
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmployeeToggle = (employeeId: string) => {
    setFormData((prev) => {
      const updated = prev.employeeIds.includes(employeeId)
        ? prev.employeeIds.filter((id) => id !== employeeId)
        : [...prev.employeeIds, employeeId];
      if (updated.length > 0) setEmployeeError(false);
      return { ...prev, employeeIds: updated };
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => !isLoading && e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Registrar Nuevo Servicio</h2>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Fecha y Hora */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Fecha y Horario
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hora Inicio
                  </label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hora Fin
                  </label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Cliente */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Cliente
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cliente
                </label>
                <select
                  value={formData.customerId}
                  onChange={(e) => {
                    const selected = clients.find((c) => c.id === e.target.value);
                    setFormData({
                      ...formData,
                      customerId: e.target.value,
                      customerName: selected?.name ?? '',
                      address: selected?.address ?? '',
                    });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Seleccionar cliente...</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tipo de Servicio */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Servicio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Servicio
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Seleccionar...</option>
                    <option value="residential_cleaning">Limpieza de Hogar</option>
                    <option value="commercial_cleaning">Limpieza de Oficina</option>
                    <option value="deep_cleaning">Limpieza Profunda</option>
                    <option value="move_in_out">Mudanza</option>
                    <option value="post_construction">Post Construcción</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Distancia (km)
                  </label>
                  <input
                    type="number"
                    value={formData.distanceKm}
                    onChange={(e) => setFormData({ ...formData, distanceKm: Number(e.target.value) })}
                    onFocus={(e) => e.target.select()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"  
                    step="0.1"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Empleados */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Equipo de Trabajo
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empleados asignados
                </label>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-lg p-3 ${employeeError ? 'border-red-500' : 'border-gray-300'}`}>
                  {employees.map((employee) => (
                    <label
                      key={employee.id}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2 py-1"
                    >
                      <input
                        type="checkbox"
                        checked={formData.employeeIds.includes(employee.id)}
                        onChange={() => handleEmployeeToggle(employee.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{employee.name}</span>
                    </label>
                  ))}
                  {employees.length === 0 && (
                    <p className="text-sm text-gray-400 col-span-2">No hay empleados disponibles.</p>
                  )}
                </div>
                {employeeError && (
                  <p className="mt-1 text-sm text-red-500">Debe seleccionar al menos un empleado.</p>
                )}
              </div>
            </div>

            {/* Costos y Precios */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Costos y Facturación
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horas Trabajadas
                  </label>
                  <input
                    type="number"
                    value={formData.workedHours}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 cursor-default"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Valor por Hora ($)
                  </label>
                  <input
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({ ...formData, hourlyRate: Number(e.target.value) })}
                    onFocus={(e) => e.target.select()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Costo Total ($)
                  </label>
                  <input
                    type="number"
                    value={formData.totalCost}
                    onChange={(e) => setFormData({ ...formData, totalCost: Number(e.target.value) })}
                    onFocus={(e) => e.target.select()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio Cobrado ($)
                  </label>
                  <input
                    type="number"
                    value={formData.chargedPrice}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 cursor-default"
                  />
                </div>
              </div>
            </div>

            {/* Observaciones */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observaciones Internas
              </label>
              <textarea
                value={formData.internalNotes}
                onChange={(e) => setFormData({ ...formData, internalNotes: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Notas adicionales sobre el servicio..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-40"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Guardando...</>
              ) : (
                'Guardar Servicio'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
