"use client";

import { motion } from "motion/react";
import { services } from "../../constants/services";
import { Languages } from "@/app/contexts/models";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";

const Services = ({ language }: { language: Languages}) => {
  return (
      <section id="servicios" className="py-10">
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
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Services;
