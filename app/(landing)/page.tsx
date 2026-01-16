'use client';

import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services/Services";
import TrustBadges from "./components/TrustBadges";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import usePreferencesContext from "./hooks/usePreferencesContext";


export default function Home() {
  const { language } =  usePreferencesContext();
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <TrustBadges language={language} />
      </div>
      <div className="mt-16">
        <HowItWorks language={language} />
      </div>
      <div className="mt-16">
        <WhoWeAre language={language} />
      </div>
      <div className="mt-16">
        <Services language={language} />
      </div>
      <div className="mt-16">
        <WhyChoose language={language} />
      </div>
      <div className="mt-16">
        <ContactUs language={language} />
      </div>
    </div>
  );
}
