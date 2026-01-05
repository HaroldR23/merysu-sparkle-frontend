import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">Bienvenido al panel de control</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="hidden sm:inline">Últimos 30 días</span>
          <span className="sm:hidden">30 días</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
