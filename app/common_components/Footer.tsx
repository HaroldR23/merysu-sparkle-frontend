'use client';

import Image from "next/image"
import { WEBSITE_COPY } from "../(landing)/constants/textContent/textContent";
import usePreferencesContext from "../(landing)/hooks/usePreferencesContext";

export default function Footer() {

  const { language } = usePreferencesContext();
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <Image src="/icono_merysu.png" alt="MerySu Sparkle Cleaning Logo" width={50} height={50} />
          <div className="text-sm text-slate-600">{WEBSITE_COPY[language].FOOTER_COPYRIGHT}</div>
        </div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="text-slate-600">{WEBSITE_COPY[language].FOOTER_PRIVACY}</a>
          <a href="#" className="text-slate-600">{WEBSITE_COPY[language].FOOTER_TERMS}</a>
        </div>
      </div>
    </footer>
  );
}
