import { useState } from 'react';
import { X, Building2, Phone, Mail, MapPin, User, FileText, Loader2 } from 'lucide-react';
import { CreateClientData } from '@/app/contexts/models';

interface NewClientModalProps {
  onClose: () => void;
  onSave: (client: CreateClientData) => Promise<void>;
}

export function NewClientModal({ onClose, onSave }: NewClientModalProps) {
  const [formData, setFormData] = useState<CreateClientData>({
    name: '',
    type: 'residencial' as 'residencial' | 'comercial',
    email: '',
    phone: '',
    address: '',
    city: '',
    status: 'activo' as 'activo' | 'inactivo',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
    if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria.';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es obligatoria.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    try {
      await onSave(formData);
      await new Promise(r => setTimeout(r, 600));
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const field = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => !isLoading && e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Nuevo Cliente</h2>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Información Principal */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Información Principal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre / Razón Social <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => field('name', e.target.value)}
                  placeholder="Ej. Familia García / Corporativo ABC S.A."
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Tipo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Cliente <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => field('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                </select>
              </div>

              {/* Estado */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => field('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-100" />

          {/* Contacto */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              Información de Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => field('email', e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => field('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                      errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </section>

          <div className="border-t border-gray-100" />

          {/* Ubicación */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              Ubicación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dirección */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => field('address', e.target.value)}
                    placeholder="Calle, número, colonia"
                    className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                      errors.address ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.address && (
                  <p className="text-xs text-red-500 mt-1">{errors.address}</p>
                )}
              </div>

              {/* Ciudad */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => field('city', e.target.value)}
                  placeholder="Ciudad"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                    errors.city ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.city && (
                  <p className="text-xs text-red-500 mt-1">{errors.city}</p>
                )}
              </div>
            </div>
          </section>

          <div className="border-t border-gray-100" />

          {/* Notas */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Notas Adicionales
            </h3>
            <textarea
              value={formData.notes}
              onChange={(e) => field('notes', e.target.value)}
              rows={3}
              placeholder="Preferencias de horario, instrucciones especiales, acceso al inmueble..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            />
          </section>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm disabled:opacity-40"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-70"
            >
              {isLoading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Guardando...</>
              ) : (
                'Guardar Cliente'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
