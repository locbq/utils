/**
 * Checks if a value is considered "empty".
 * 
 * Empty values are:
 * - null
 * - undefined
 * - empty string ""
 * - empty array []
 * - empty object {}
 *
 * Numbers, including 0, are NOT considered empty.
 *
 * @param value - The value to check
 * @returns {boolean} True if the value is empty, otherwise false
 *
 * @example
 * isEmpty(null);        // true
 * isEmpty(undefined);   // true
 * isEmpty("");          // true
 * isEmpty([]);          // true
 * isEmpty({});          // true
 * isEmpty(0);           // false
 * isEmpty("hello");     // false
 * isEmpty([1, 2]);      // false
 * isEmpty({ a: 1 });    // false
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true;

  if (typeof value === "string" && value.trim().length === 0) return true;

  if (Array.isArray(value) && value.length === 0) return true;

  if (typeof value === "object" && !Array.isArray(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}
