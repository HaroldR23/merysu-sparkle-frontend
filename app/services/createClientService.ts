import { Client } from "../contexts/models";

export interface CreateClientData {
  nombre: string;
  tipo: string;
}

export const createClientService = async (clientData: CreateClientData): Promise<Client> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      const responseText = await response.json();
      console.log(response.status);
      throw new Error(responseText.detail || 'Failed to create client');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
