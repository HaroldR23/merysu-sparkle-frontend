import { QuoteRequestFormData } from "../(landing)/types/types";

export const sendQuoteRequestService = async (formData: QuoteRequestFormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send quote request');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending quote request:', error);
    throw error;
  }
};
