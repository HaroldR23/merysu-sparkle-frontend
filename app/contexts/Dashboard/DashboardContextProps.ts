import { 
  Service, 
  Employee, 
  CreateServiceData,
  EmployeeMetrics,
  CreateEmployeeData
} from "../models";

export interface DashboardContextProps {
  // Services: Note: It's missing to get the employee and client lists to show in the create service form, but I want to get this merged first and then add that in a next PR to avoid making this too big
  services: Service[];
  servicesLoading: boolean;
  servicesError: string | null;
  fetchServices: () => Promise<void>;
  refreshServices: () => Promise<void>;
  createService: (data: CreateServiceData) => Promise<void>;

  // Employees
  employees: Employee[];
  employeesLoading: boolean;
  employeesError: string | null;
  employeeMetrics: EmployeeMetrics | null;
  fetchEmployees: () => Promise<void>;
  refreshEmployees: () => Promise<void>;
  createEmployee: (data: CreateEmployeeData) => Promise<void>;

}
