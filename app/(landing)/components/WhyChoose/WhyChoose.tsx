'use client';

import { WEBSITE_COPY } from "../../constants/textContent/textContent";
import usePreferencesContext from "../../hooks/usePreferencesContext";
import { WhyChooseItem } from "../../types/types";
import { WhyChooseCard } from "./WhyChooseCard";

export default function WhyChoose() {
  
  const { language } = usePreferencesContext();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          {WEBSITE_COPY[language].WHY_CHOOSE_TITLE}
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {WEBSITE_COPY[language].WHY_CHOOSE_ITEMS.map((i: WhyChooseItem) => (
            <WhyChooseCard key={i.title} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
