"use client";

import { PreferencesContext } from '@/app/contexts/Preferences/PreferencesContext';
import { useContext } from 'react';

const usePreferencesContext = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferencesContext must be used within a PreferencesProvider');
  }
  return context;
}

export default usePreferencesContext;
