export const getModalStyle = (isOpen: boolean) => `
  fixed bottom-20 right-6 sm:right-10 z-50 bg-white
	rounded-lg shadow-lg p-4 w-64 transform transition-all duration-300 ease-in-out ${
  isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
}`;

export const getLanguageSelectorButtonStyle = (currentLanguage: string, language: string) => `
  flex items-center p-2 rounded-md transition-colors cursor-pointer ${
  currentLanguage === language 
    ? 'bg-blue-50 text-blue-600' 
    : 'hover:bg-gray-100 text-gray-700'
}`;