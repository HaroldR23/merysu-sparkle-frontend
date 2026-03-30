import { Service, ServiceStatus } from "../contexts/models";

// Backend response type (snake_case)
export interface BackendServiceModel {
  id: string;
  date: string;
  customer_name: string;
  service_type: string;
  employee_names: string[];
  worked_hours: number;
  charged_price: number;
  total_cost: number;
  margin: number;
  status: string;
}

// Map backend response to frontend Service model
const mapBackendServiceToFrontend = (backendService: BackendServiceModel): Service => ({
  id: backendService.id,
  date: backendService.date,
  customerName: backendService.customer_name,
  serviceType: backendService.service_type,
  employeeNames: backendService.employee_names,
  workedHours: backendService.worked_hours,
  chargedPrice: backendService.charged_price,
  totalCost: backendService.total_cost,
  margin: backendService.margin,
  status: backendService.status as ServiceStatus,
});

export const fetchServicesService = async (): Promise<Service[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const responseText = await response.json();
      console.log(response.status);
      throw new Error(responseText.detail || 'Failed to fetch services');
    }

    const data = await response.json();

    // Map backend response to frontend format
    return data.services.map(mapBackendServiceToFrontend);
  } catch (error) {
    throw error;
  }
};
