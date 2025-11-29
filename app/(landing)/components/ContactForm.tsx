'use client';

import { useState } from "react";
import { WEBSITE_COPY } from "../constants/textContent/textContent";
import usePreferencesContext from "../hooks/usePreferencesContext";
import { QuoteRequestFormData } from "../types/types";
import Button from "./Button";
import { sendQuoteRequestService } from "@/app/services/sendQuoteRequest";
import { Alert, ClickAwayListener } from "@mui/material";

export default function ContactForm() {
  const initialFormData: QuoteRequestFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteRequestFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const { language } = usePreferencesContext();

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = WEBSITE_COPY[language].CONTACT_ERROR_REQUIRED;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = WEBSITE_COPY[language].CONTACT_ERROR_REQUIRED;
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = WEBSITE_COPY[language].CONTACT_ERROR_PHONE_INVALID;
    }

    if (!formData.email.trim()) {
      newErrors.email = WEBSITE_COPY[language].CONTACT_ERROR_REQUIRED;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = WEBSITE_COPY[language].CONTACT_ERROR_EMAIL_INVALID;
    }

    if (!formData.service.trim()) {
      newErrors.service = WEBSITE_COPY[language].CONTACT_ERROR_REQUIRED;
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      await sendQuoteRequestService(formData);

      setAlertType("success");
      setAlertMessage(
        WEBSITE_COPY[language].CONTACT_SUCCESS_MESSAGE
      );

      setFormData(initialFormData);

    } catch (error) {
      console.error("Error sending quote request:", error);

      setAlertType("error");
      setAlertMessage(
        WEBSITE_COPY[language].CONTACT_ERROR_MESSAGE // Set the right error message validating the error code 
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = (field: string) =>
    `w-full rounded-lg border px-4 py-3 transition 
     ${errors[field] ? "border-red-500 ring-2 ring-red-300" : "border-slate-300 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30"}`;

  return (
    <section id="contact" className="px-6 m-6">
      {alertMessage && (
        <div className="flex justify-center mt-6">
          <ClickAwayListener onClickAway={() => setAlertMessage(null)}>
            <Alert
              severity={alertType ?? "info"} 
              variant="outlined"
              role="alert"
              sx={{
                maxWidth: "600px",
                width: "100%",
                paddingY: "10px",
                paddingX: "16px",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {alertMessage}
            </Alert>
          </ClickAwayListener>
        </div>
      )}
      <div className="max-w-3xl mx-auto m-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          {WEBSITE_COPY[language].CONTACT_TITLE}
        </h2>

        <p className="text-center text-slate-600 mt-3 leading-relaxed max-w-xl mx-auto">
          {WEBSITE_COPY[language].CONTACT_SUBTITLE}
        </p>

        <form
          className="mt-10 grid gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-200"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={WEBSITE_COPY[language].CONTACT_NAME_PLACEHOLDER}
              className={inputClasses("name")}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 123 456 7890"
              className={inputClasses("phone")}
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={WEBSITE_COPY[language].CONTACT_EMAIL_PLACEHOLDER}
              className={inputClasses("email")}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputClasses("service")}
            >
              <option value="">{WEBSITE_COPY[language].CONTACT_SERVICE_PLACEHOLDER}</option>
              <option>{WEBSITE_COPY[language].SERVICES_HOME_CLEANING}</option>
              <option>{WEBSITE_COPY[language].SERVICES_OFFICE_CLEANING}</option>
              <option>{WEBSITE_COPY[language].SERVICES_DEEP_CLEANING}</option>
              <option>{WEBSITE_COPY[language].SERVICES_MOVE_IN_OUT}</option>
              <option>{WEBSITE_COPY[language].SERVICES_AIRBNB_CLEANING}</option>
              <option>{WEBSITE_COPY[language].SERVICES_POST_CONSTRUCTION}</option>
              <option>{WEBSITE_COPY[language].SERVICES_EVENT_CLEANUP}</option>
            </select>
            {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={WEBSITE_COPY[language].CONTACT_MESSAGE_PLACEHOLDER}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 
                       focus:outline-none focus:border-accent/60 focus:ring-2 
                       focus:ring-accent/30 transition resize-none"
          ></textarea>

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}> {isLoading ? WEBSITE_COPY[language].CONTACT_LOADING_BUTTON : WEBSITE_COPY[language].CONTACT_SUBMIT_BUTTON}</Button>
          </div>
        </form>

        <div className="mt-10 text-center text-slate-600 leading-relaxed">
          <p>{WEBSITE_COPY[language].CONTACT_EMAIL_LABEL} contact@merysu-cleaning.com</p>
          <p>{WEBSITE_COPY[language].CONTACT_PHONE_LABEL} +1 (669) 278-0462</p>
          <p>{WEBSITE_COPY[language].CONTACT_HOURS_LABEL}</p>
        </div>
      </div>
    </section>
  );
}
