import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { ToastPopup } from "@/components/ToastPopup"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BethanIA - Sua Assistente do Dia a Dia",
  description: "Startup focada em soluções para Cuidar.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'BethanIA - Assistente Virtual para Idosos',
    description: 'BethanIA é uma assistente virtual inteligente projetada para auxiliar idosos em suas atividades diárias, promovendo independência e bem-estar.',
    url: 'https://bethania.vercel.app',
    siteName: 'BethanIA',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'BethanIA Preview Image',
      },
      {
        url: '/opengraph-whatsapp.png',
        width: 400,
        height: 400,
        alt: 'BethanIA Preview Image for WhatsApp',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BethanIA - Assistente Virtual para Idosos',
    description: 'BethanIA é uma assistente virtual inteligente projetada para auxiliar idosos em suas atividades diárias.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastPopup />
        <Toaster />
        
      </body>
    </html>
  );
}
