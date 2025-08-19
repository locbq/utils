/**
 * Checks if a value is considered "empty".
 *
 * Empty values:
 * - null, undefined
 * - empty string "" (including whitespace-only strings)
 * - empty array []
 * - empty plain object {} (no own enumerable keys)
 * - empty Map/Set (size === 0)
 *
 * Non-empty examples:
 * - numbers (including 0), booleans, symbols, bigints, functions
 * - Date instances
 * - non-plain objects (e.g., class instances) unless specifically handled
 *
 * @param value - The value to check
 * @returns {boolean} True if the value is empty, otherwise false
 */
export function isEmpty(value: unknown): boolean {
  // null or undefined
  if (value == null) return true;

  // strings (treat whitespace-only as empty)
  if (typeof value === "string") return value.trim().length === 0;

  // primitives and functions that are not considered empty
  const t = typeof value;
  if (
    t === "number" ||
    t === "boolean" ||
    t === "bigint" ||
    t === "symbol" ||
    t === "function"
  ) {
    return false;
  }

  // arrays
  if (Array.isArray(value)) return value.length === 0;

  // Dates are NOT empty
  if (value instanceof Date) return false;

  // Maps/Sets: consider empty when size === 0
  if (value instanceof Map || value instanceof Set) return value.size === 0;

  // Typed arrays / ArrayBuffer-like
  if (ArrayBuffer.isView(value)) {
    // Covers Uint8Array, Float32Array, DataView, etc.
    // DataView has byteLength; typed arrays have length

    return typeof (value as any).length === "number"
      ? (value as any).length === 0
      : (value as DataView).byteLength === 0;
  }
  if (value instanceof ArrayBuffer) return value.byteLength === 0;

  // Plain objects: {} with no own keys
  if (t === "object") {
    const proto = Object.getPrototypeOf(value);
    const isPlain = proto === Object.prototype || proto === null;
    if (!isPlain) return false; // class instances, DOM nodes, etc. → not empty by default
    return Object.keys(value as Record<string, unknown>).length === 0;
  }

  // Fallback: not empty
  return false;
}
