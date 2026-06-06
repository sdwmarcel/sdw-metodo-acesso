import { twMerge } from "tailwind-merge";
import { type ClassNameValue } from "tailwind-merge";

/** Une classes Tailwind resolvendo conflitos (tailwind-merge). */
export function cn(...inputs: ClassNameValue[]): string {
  return twMerge(inputs);
}
