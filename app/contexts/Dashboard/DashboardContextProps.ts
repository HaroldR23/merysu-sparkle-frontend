import { 
  Service, 
  Employee, 
  CreateServiceData,
  EmployeeMetrics,
  CreateEmployeeData,
  Client,
  ClientMetrics,
  CreateClientData
} from "../models";

export interface DashboardContextProps {
  // Services
  services: Service[];
  servicesLoading: boolean;
  servicesError: string | null;
  servicesHasFetched: boolean;
  fetchServices: () => Promise<void>;
  refreshServices: () => Promise<void>;
  createService: (data: CreateServiceData) => Promise<void>;

  // Clients
  clients: Client[];
  clientsLoading: boolean;
  clientsError: string | null;
  clientsHasFetched: boolean;
  clientMetrics: ClientMetrics | null;
  fetchClients: () => Promise<void>;
  refreshClients: () => Promise<void>;
  createClient: (data: CreateClientData) => Promise<void>;

  // Employees
  employees: Employee[];
  employeesLoading: boolean;
  employeesError: string | null;
  employeesHasFetched: boolean;
  employeeMetrics: EmployeeMetrics | null;
  fetchEmployees: () => Promise<void>;
  refreshEmployees: () => Promise<void>;
  createEmployee: (data: CreateEmployeeData) => Promise<void>;

}
