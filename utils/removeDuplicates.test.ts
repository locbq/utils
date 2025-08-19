import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("should remove duplicate numbers and preserve order", () => {
    const array = [1, 2, 5, 2, 1, 8];
    const expected = [1, 2, 5, 8];
    expect(removeDuplicates(array)).toEqual(expected);
  });

  it("should remove duplicate strings and preserve order", () => {
    const array = ["apple", "banana", "orange", "apple", "banana"];
    const expected = ["apple", "banana", "orange"];
    expect(removeDuplicates(array)).toEqual(expected);
  });

  it("should return an empty array when given an empty array", () => {
    const array: any[] = [];
    expect(removeDuplicates(array)).toEqual([]);
  });

  it("should return the same array if no duplicates exist", () => {
    const array = [1, 2, 3, 4, 5];
    // Using toEqual to check for value equality, not reference equality
    expect(removeDuplicates(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle mixed types correctly", () => {
    const array = [1, "1", 2, "2", 1, "1"];
    const expected = [1, "1", 2, "2"];
    expect(removeDuplicates(array)).toEqual(expected);
  });

  it("should handle null and undefined values", () => {
    const array = [1, null, 2, undefined, 1, null];
    const expected = [1, null, 2, undefined];
    expect(removeDuplicates(array)).toEqual(expected);
  });

  describe("with objects", () => {
    it("should NOT remove objects with the same structure but different references", () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 1 }];
      // The function checks for reference, so these are considered unique
      expect(removeDuplicates(array)).toEqual([
        { id: 1 },
        { id: 2 },
        { id: 1 },
      ]);
      expect(removeDuplicates(array).length).toBe(3);
    });

    it("should remove objects that are the same reference", () => {
      const obj1 = { id: 1, name: "Alice" };
      const obj2 = { id: 2, name: "Bob" };
      const array = [obj1, obj2, obj1];
      const expected = [obj1, obj2];
      expect(removeDuplicates(array)).toEqual(expected);
      expect(removeDuplicates(array).length).toBe(2);
    });
  });

  it("should treat all NaN values as a single entity", () => {
    // This is the default behavior of the Set object
    const array = [1, NaN, 2, NaN, 3];
    const expected = [1, NaN, 2, 3];
    expect(removeDuplicates(array)).toEqual(expected);
  });
});
