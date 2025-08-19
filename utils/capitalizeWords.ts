/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param str - The input string
 * @returns The string with each word capitalized
 */
export function capitalizeWords(str: string): string {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
