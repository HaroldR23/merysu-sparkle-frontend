"use client"

import { useState } from "react";
import { PreferencesContext } from "./PreferencesContext";
import { Languages } from "../models";

const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language");
      if (stored && Object.values(Languages).includes(stored as Languages)) {
        return stored as Languages;
      }
    }
    return Languages.ENGLISH;
  });


  const handleLanguageChange = (value: Languages) => {
    setLanguage(value);
    localStorage.setItem("language", value.toString());
  };
  return (
    <PreferencesContext.Provider 
      value={{ language: language, setLanguage: handleLanguageChange }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesProvider;
 