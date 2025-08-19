/**
 * Creates a lookup function for fast element retrieval from an array.
 * Internally builds a Map keyed by the given property once,
 * then reuses it for O(1) lookups.
 *
 * @template T - The type of items in the array
 * @template K - The property key of T used as the lookup key
 *
 * @param {T[]} array - The source array of items
 * @param {K} key - The property name of T to index by
 * @returns {(value: T[K]) => T | null} A lookup function that takes a key value
 *          and returns the matching item, or null if not found
 *
 * @example
 * type User = { id: number; name: string };
 *
 * const users: User[] = [
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" }
 * ];
 *
 * const findUser = lookupItem(users, "id");
 *
 * console.log(findUser(1));  // { id: 1, name: "Alice" }
 * console.log(findUser(99)); // null
 */
export function lookupItem<T, K extends keyof T>(
  array: T[],
  key: K
) {
  const map = new Map(array.map(item => [item[key], item]));
  return (value: T[K]): T | null => {
    return map.get(value) ?? null;
  };
}
