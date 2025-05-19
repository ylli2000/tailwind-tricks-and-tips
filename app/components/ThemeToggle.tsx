"use client";
import { Props, useTheme } from "../hooks/useTheme";

export default function ThemeToggle(props: Props) {
  const { theme, toggleTheme, colorTemperature, toggleColorTemperature } = useTheme(props);

  return (
    <div className="flex flex-col gap-2 fixed z-50 top-4 right-4">
      <button
        onClick={toggleTheme}
        className="btn-primary"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <button
        onClick={toggleColorTemperature}
        className="btn-primary mt-2"
        aria-label="Toggle color temperature"
      >
        {colorTemperature === "hot" ? "🔥 Hot" : "❄️ Cold"}
      </button>
    </div>
  );
} 