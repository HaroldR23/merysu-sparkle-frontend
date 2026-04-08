import { Service, ServiceStatus, ServiceType } from "../contexts/models";

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

export const serviceTypeTranslationsToEn: Record<string, string> = {
  [ServiceType.LIMPIEZA_RESIDENCIAL]: "residential_cleaning",
  [ServiceType.LIMPIEZA_COMERCIAL]: "commercial_cleaning",
  [ServiceType.LIMPIEZA_POST_CONSTRUCCION]: "post_construction",
  [ServiceType.LIMPIEZA_PROFUNDA]: "deep_cleaning",
  [ServiceType.LIMPIEZA_MUDANZA]: "move_in_out",
}

export const serviceTypeTranslationsToSpa: Record<string, ServiceType> = {
  residential_cleaning: ServiceType.LIMPIEZA_RESIDENCIAL,
  commercial_cleaning: ServiceType.LIMPIEZA_COMERCIAL,
  post_construction: ServiceType.LIMPIEZA_POST_CONSTRUCCION,
  deep_cleaning: ServiceType.LIMPIEZA_PROFUNDA,
  move_in_out: ServiceType.LIMPIEZA_MUDANZA,
}

export const serviceStatusTranslationsToSpa: Record<string, ServiceStatus> = {
  completed: ServiceStatus.COMPLETADO,
  cancelled: ServiceStatus.CANCELADO,
  pending: ServiceStatus.PENDIENTE,
};

export const serviceStatusTranslationsToEn: Record<ServiceStatus, string> = {
  [ServiceStatus.COMPLETADO]: "completed",
  [ServiceStatus.CANCELADO]: "cancelled",
  [ServiceStatus.PENDIENTE]: "pending",
};

// Map backend response to frontend Service model
const mapBackendServiceToFrontend = (backendService: BackendServiceModel): Service => ({
  id: backendService.id,
  date: backendService.date,
  customerName: backendService.customer_name,
  serviceType: serviceTypeTranslationsToSpa[backendService.service_type] ?? backendService.service_type,
  employeeNames: backendService.employee_names,
  workedHours: backendService.worked_hours,
  chargedPrice: backendService.charged_price,
  totalCost: backendService.total_cost,
  margin: backendService.margin,
  status: serviceStatusTranslationsToSpa[backendService.status] ?? backendService.status,
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
      throw new Error(responseText.detail || 'Failed to fetch services');
    }

    const data = await response.json();

    // Map backend response to frontend format
    return data.services.map(mapBackendServiceToFrontend);
  } catch (error) {
    throw error;
  }
};
