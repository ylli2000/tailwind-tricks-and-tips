"use client";


import { useTheme } from "../hooks/useTheme";

export default function ThemeProvider() {
  
  const { theme, toggleTheme } = useTheme();

  return (
      <button
        onClick={toggleTheme}
        style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
  );
} 