// app/layout.tsx
import "./globals.css";
import "@fontsource/inter/400.css"; // Importa los estilos de la fuente Inter
import { ReactNode } from "react";
import { Metadata } from "next";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata: Metadata = {
  title: "Evorix | Agencia Digital",
  description: "Servicios de desarrollo web, marketing digital, branding y más.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
    <html lang="es">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
    </GoogleOAuthProvider>
  );
}
