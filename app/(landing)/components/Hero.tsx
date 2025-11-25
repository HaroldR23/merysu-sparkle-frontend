'use client';

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { WEBSITE_COPY } from "../constants/textContent/textContent";
import usePreferencesContext from "../hooks/usePreferencesContext";

export default function Hero() {
  const { language } = usePreferencesContext();
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
          {WEBSITE_COPY[language].HERO_TITLE}
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          {WEBSITE_COPY[language].HERO_SUBTITLE}
        </p>

        <div className="mt-6 flex gap-3">
          <Link href="#contact">
            <Button>
                {WEBSITE_COPY[language].HERO_CTA}
            </Button>
          </Link>
        </div>
      </div>

      <Image src="/cleaning_img.png" alt="cleaning" width={600} height={600} />
    </section>
  );
}
