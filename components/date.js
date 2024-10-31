import { parseISO, format } from "date-fns";

/**
 * Formats a date string as a time element with a datetime attribute.
 * @param {{ dateString: string }} props
 * @returns {JSX.Element}
 */

export default function DateElement({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
