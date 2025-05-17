import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind classes using tailwind-merge.
 * @param {...ClassValue[]} inputs - Class values to combine and merge.
 * @returns {string} - The merged class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
} 