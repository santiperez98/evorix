// app/layout.tsx
import "./globals.css";
import "@fontsource/exo-2/400.css";    // Exo 2 Regular
import "@fontsource/exo-2/700.css";    // Exo 2 Bold
import "@fontsource/orbitron/700.css"; // Orbitron Bold
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
        <body className="bg-black text-white font-sans">
          {children}
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
