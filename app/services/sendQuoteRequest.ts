import { QuoteRequestFormData } from "../(landing)/types/types";
import { apiRequest } from "./helperFunction";

export const sendQuoteRequestService = async (formData: QuoteRequestFormData) => {
  return apiRequest('/quote-request', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      captcha_token: formData.captchaToken,
    }),
  });
};
