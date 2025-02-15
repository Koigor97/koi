/**
 * @file cn.ts
 * @description
 *   This file defines the `cn` utility function which helps in conditionally merging CSS class names.
 *   It leverages the `clsx` library to join class names based on truthy values and then uses `twMerge`
 *   from tailwind-merge to resolve any conflicting Tailwind CSS classes, ensuring a clean, optimized class string.
 *
 * @example
 *   // Example usage:
 *   const classes = cn("p-4", isActive && "bg-blue-500", "text-center");
 *   // This might result in: "p-4 bg-blue-500 text-center" if isActive is true, or "p-4 text-center" otherwise.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - Conditionally merge class names.
 *
 * This function takes a variable number of arguments of type `ClassValue` (strings, arrays, or objects
 * representing class names) and returns a single string with all class names merged. It first uses `clsx`
 * to combine the inputs based on their truthiness, then applies `twMerge` to resolve any conflicting
 * Tailwind CSS classes.
 *
 * @param {...ClassValue[]} inputs - A list of class names, arrays, or objects to be merged.
 * @returns {string} A merged string of class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
