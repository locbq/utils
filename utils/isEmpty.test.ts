import { isEmpty } from "./isEmpty";

describe("isEmpty", () => {
  // Test cases for values that should be considered empty (return true)
  describe("when value is empty", () => {
    it("should return true for null", () => {
      expect(isEmpty(null)).toBe(true);
    });

    it("should return true for undefined", () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    it("should return true for an empty string", () => {
      expect(isEmpty("")).toBe(true);
    });

    it("should return true for a string with only whitespace", () => {
      expect(isEmpty("   ")).toBe(true);
    });

    it("should return true for an empty array", () => {
      expect(isEmpty([])).toBe(true);
    });

    it("should return true for an empty object", () => {
      expect(isEmpty({})).toBe(true);
    });
  });

  // Test cases for values that should NOT be considered empty (return false)
  describe("when value is not empty", () => {
    it("should return false for the number 0", () => {
      expect(isEmpty(0)).toBe(false);
    });

    it("should return false for any non-zero number", () => {
      expect(isEmpty(123)).toBe(false);
      expect(isEmpty(-45.6)).toBe(false);
    });

    it("should return false for a non-empty string", () => {
      expect(isEmpty("hello")).toBe(false);
    });

    it("should return false for a non-empty array", () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it("should return false for a non-empty object", () => {
      expect(isEmpty({ a: 1 })).toBe(false);
    });

    it("should return false for a boolean value true", () => {
      expect(isEmpty(true)).toBe(false);
    });

    it("should return false for a boolean value false", () => {
      expect(isEmpty(false)).toBe(false);
    });

    it("should return false for a Date object", () => {
      expect(isEmpty(new Date())).toBe(false);
    });

    it("should return false for a function", () => {
      expect(isEmpty(() => {})).toBe(false);
    });
  });
});
