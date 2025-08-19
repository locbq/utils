/**
 * Removes duplicate items from an array.
 * Preserves the original order of elements.
 *
 * @template T - The type of items in the array
 * @param {T[]} array - The array that may contain duplicates
 * @returns {T[]} A new array with duplicates removed
 *
 * @example
 * removeDuplicates([1, 2, 2, 3]); // [1, 2, 3]
 *
 * @example
 * removeDuplicates(["a", "b", "a", "c"]); // ["a", "b", "c"]
 *
 * @example
 * const objs = [{ id: 1 }, { id: 1 }, { id: 2 }];
 * removeDuplicates(objs); // keeps both { id: 1 } because different references
 */
export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
