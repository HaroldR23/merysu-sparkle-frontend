'use client';

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";
import { ServicesSection } from "./components/ServicesSection/ServicesSections";
import { ReportsSection } from "./components/ReportsSection/ReportsSection";
import { ClientsSection } from "./components/ClientsSection/ClientsSection";
import { EmployeesSection } from "./components/EmployeesSection/EmployeesSection";
import { FinancesSection } from "./components/FinancesSection/FinancesSection";


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'services':
        return <ServicesSection />;
      case 'reports':
        return <ReportsSection />;
      case 'clients':
        return <ClientsSection />;
      case 'employees':
        return <EmployeesSection />;
      case 'finances':
        return <FinancesSection />;
      default:
        return <DashboardOverview />;
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {renderContent()}
    </div>
  )
}

export default Dashboard;
