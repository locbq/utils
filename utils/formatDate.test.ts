// formatDate.test.ts
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  const sampleDate = "2025-08-19T12:34:56Z";

  it("should format a valid date in local time", () => {
    const result = formatDate(sampleDate, "YYYY-MM-DD HH:mm:ss");
    expect(result).toMatch(/2025-08-19 \d{2}:\d{2}:\d{2}/);
  });

  it("should format a valid date in UTC when useUTC is true", () => {
    const result = formatDate(sampleDate, "YYYY-MM-DD HH:mm:ss", true);
    expect(result).toBe("2025-08-19 12:34:56");
  });

  it("should format a Date object correctly", () => {
    const date = new Date("2025-08-19T00:00:00Z");
    const result = formatDate(date, "YYYY/MM/DD", true);
    expect(result).toBe("2025/08/19");
  });

  it("should format a timestamp correctly", () => {
    const timestamp = Date.UTC(2025, 7, 19, 12, 34, 56); // August 19, 2025 UTC
    const result = formatDate(timestamp, "DD-MM-YYYY HH:mm", true);
    expect(result).toBe("19-08-2025 12:34");
  });

  it("should return empty string for invalid date", () => {
    const result = formatDate("invalid-date", "YYYY-MM-DD");
    expect(result).toBe("");
  });

  it("should respect custom formats", () => {
    const result = formatDate(sampleDate, "MMMM D, YYYY", true);
    expect(result).toBe("August 19, 2025");
  });
});
