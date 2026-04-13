import { EmployeeDashboard } from "../contexts/models";
import { apiRequest } from "./helperFunction";
export interface BackendEmployeeModel {
  id: string;
  name: string;
  worked_hours: number;
  employee_cost: number;
  services_count: number;
  phone_number: string;
  entry_date: string;
  productivity: number;
};

interface BackendEmployeesResponse {
  employees: BackendEmployeeModel[];
  summary: {
    total_employees: number;
    total_hours: number;
    total_cost: number;
    total_services: number;
  };
}

export const fetchEmployeesService = async (): Promise<EmployeeDashboard> => {
  const data = await apiRequest<BackendEmployeesResponse>('/employees');
  return {
    employees: data.employees.map((emp) => ({
      id: emp.id,
      name: emp.name,
      workedHours: emp.worked_hours,
      employeeCost: emp.employee_cost,
      servicesCount: emp.services_count,
      phoneNumber: emp.phone_number,
      productivity: emp.productivity,
      entryDate: emp.entry_date,
    })),
    metrics: {
      totalEmployees: data.summary.total_employees,
      totalHours: data.summary.total_hours,
      totalCost: data.summary.total_cost,
      totalServices: data.summary.total_services,
    },
  };
};
