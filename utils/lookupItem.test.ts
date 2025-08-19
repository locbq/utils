import { lookupItem } from "./lookupItem";

// Define a sample type and data for our tests
type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

describe("lookupItem", () => {
  it("should return a function when called", () => {
    const findUser = lookupItem(users, "id");
    expect(typeof findUser).toBe("function");
  });

  describe("the returned lookup function", () => {
    it("should find an existing item by its numeric key", () => {
      const findUserById = lookupItem(users, "id");
      const user = findUserById(2);
      expect(user).toEqual({ id: 2, name: "Bob", email: "bob@example.com" });
    });

    it("should find an existing item by its string key", () => {
      const findUserByEmail = lookupItem(users, "email");
      const user = findUserByEmail("alice@example.com");
      expect(user).toEqual({
        id: 1,
        name: "Alice",
        email: "alice@example.com",
      });
    });

    it("should return null if the item is not found", () => {
      const findUserById = lookupItem(users, "id");
      const user = findUserById(999);
      expect(user).toBeNull();
    });

    it("should return the correct item when called multiple times", () => {
      const findUserById = lookupItem(users, "id");
      expect(findUserById(1)).toEqual(users[0]);
      expect(findUserById(3)).toEqual(users[2]);
      expect(findUserById(99)).toBeNull();
    });
  });

  describe("edge cases", () => {
    it("should use the last item when there are duplicate keys", () => {
      type Product = { sku: string; version: number };
      const products: Product[] = [
        { sku: "ABC-123", version: 1 },
        { sku: "DEF-456", version: 1 },
        { sku: "ABC-123", version: 2 }, // Duplicate SKU
      ];
      const findProduct = lookupItem(products, "sku");
      // The Map constructor uses the last entry for a given key
      expect(findProduct("ABC-123")).toEqual({ sku: "ABC-123", version: 2 });
    });
  });
});
