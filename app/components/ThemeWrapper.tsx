"use client";
import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import ClientThemeToggle from "./ClientThemeToggle";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  // Imperatively set the class on <body>
  useEffect(() => {
    if (theme) {
      document.body.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className={`theme-root ${theme}`}>  
      <ClientThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
} 