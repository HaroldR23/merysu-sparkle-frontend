import { ClientDashboard } from "../contexts/models";
import { statusTranslationsToSpa, typeTranslationsToSpa } from "./createClientService";
export interface BackendClientModel {
  id: string;
  name: string;
  type: string;
  services_count: number;
  total_billed: number;
  last_service_date: string;
  status: string;
  location?: string;
}

export const fetchClientsService = async (): Promise<ClientDashboard> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const responseText = await response.json();
      throw new Error(responseText.detail || 'Failed to fetch clients');
    }

    const data = await response.json();
    const clientDashboard: ClientDashboard = {
      clients: data.customers.map((customer: BackendClientModel) => ({
        id: customer.id,
        name: customer.name,
        type: typeTranslationsToSpa[customer.type] ?? customer.type,
        totalServices: customer.services_count,
        totalBilling: customer.total_billed,
        lastService: customer.last_service_date,
        status: statusTranslationsToSpa[customer.status] ?? customer.status,
        address: customer.location,
      })),
      metrics: {
        totalClients: data.summary.total_clients,
        totalBilling: data.summary.total_billing,
        totalServices: data.summary.total_services,
        averageBillingPerClient: data.summary.average_billing_per_client,
      },
    };
    return clientDashboard; 
  } catch (error) {
    throw error;
  }
};
