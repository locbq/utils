import { convertToCamelCase } from "./convertToCamelCase";

describe("convertToCamelCase", () => {
  it("should convert kebab-case to camelCase", () => {
    expect(convertToCamelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert snake_case to camelCase", () => {
    expect(convertToCamelCase("hello_world")).toBe("helloWorld");
  });

  it("should convert space separated words to camelCase", () => {
    expect(convertToCamelCase("hello world test")).toBe("helloWorldTest");
  });

  it("should handle already camelCase strings", () => {
    expect(convertToCamelCase("helloWorld")).toBe("helloWorld");
  });

  it("should lowercase the first character if it starts uppercase", () => {
    expect(convertToCamelCase("HelloWorld")).toBe("helloWorld");
  });

  it("should keep numbers intact", () => {
    expect(convertToCamelCase("hello-world-123")).toBe("helloWorld123");
  });

  it("should return empty string for empty input", () => {
    expect(convertToCamelCase("")).toBe("");
  });

  it("should trim leading/trailing separators", () => {
    expect(convertToCamelCase("-hello-world-")).toBe("helloWorld");
  });
});
