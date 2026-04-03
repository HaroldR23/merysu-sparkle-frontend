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
      // case 'dashboard':
        // return <DashboardOverview />;
      case 'services':
        return <ServicesSection />;
      // case 'reports':
      //   return <ReportsSection />;
      case 'clients':
        return <ClientsSection />;
      case 'employees':
        return <EmployeesSection />;
      // case 'finances':
      //   return <FinancesSection />;
      default:
        return <EmployeesSection />;
    }
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">MerySu Admin</h1>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard;
