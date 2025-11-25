"use client"

import { createContext } from "react";
import { PreferencesContextProps } from "./PreferencesContextProps";
import { Languages } from "../models";


export const PreferencesContext = createContext<PreferencesContextProps>({
  language: Languages.ENGLISH,
  setLanguage: () => {},
});
