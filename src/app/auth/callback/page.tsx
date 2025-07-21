// /app/auth/callback/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userParam = urlParams.get('user');

    if (token && userParam) {
      const user = JSON.parse(decodeURIComponent(userParam));
      localStorage.setItem('access_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <p className="text-white">Iniciando sesión...</p>
    </div>
  );
}