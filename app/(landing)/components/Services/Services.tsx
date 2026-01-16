"use client";

import { motion } from "motion/react";
import { services } from "../../constants/services";
import { Languages } from "@/app/contexts/models";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";
import ServiceCard from "./ServiceCard";

const Services = ({ language }: { language: Languages}) => {
  return (
      <section id="services" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {WEBSITE_COPY[language].SERVICES_TITLE[0]} <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{WEBSITE_COPY[language].SERVICES_TITLE[1]}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {WEBSITE_COPY[language].SERVICES_SUBTITLE}
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services(language).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Services;
