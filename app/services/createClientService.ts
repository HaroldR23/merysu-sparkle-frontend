import { Client, ClientStatus, CreateClientData } from "../contexts/models";

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
}

export const typeTranslations: Record<string, string> = {
  comercial: "commercial",
  residencial: "residential",
};

export const statusTranslations: Record<string, string> = {
  activo: "active",
  inactivo: "inactive",
};

export const mapToCreateClientBackend = (data: CreateClientData): CreateClientBackend => ({
  name: data.name,
  type: typeTranslations[data.type] ?? data.type,
  email: data.email,
  services_count: 0,
  total_billed: 0,
  phone_number: data.phone,
  location: data.address,
  city: data.city,
  status: statusTranslations[data.status] ?? data.status,
  notes: data.notes,
});

export const createClientService = async (clientData: CreateClientData): Promise<Client> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mapToCreateClientBackend(clientData)),
    });

    if (!response.ok) {
      const responseText = await response.json();
      console.log(response.status);
      throw new Error(responseText.detail || 'Failed to create client');
    }

    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      type: data.type,
      totalServices: 0,
      totalBilling: 0,
      lastService: "",
      status: statusTranslations[data.status] == "active" ? ClientStatus.ACTIVO : ClientStatus.INACTIVO,
    };
  } catch (error) {
    throw error;
  }
};
