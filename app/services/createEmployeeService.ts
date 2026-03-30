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
        employee_cost: employeeData.hourlyRate,
        worked_hours: 0,
      }),
    });

    if (!response.ok) {
      const responseText = await response.json();
      console.log(response.status);
      throw new Error(responseText.detail || 'Failed to create employee');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
