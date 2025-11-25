'use client';

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { WEBSITE_COPY } from "../constants/textContent/textContent";
import usePreferencesContext from "../hooks/usePreferencesContext";

export default function Header() {
  const { language } = usePreferencesContext();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="/icono_merysu.png" alt="MerySu Sparkle Logo" width={60} height={60} />
            <span className="font-semibold text-3xl">{WEBSITE_COPY[language].COMPANY_NAME}</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-primary">{WEBSITE_COPY[language].HEADER_ABOUT}</a>
          <a href="#services" className="hover:text-primary">{WEBSITE_COPY[language].HEADER_SERVICES}</a>
          <Link href="#contact">
            <Button>
              {WEBSITE_COPY[language].HEADER_CTA}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
