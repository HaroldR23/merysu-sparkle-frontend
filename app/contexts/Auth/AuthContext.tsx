'use client';

import { createContext } from 'react';
import { AuthUser } from '../models';

interface AuthContextProps {
  user: AuthUser | null;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  logout: async () => {},
});
