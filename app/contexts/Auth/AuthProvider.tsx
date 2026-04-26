'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from './AuthContext';
import { AuthUser } from '../models';

interface AuthProviderProps {
  user: AuthUser | null;
  children: React.ReactNode;
}

export default function AuthProvider({ user, children }: AuthProviderProps) {
  const router = useRouter();

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/dashboard-5215/login');
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
