import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';
import Footer from "../common_components/Footer";
import DashboardProvider from "../contexts/Dashboard/DashboardProvider";
import AuthProvider from "../contexts/Auth/AuthProvider";
import { AuthUser } from '../contexts/models';
import '../globals.css';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  let user: AuthUser | null = null;
  if (token) {
    try {
      const payload = decodeJwt(token);
      user = {
        id: String(payload.sub ?? ''),
        name: String(payload.name ?? ''),
        role: String(payload.role ?? ''),
      };
    } catch {
      // Token malformado — el middleware ya lo habría rechazado
    }
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <DashboardProvider>
          <AuthProvider user={user}>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          </AuthProvider>
        </DashboardProvider>
      </body>
    </html>
  );
};
