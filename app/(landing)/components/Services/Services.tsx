"use client";

import { useState } from "react";
import { services } from "../../constants/services";
import { Service } from "../../types/types";
import Button from "../Button";
import ServiceCard from "./ServiceCard";
import usePreferencesContext from "../../hooks/usePreferencesContext";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";

export default function Services() {
  const { language } = usePreferencesContext();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section id="services">
      <h2 className="text-3xl font-bold text-center">{WEBSITE_COPY[language].SERVICES_TITLE}</h2>
      <div className="flex flex-col items-center justify-center mt-6 mx-auto px-4 gap-11">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {(isExpanded ? services(language) : services(language).slice(0, 4)).map((s: Service) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? WEBSITE_COPY[language].SERVICES_SHOW_LESS_CTA : WEBSITE_COPY[language].SERVICES_CTA}
        </Button>
      </div>
    </section>
  );
};
