"use client";

export default function ClientThemeToggle({theme, toggleTheme}: {theme: string|null, toggleTheme: () => void}) {
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