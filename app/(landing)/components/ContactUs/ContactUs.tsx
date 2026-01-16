import { motion } from "motion/react";

import { contactUsItems } from "../../constants/contactUsItems";
import ContactUsItem from "./ContactUsItem";
import { Languages } from "@/app/contexts/models";
import ContactForm from "../ContactForm";
import { WEBSITE_COPY } from "../../constants/textContent/textContent";

const ContactUs = ({ language }: { language: Languages }) => {
  return (
    <section id="contacto" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{WEBSITE_COPY[language].CONTACT_TITLE}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {WEBSITE_COPY[language].CONTACT_SUBTITLE}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {
              contactUsItems(language).map((item) => (
                <ContactUsItem
                  key={item.title}
                  href={item.href}
                  cardColor={item.cardColor}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))
            }
          </div>
          <ContactForm />
        </div>
      </section>
  );
};

export default ContactUs;
