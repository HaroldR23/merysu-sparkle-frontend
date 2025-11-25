import { Languages } from "../models";

export interface PreferencesContextProps {
    language: Languages;
    setLanguage: (language: Languages) => void;
}
