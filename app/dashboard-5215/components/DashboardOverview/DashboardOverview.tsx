import { TrendingDown, Clock, DollarSign, ClipboardList, TrendingUpDown } from 'lucide-react';
import MetricCard from './MetricCard';
import RevenueVsCostsChart from '../Charts/RevenueVsCostsChart';
import ServicesPerDayChart from '../Charts/ServicesPerDayChart';
import ProfitabilityChart from '../Charts/ProfitabilityChart';
import HoursPerEmployeeChart from '../Charts/HoursPerEmployeeChart';
import Header from './Header';


const DashboardOverview = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <MetricCard
          title="Servicios Realizados"
          value="156"
          change={12.5}
          isPositive={true}
          icon={ClipboardList}
          color="blue"
        />
        <MetricCard
          title="Ingresos Totales"
          value="$45,280"
          change={18.2}
          isPositive={true}
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Costos Totales"
          value="$28,150"
          change={8.5}
          isPositive={false}
          icon={TrendingDown}
          color="red"
        />
        <MetricCard
          title="Margen Promedio"
          value="37.9%"
          change={5.3}
          isPositive={true}
          icon={TrendingUpDown}
          color="emerald"
        />
        <MetricCard
          title="Horas Trabajadas"
          value="1,248"
          change={-3.2}
          isPositive={false}
          icon={Clock}
          color="amber"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <RevenueVsCostsChart />
        <ServicesPerDayChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <ProfitabilityChart />
        <HoursPerEmployeeChart />
      </div>
    </div>
  );
}

export default DashboardOverview;
