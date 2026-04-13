import { Client, ClientStatus, ClientType, CreateClientData } from "../contexts/models";
import { apiRequest } from "./helperFunction";

export interface CreateClientBackend { 
  name: string;
  type: string;
  email: string;
  services_count: number;
  total_billed: number;
  phone_number: string;
  location: string;
  city: string;
  status: string;
  notes: string;
  last_service_date: string;
}

export const typeTranslationsToEn: Record<string, string> = {
  comercial: "commercial",
  residencial: "residential",
};

export const typeTranslationsToSpa: Record<string, ClientType> = {
  commercial: ClientType.COMERCIAL,
  residential: ClientType.RESIDENCIAL,
};

export const statusTranslationsToEn: Record<string, string> = {
  activo: "active",
  inactivo: "inactive",
};
export const statusTranslationsToSpa: Record<string, ClientStatus> = {
  active: ClientStatus.ACTIVO,
  inactive: ClientStatus.INACTIVO,
};

export const mapToCreateClientBackend = (data: CreateClientData): CreateClientBackend => ({
  name: data.name,
  type: typeTranslationsToEn[data.type] ?? data.type,
  email: data.email,
  services_count: 0,
  total_billed: 0,
  phone_number: data.phone,
  location: data.address,
  city: data.city,
  status: statusTranslationsToEn[data.status] ?? data.status,
  notes: data.notes,
  last_service_date: data.lastService,
});

interface BackendCreatedClient {
  id: string;
  name: string;
  type: string;
  last_service_date: string;
  location: string;
  status: string;
}

export const createClientService = async (clientData: CreateClientData): Promise<Client> => {
  const data = await apiRequest<BackendCreatedClient>('/customers', {
    method: 'POST',
    body: JSON.stringify(mapToCreateClientBackend(clientData)),
  });
  return {
    id: data.id,
    name: data.name,
    type: typeTranslationsToSpa[data.type] ?? data.type,
    totalServices: 0,
    totalBilling: 0,
    lastService: data.last_service_date,
    address: data.location,
    status: statusTranslationsToSpa[data.status] ?? data.status,
  };
};
