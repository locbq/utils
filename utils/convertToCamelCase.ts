/**
 * Converts a given string to camelCase.
 * - Removes special characters and separators (_ - space)
 * - Capitalizes the first letter of each word except the first
 * - Keeps numbers as they are
 *
 * @param str - The input string
 * @returns The camelCase version of the string
 */
export function convertToCamelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
}
