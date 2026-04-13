import { ClientDashboard } from "../contexts/models";
import { apiRequest } from "./helperFunction";
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

interface BackendClientsResponse {
  customers: BackendClientModel[];
  summary: {
    total_clients: number;
    total_billing: number;
    total_services: number;
    average_billing_per_client: number;
  };
}

export const fetchClientsService = async (): Promise<ClientDashboard> => {
  const data = await apiRequest<BackendClientsResponse>('/customers');
  return {
    clients: data.customers.map((customer) => ({
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
};
