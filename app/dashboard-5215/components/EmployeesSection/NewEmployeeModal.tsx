import { useState } from 'react';
import { X, User, Phone, Briefcase, Calendar, Loader2 } from 'lucide-react';
import { CreateEmployeeData } from '@/app/contexts/models';

interface NewEmployeeModalProps {
  onClose: () => void;
  onSave: (employee: CreateEmployeeData) => Promise<void>;
}

const NewEmployeeModal = ({ onClose, onSave }: NewEmployeeModalProps) => {
  const [formData, setFormData] = useState<CreateEmployeeData>({
    name: '',
    phoneNumber: '',
    entryDate: new Date().toISOString().split('T')[0],
    status: 'activo',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'El teléfono es obligatorio.';
    if (!formData.entryDate) newErrors.entryDate = 'La fecha de ingreso es obligatoria.';
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
      await onSave({
        ...formData,
        hourlyRate: Number(formData.hourlyRate),
      });
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

  const inputClass = (key: string) =>
    `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
      errors[key] ? 'border-red-400 bg-red-50' : 'border-gray-300'
    }`;

  const iconInputClass = (key: string) =>
    `w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
      errors[key] ? 'border-red-400 bg-red-50' : 'border-gray-300'
    }`;

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
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Nuevo Empleado</h2>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Datos Personales */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              Datos Personales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => field('name', e.target.value)}
                  placeholder="Ej. María"
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => field('phoneNumber', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={iconInputClass('phoneNumber')}
                  />
                </div>
                {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
              </div>
            </div>
          </section>

          <div className="border-t border-gray-100" />

          {/* Información Laboral */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Información Laboral
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Ingreso <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={formData.entryDate}
                    onChange={(e) => field('entryDate', e.target.value)}
                    className={iconInputClass('entryDate')}
                  />
                </div>
                {errors.entryDate && <p className="text-xs text-red-500 mt-1">{errors.entryDate}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <div className="flex gap-3">
                  {(['activo', 'inactivo'] as const).map((op) => (
                    <button
                      key={op}
                      type="button"
                      onClick={() => field('status', op)}
                      className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors capitalize ${
                        formData.status === op
                          ? op === 'activo'
                            ? 'bg-green-50 border-green-400 text-green-700'
                            : 'bg-gray-100 border-gray-400 text-gray-700'
                          : 'border-gray-200 text-gray-400 hover:border-gray-300'
                      }`}
                    >
                      {op === 'activo' ? '✓ Activo' : '✗ Inactivo'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-100" />

          {/* Notas */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Notas Adicionales
            </h3>
            <textarea
              value={formData.notes}
              onChange={(e) => field('notes', e.target.value)}
              rows={3}
              placeholder="Habilidades especiales, restricciones de horario, observaciones internas..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            />
          </section>

          {/* Footer */}
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
                'Guardar Empleado'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEmployeeModal;
