import { CreateEmployeeData, Employee } from "../contexts/models";
import { apiRequest } from "./helperFunction";


interface BackendCreatedEmployee {
  id: string;
  name: string;
  worked_hours: number;
  employee_cost: number;
  services_count: number;
  phone_number: string;
  entry_date: string;
}

export const createEmployeeService = async (employeeData: CreateEmployeeData): Promise<Employee> => {
  const data = await apiRequest<BackendCreatedEmployee>('/employees', {
    method: 'POST',
    body: JSON.stringify({
      name: employeeData.name,
      phone_number: employeeData.phoneNumber,
      services_count: 0,
      employee_cost: 0,
      worked_hours: 0,
      entry_date: employeeData.entryDate,
    }),
  });
  return {
    id: data.id,
    name: data.name,
    workedHours: data.worked_hours,
    employeeCost: data.employee_cost,
    servicesCount: data.services_count,
    phoneNumber: data.phone_number,
    entryDate: data.entry_date,
    productivity: 0,
  };
};
