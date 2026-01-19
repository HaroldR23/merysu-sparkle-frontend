"use client";

import { Languages as LanguagesIcon } from "lucide-react"
import { Languages } from "@/app/contexts/models";
import { useState } from "react";
import usePreferencesContext from "../../hooks/usePreferencesContext";
import { LANGUAGE_OPTIONS } from "../../constants/languageSelector";
import LanguageSelectorModal from "./LanguageSelectorModal";


const LanguageSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setLanguage, language } = usePreferencesContext();

  const handleLanguageSelect = (language: Languages) => {
    setLanguage(language);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="cursor-pointer	fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out group"
        aria-label="Change language"
      >
        <LanguagesIcon />
        <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
      </button>

      <LanguageSelectorModal
        isOpen={isModalOpen}
        handleLanguageSelect={handleLanguageSelect}
        currentLanguage={language}
        languages={LANGUAGE_OPTIONS}
      />

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsModalOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default LanguageSelector;
