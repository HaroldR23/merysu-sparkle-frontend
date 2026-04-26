'use server';

// Función helper para hacer requests
export async function apiRequest<T = Record<string, unknown>>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${process.env.API_URL}${endpoint}`;
    
    const config: RequestInit = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.API_KEY || '',
            ...options.headers
        }
    };
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const responseText = await response.json();
      throw new Error(responseText.detail || 'Failed to create employee');
    }
  
    return response.json();
}
