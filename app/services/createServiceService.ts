import { CreateServiceData, Service } from "../contexts/models";

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
          service_type: serviceData.serviceType,
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
      console.log(response.status);
      throw new Error(responseText.detail || 'Failed to create service');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
