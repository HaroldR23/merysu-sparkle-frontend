'use client';

import { WEBSITE_COPY } from "../(landing)/constants/textContent/textContent";
import usePreferencesContext from "../(landing)/hooks/usePreferencesContext";
import { Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

const Footer = () => {

  const { language } = usePreferencesContext();
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold">{WEBSITE_COPY[language].COMPANY_NAME}</span>
              </div>
              <p className="text-gray-400">
                {WEBSITE_COPY[language].FOOTER_TAGLINE}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{WEBSITE_COPY[language].COMPANY_TITLE}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">{WEBSITE_COPY[language].WHO_WE_ARE_TITLE.map(element => `${element} `)}</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">{WEBSITE_COPY[language].CONTACT_TITLE}</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">{WEBSITE_COPY[language].SERVICES_TITLE.map(element => `${element} `)}</a></li>
                <li><a href="#whyChooseUs" className="hover:text-cyan-400 transition-colors">{WEBSITE_COPY[language].WHY_CHOOSE_TITLE}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{WEBSITE_COPY[language].CONTACT_TITLE}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (669) 278-0462</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@merysu-cleaning.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <a 
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}/?text=${encodeURIComponent(WEBSITE_COPY[language].CONTACT_WHATSAPP_MESSAGE)}`}
                    className="flex items-center gap-2"                  
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{WEBSITE_COPY[language].FOOTER_COPYRIGHT}</p>
          </div>
        </div>
      </footer>

  );
};

export default Footer;
