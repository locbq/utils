import { capitalizeWords } from "./capitalizeWords";

describe("capitalizeWords", () => {
  it("should capitalize the first letter of each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("should handle mixed case correctly", () => {
    expect(capitalizeWords("javaSCRIPT rules")).toBe("Javascript Rules");
  });

  it("should handle multiple spaces between words", () => {
    expect(capitalizeWords("  multiple   spaces")).toBe("  Multiple   Spaces");
  });

  it("should handle leading and trailing spaces", () => {
    expect(capitalizeWords("   hello world   ")).toBe("   Hello World   ");
  });

  it("should return empty string when input is empty", () => {
    expect(capitalizeWords("")).toBe("");
  });

  it("should handle single word", () => {
    expect(capitalizeWords("word")).toBe("Word");
  });

  it("should handle string with numbers", () => {
    expect(capitalizeWords("hello world 123 test")).toBe(
      "Hello World 123 Test"
    );
  });

  it("should handle string with punctuation", () => {
    expect(capitalizeWords("hello-world example")).toBe("Hello-World Example");
  });
});
