"use client"

import { createContext } from "react";
import { DashboardContextProps } from "./DashboardContextProps";

export const DashboardContext = createContext<DashboardContextProps>({
  // Services
  services: [],
  servicesLoading: false,
  servicesError: null,
  fetchServices: async () => {},
  refreshServices: async () => {},
  createService: async () => {},

  // // Employees
  employees: [],
  employeesLoading: false,
  employeesError: null,
  employeeMetrics: null,
  fetchEmployees: async () => {},
  refreshEmployees: async () => {},
  createEmployee: async () => {},

  // Clients
  clients: [],
  clientsLoading: false,
  clientsError: null,
  fetchClients: async () => {},
  refreshClients: async () => {},
  createClient: async () => {},

});
