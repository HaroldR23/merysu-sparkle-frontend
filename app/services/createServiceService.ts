import { CreateServiceData, Service } from "../contexts/models";
import { serviceStatusTranslationsToSpa, serviceTypeTranslationsToEn, serviceTypeTranslationsToSpa } from "./fetchServicesService";

export const createServiceService = async (serviceData: CreateServiceData): Promise<Service> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
          status: "completed"
      }),
    });

    if (!response.ok) {
      const responseText = await response.json();
      throw new Error(responseText.detail || 'Failed to create service');
    }

    const data = await response.json();
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
  } catch (error) {
    throw error;
  }
};
