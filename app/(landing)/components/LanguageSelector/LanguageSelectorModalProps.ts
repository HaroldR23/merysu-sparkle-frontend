import { LanguageOption, Languages } from "@/app/contexts/models";


export interface LanguageSelectorModalProps {
    isOpen: boolean;
    handleLanguageSelect: (Language: Languages) => void;
    currentLanguage: Languages;
    languages: LanguageOption[];
}
