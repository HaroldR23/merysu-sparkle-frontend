import { QuoteRequestFormData } from "../(landing)/types/types";

export const sendQuoteRequestService = async (formData: QuoteRequestFormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        captcha_token: formData.captchaToken,
      }),
    });

    if (!response.ok) {
      const responseText = await response.json();
      console.log(response.status);
      throw new Error(responseText.detail || 'Failed to send quote request');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
