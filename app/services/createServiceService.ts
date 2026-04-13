import { CreateServiceData, Service } from "../contexts/models";
import { apiRequest } from "./helperFunction";
import { serviceStatusTranslationsToSpa, serviceTypeTranslationsToEn, serviceTypeTranslationsToSpa } from "./fetchServicesService";

interface BackendCreatedService {
  id: string;
  date: string;
  service_type: string;
  employee_ids: string[];
  worked_hours: number;
  charged_price: number;
  total_cost: number;
  margin: number;
  status: string;
}

export const createServiceService = async (serviceData: CreateServiceData): Promise<Service> => {
  const data = await apiRequest<BackendCreatedService>('/services', {
    method: 'POST',
    body: JSON.stringify({
      date: serviceData.date,
      start_time: serviceData.startTime,
      end_time: serviceData.endTime,
      customer_id: serviceData.customerId,
      address: serviceData.address,
      service_type: serviceTypeTranslationsToEn[serviceData.serviceType] ?? serviceData.serviceType,
      distance_km: serviceData.distanceKm,
      worked_hours: serviceData.workedHours,
      hourly_rate: serviceData.hourlyRate,
      total_cost: serviceData.totalCost,
      charged_price: serviceData.chargedPrice,
      employee_ids: serviceData.employeeIds,
      internal_notes: serviceData.internalNotes,
      status: "completed",
    }),
  });
  return {
    id: data.id,
    date: data.date,
    customerName: serviceData.customerName,
    serviceType: serviceTypeTranslationsToSpa[data.service_type] ?? data.service_type,
    employeeNames: data.employee_ids,
    workedHours: data.worked_hours,
    chargedPrice: data.charged_price,
    totalCost: data.total_cost,
    margin: data.margin,
    status: serviceStatusTranslationsToSpa[data.status] ?? data.status,
  };
};
