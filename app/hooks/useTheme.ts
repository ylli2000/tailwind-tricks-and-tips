"use client";
import { useEffect, useState } from "react";

const DARK = 'dark';
const LIGHT = 'light';
const STORAGE_KEY = 'theme';

export function useTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  const preferMode = (preferDark: boolean, isStorage: boolean = false) => {
    const mode = preferDark ? DARK : LIGHT;
    console.log('----->setting mode to: ',mode, isStorage ? ' (storage)' : '');
    setTheme(mode);
    setCls(mode);
    if (isStorage) setStorage(mode);
  }

  useEffect(() => {
    // On mount, check localStorage or system preference
    const mode = getStorage();

    if (mode) {
      console.log('-----> found mode in storage: ',mode);
      preferMode(mode === DARK);
    } else {
      console.log('-----> mode in system preference:', getSystemPreference());
      preferMode(getSystemPreference());
    }
  }, []);

  const toggleTheme = () => {
    preferMode(theme !== DARK, true);
  };

  return { theme, toggleTheme };
}

const setCls = (mode: string) => {
  console.log('----->setting cls: ',mode);
  document.documentElement.classList.toggle(DARK, mode === DARK);
  document.documentElement.classList.toggle(LIGHT, mode === LIGHT);
}

const setStorage = (mode: string) => {
  console.log('----->setting STORAGE_KEY: ',STORAGE_KEY,mode);
  localStorage.setItem(STORAGE_KEY, mode);
}
const getStorage = () => {
  return localStorage.getItem(STORAGE_KEY);
}
const getSystemPreference = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
