import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontTitle = Nunito({
  variable: "--font-title",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posternum",
  description: "Grave mensagens em vídeo, agende envios por e-mail para o futuro e crie recordações inesquecíveis. Uma plataforma segura e fácil de usar para deixar recados especiais para quem você ama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(`min-h-screen bg-background font-sans antialiased`, fontTitle.variable, fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
