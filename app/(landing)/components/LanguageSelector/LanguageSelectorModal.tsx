import { getLanguageSelectorButtonStyle, getModalStyle } from "../../utils";
import { LanguageSelectorModalProps } from "./LanguageSelectorModalProps";

const LanguageSelectorModal = ({
  isOpen, 
  handleLanguageSelect, 
  currentLanguage,
  languages
}: LanguageSelectorModalProps) => {
  if (!isOpen) return null;
	
  return (
    <div 
      className={getModalStyle(isOpen)}
    >
      <div className="grid gap-2 max-h-80 overflow-y-auto">
        {languages.map((lang, index) => (
          <button
            key={index}
            onClick={() => handleLanguageSelect(lang.name)}
            className={getLanguageSelectorButtonStyle(currentLanguage, lang.name)}
          >
            <span className="mr-3 text-lg" aria-hidden="true">{lang.flag}</span>
            <div className="flex flex-col items-start">
              <span className="font-medium">
                {lang.name.charAt(0).toUpperCase() + lang.name.slice(1)}
              </span>
            </div>
          </button>
        ))}
      </div>
			
    </div>
  );
}

export default LanguageSelectorModal;
