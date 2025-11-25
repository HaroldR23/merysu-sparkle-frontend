'use client';

import { WEBSITE_COPY } from "../constants/textContent/textContent";
import usePreferencesContext from "../hooks/usePreferencesContext";
import Button from "./Button";

export default function ContactForm() {
const { language } = usePreferencesContext();

  return (
    <section id="contact" className="px-6">
      <div className="max-w-3xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          {WEBSITE_COPY[language].CONTACT_TITLE}
        </h2>
        <p className="text-center text-slate-600 mt-3 leading-relaxed max-w-xl mx-auto">
          {WEBSITE_COPY[language].CONTACT_SUBTITLE}
        </p>

        <form
          className="mt-10 grid gap-4 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-200"
          action="https://formspree.io/f/{your_form_id}"
          method="POST"
        >
          <input
            name="name"
            placeholder={WEBSITE_COPY[language].CONTACT_NAME_PLACEHOLDER}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition"
          />

          <input
            type="email"
            name="email"
            placeholder={WEBSITE_COPY[language].CONTACT_EMAIL_PLACEHOLDER}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition"
          />

          <select
            name="service"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition"
          >
            <option>{WEBSITE_COPY[language].SERVICES_HOME_CLEANING}</option>
            <option>{WEBSITE_COPY[language].SERVICES_OFFICE_CLEANING}</option>
            <option>{WEBSITE_COPY[language].SERVICES_DEEP_CLEANING}</option>
            <option>{WEBSITE_COPY[language].SERVICES_MOVE_IN_OUT}</option>
            <option>{WEBSITE_COPY[language].SERVICES_AIRBNB_CLEANING}</option>
            <option>{WEBSITE_COPY[language].SERVICES_POST_CONSTRUCTION}</option>
            <option>{WEBSITE_COPY[language].SERVICES_EVENT_CLEANUP}</option>
          </select>

          <textarea
            name="message"
            placeholder={WEBSITE_COPY[language].CONTACT_MESSAGE_PLACEHOLDER}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 
                       focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30
                       transition resize-none"
          ></textarea>

          <div className="flex justify-end">
            <Button>{WEBSITE_COPY[language].CONTACT_SUBMIT_BUTTON}</Button>
          </div>
        </form>

        <div className="mt-10 text-center text-slate-600 leading-relaxed">
          <p>{WEBSITE_COPY[language].CONTACT_EMAIL_LABEL} hello@merysusparkle.com</p>
          <p>{WEBSITE_COPY[language].CONTACT_PHONE_LABEL} +1 (555) 123-4567</p>
          <p>{WEBSITE_COPY[language].CONTACT_HOURS_LABEL}</p>
        </div>
      </div>
    </section>
  );
}
