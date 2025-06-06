import type { Metadata } from "next";
import { cookies } from 'next/headers';
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || null;
  const colorTemperature = cookieStore.get('color-temperature')?.value || null;

  return (
    <html lang="en" className={`${theme} ${colorTemperature}`}>
      <body className={`antialiased`}>
        <ThemeToggle 
          storedTheme={theme as 'dark' | 'light' | null} 
          storedColorTemperature={colorTemperature as 'cold' | 'hot' | null} 
        />
        {children}
      </body>
    </html>
  );
}
