import { parseISO, format } from "date-fns";
import PropTypes from "prop-types";

/**
 * Formats a date string as a time element with a datetime attribute.
 * @param {{ dateString: string }} props
 * @returns {JSX.Element}
 */
export default function DateElement({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

DateElement.propTypes = {
  dateString: PropTypes.string.isRequired,
};
