import { CreateEmployeeData, Employee } from "../contexts/models";


export const createEmployeeService = async (employeeData: CreateEmployeeData): Promise<Employee> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: employeeData.name,
        phone_number: employeeData.phoneNumber,
        services_count: 0,
        employee_cost: 0,
        worked_hours: 0,
        entry_date: employeeData.entryDate,
      }),
    });

    if (!response.ok) {
      const responseText = await response.json();
      throw new Error(responseText.detail || 'Failed to create employee');
    }

    const data = await response.json();
    const newEmployee: Employee = {
      id: data.id,
      name: data.name,
      workedHours: data.worked_hours,
      employeeCost: data.employee_cost,
      servicesCount: data.services_count,
      phoneNumber: data.phone_number,
      entryDate: data.entry_date,
      productivity: 0
    };

    return newEmployee;

  } catch (error) {
    throw error;
  }
};
