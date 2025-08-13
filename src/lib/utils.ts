import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const urls = {
  "github":"https://github.com/mwangiKibui",
  "linkedin":"https://www.linkedin.com/in/mwangikibui/",
  "twitter":"https://x.com/itsmkibui"
}