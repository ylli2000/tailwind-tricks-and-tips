"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const DARK = 'dark';
const LIGHT = 'light';
const HOT = 'hot';
const COLD = 'cold';
const MODE_KEY = 'theme';
const COLOR_TEMPERATURE_KEY = 'color-temperature';

export type Props = {
  storedTheme: 'dark' | 'light' | null;
  storedColorTemperature: 'hot' | 'cold' | null;
}

export function useTheme({ storedTheme, storedColorTemperature }: Props) {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(storedTheme);
  const [colorTemperature, setColorTemperature] = useState<'hot' | 'cold' | null>(storedColorTemperature);

  const preferTheme = (preferDark: boolean, isStorage: boolean = false) => {
    const mode = preferDark ? DARK : LIGHT;
    setTheme(mode);
    setThemeCls(mode);
    if (isStorage) setStoredTheme(mode);
  }

  const preferColorTemperature = (preferHot: boolean, isStorage: boolean = false) => {
    const temperature = preferHot ? HOT : COLD;
    setColorTemperature(temperature);
    setColorTemperatureCls(temperature);
    if (isStorage) setStoredColorTemperature(temperature);
  }

  useEffect(() => {

    if (storedTheme) {
      preferTheme(storedTheme === DARK);
    } else {
      const preferDark = getSystemThemePreference();
      preferTheme(preferDark);
      setStoredTheme(preferDark ? DARK : LIGHT);
    }

    if (storedColorTemperature) {
      preferColorTemperature(storedColorTemperature === HOT);
    } else {
      const preferHot = getSystemColorTemperaturePreference();
      preferColorTemperature(preferHot);
      setStoredColorTemperature(preferHot ? HOT : COLD);
    }
  }, [storedTheme, storedColorTemperature]);

  const toggleTheme = () => {
    preferTheme(theme !== DARK, true);
  };

  const toggleColorTemperature = () => {
    preferColorTemperature(colorTemperature !== HOT, true);
  };

  return { 
    theme, 
    toggleTheme, 
    colorTemperature, 
    toggleColorTemperature, 
  };
}

const setThemeCls = (mode: string) => {
  document.documentElement.classList.toggle(DARK, mode === DARK);
  document.documentElement.classList.toggle(LIGHT, mode === LIGHT);
}
const setStoredTheme = (mode: string) => {
  Cookies.set(MODE_KEY, mode, { sameSite: 'lax', expires: 365 });
};
const getSystemThemePreference = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const setColorTemperatureCls = (temperature: string) => {
  document.documentElement.classList.toggle(HOT, temperature === HOT);
  document.documentElement.classList.toggle(COLD, temperature === COLD);
}
const setStoredColorTemperature = (temperature: string) => {
  Cookies.set(COLOR_TEMPERATURE_KEY, temperature, { sameSite: 'lax', expires: 365 });
};
const getSystemColorTemperaturePreference = () => false; //simply defaul to cold

// const getStoredTheme = () => Cookies.get(MODE_KEY);
// const getStoredColorTemperature = () => Cookies.get(COLOR_TEMPERATURE_KEY);
