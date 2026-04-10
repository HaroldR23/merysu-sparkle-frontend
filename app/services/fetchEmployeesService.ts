import { EmployeeDashboard } from "../contexts/models";
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

export const fetchEmployeesService = async (): Promise<EmployeeDashboard> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const responseText = await response.json();
      throw new Error(responseText.detail || 'Failed to fetch employees');
    }

    const data = await response.json();
    const employeeResponse: EmployeeDashboard = {
      employees: data.employees.map((emp: BackendEmployeeModel) => ({
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

    return employeeResponse;
  } catch (error) {
    throw error;
  }
};
