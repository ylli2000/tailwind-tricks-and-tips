"use client";
import { Props, useTheme } from "../hooks/useTheme";

export default function ThemeToggle(props: Props) {
  const { theme, toggleTheme } = useTheme(props);

  return (
    theme ? (<button
      onClick={toggleTheme}
      className="btn-primary fixed z-50 top-4 right-4"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>) : null
  );
} 