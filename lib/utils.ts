// export function formatSize(bytes: number): string {
//   if (!Number.isFinite(bytes) || bytes < 0) {
//     return "0 B";
//   }

//   if (bytes === 0) {
//     return "0 B";
//   }

//   const units = ["B", "KB", "MB", "GB", "TB"];
//   let value = bytes;
//   let unitIndex = 0;

//   while (value >= 1024 && unitIndex < units.length - 1) {
//     value /= 1024;
//     unitIndex += 1;
//   }

//   const formattedValue = unitIndex === 0 ? `${Math.round(value)}` : `${value.toFixed(2).replace(/\.00$/, "")}`;
//   return `${formattedValue} ${units[unitIndex]}`;
// }
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  // Determine the appropriate unit by calculating the log
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Format with 2 decimal places and round
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();