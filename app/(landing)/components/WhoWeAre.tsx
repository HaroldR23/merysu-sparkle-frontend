'use client';

import Image from "next/image";
import { WEBSITE_COPY } from "../constants/textContent/textContent";
import usePreferencesContext from "../hooks/usePreferencesContext";

export default function WhoWeAre() {
  const { language } = usePreferencesContext();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/spray_cleaning.png"
            alt="Professional cleaner smiling"
            className="order-2 md:order-1 object-center rounded-2xl shadow-lg"
            width={600}
            height={600}
          />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {WEBSITE_COPY[language].WHO_WE_ARE_TITLE}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {WEBSITE_COPY[language].WHO_WE_ARE_DESC[0]} <span className="font-semibold">MerySu Sparkle Cleaning</span>,
            {WEBSITE_COPY[language].WHO_WE_ARE_DESC[1]}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {WEBSITE_COPY[language].WHO_WE_ARE_DESC[2]}  
            <span className="font-semibold"> {WEBSITE_COPY[language].WHO_WE_ARE_DESC[3]}</span>  
            {WEBSITE_COPY[language].WHO_WE_ARE_DESC[4]}
          </p>
        </div>
      </div>
    </section>
  );
};
