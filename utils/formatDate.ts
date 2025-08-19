import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/**
 * Formats a date into a specified string format.
 *
 * @param date - The input date (Date object, timestamp, or string)
 * @param format - The target format string (e.g., "YYYY-MM-DD HH:mm:ss")
 * @param useUTC - Whether to format using UTC time (default: false)
 * @returns {string} The formatted date string, or empty string if invalid
 */
export function formatDate(
  date: string | Date | number,
  format: string,
  useUTC: boolean = false
): string {
  const d = useUTC ? dayjs.utc(date) : dayjs(date);

  if (!d.isValid()) return "";

  return d.format(format);
}
