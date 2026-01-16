'use client';

import { motion } from "motion/react";

import { useState, useCallback } from "react";
import { WEBSITE_COPY } from "../constants/textContent/textContent";
import usePreferencesContext from "../hooks/usePreferencesContext";
import { QuoteRequestFormData } from "../types/types";
import Button from "./Button";
import { sendQuoteRequestService } from "@/app/services/sendQuoteRequest";
import { Alert, ClickAwayListener } from "@mui/material";
import Turnstile, { useTurnstile } from "react-turnstile";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const initialFormData: QuoteRequestFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    captchaToken: undefined,
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteRequestFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const { language } = usePreferencesContext();

  const turnstile = useTurnstile();

  const validateSubmission = () => {
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

  const validateWhatsAppSubmission = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = WEBSITE_COPY[language].CONTACT_ERROR_REQUIRED;
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

  const handleCaptcha = useCallback((token: string) => {
    setFormData(prev => ({ ...prev, captchaToken: token }));
  }, []);

  const clearCaptcha = useCallback(() => {
    setFormData(prev => ({ ...prev, captchaToken: undefined }));
  }, []);

  const handleSubmitWhatsAppSubmission = () => {
    setIsLoading(true);

    const whatsappNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
    const message = `Hola, mi nombre es *${formData.name}*.

Me gustaría solicitar un servicio de *${formData.service}*.
• *Mensaje adicional:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    const validationErrors = validateWhatsAppSubmission();
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }
  
    try {
      window.open(whatsappURL, "_blank");
      setAlertType("success");
      setAlertMessage(
        WEBSITE_COPY[language].CONTACT_SUCCESS_MESSAGE
      );
      setFormData(initialFormData);

    } catch (error: unknown) {
      setAlertType("error");
      setAlertMessage(
        error instanceof Error
          ? error.message
          : WEBSITE_COPY[language].CONTACT_ERROR_MESSAGE
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitEmailSubmission = async () => {
    setIsLoading(true);

    const validationErrors = validateSubmission();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    if (!formData.captchaToken) {
      setAlertType("error");
      setAlertMessage(
        WEBSITE_COPY[language].CONTACT_ERROR_CAPTCHA_REQUIRED
      );
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

    } catch (error: unknown) {
      setAlertType("error");
      setAlertMessage(
        error instanceof Error
          ? error.message
          : WEBSITE_COPY[language].CONTACT_ERROR_MESSAGE
      );
    } finally {
      setIsLoading(false);

      clearCaptcha();
      turnstile.reset();
    }
  };

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 rounded-xl border transition-all 
     ${errors[field] ? "border-red-500 ring-2 ring-red-300" : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
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
                marginBottom: "16px",
              }}
            >
              {alertMessage}
            </Alert>
          </ClickAwayListener>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-6 text-center">
        {WEBSITE_COPY[language].CONTACT_FORM_TITLE}
      </h3>
      <form
        className="space-y-4"
      >
      <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{WEBSITE_COPY[language].CONTACT_NAME_PLACEHOLDER}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={WEBSITE_COPY[language].CONTACT_NAME_PLACEHOLDER}
              className={inputClasses("name")}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{WEBSITE_COPY[language].CONTACT_PHONE_LABEL}</label>
            <input
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 123 456 7890"
              className={inputClasses("phone")}
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">{WEBSITE_COPY[language].CONTACT_SERVICE_PLACEHOLDER}</label>
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{WEBSITE_COPY[language].CONTACT_MESSAGE_PLACEHOLDER}</label>
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
        </div>

        <Turnstile
          sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
          onSuccess={handleCaptcha}
          onExpire={clearCaptcha}
          refreshExpired="auto"
          theme="light"
          className="mt-4 flex justify-center"
          size="normal"
          language="en"
        />
        <div className="flex space-x-4 ">
          <Button
            type="button"
            onClick={handleSubmitEmailSubmission}
            color="from-cyan-500 to-blue-500"
            disabled={isLoading}
          >
            {WEBSITE_COPY[language].CONTACT_SEND_EMAIL}
            <Mail className="w-6 h-6" />
          </Button>
          <Button
            type="button"
            onClick={handleSubmitWhatsAppSubmission}
            color="from-green-400 to-emerald-500"
            disabled={isLoading}
          >
            {WEBSITE_COPY[language].CONTACT_SEND_WHATSAPP}
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </motion.div>
  );
}