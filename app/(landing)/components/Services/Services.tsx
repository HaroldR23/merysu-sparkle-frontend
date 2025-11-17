"use client";

import { useState } from "react";
import { services } from "../../constants/services";
import { Service } from "../../types/types";
import Button from "../Button";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section id="services">
      <h2 className="text-3xl font-bold text-center">Our Cleaning Services</h2>
      <div className="flex flex-col items-center justify-center mt-6 mx-auto px-4 gap-11">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {(isExpanded ? services : services.slice(0, 4)).map((s: Service) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Explore All Services"}
        </Button>
      </div>
    </section>
  );
};
