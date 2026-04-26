import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { jwtVerify } from 'jose';
import LoginForm from './components/LoginForm';
import { Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      redirect('/dashboard-5215');
    } catch {
      // Token inválido — mostrar login
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">MerySu Admin</h1>
              <p className="text-xs text-gray-500">Sparkle Cleaning</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-1">Iniciar sesión</h2>
          <p className="text-sm text-gray-500 mb-6">Ingresa tus credenciales para continuar</p>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
