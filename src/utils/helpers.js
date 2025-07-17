export const isDateMatchFilter = (dateStr, filter) => {
  const inputDate = new Date(dateStr);
  const today = new Date();

  // Normalize to remove time
  const stripTime = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const input = stripTime(inputDate);
  const current = stripTime(today);

  switch (filter) {
    case "today":
      return input.getTime() === current.getTime();

    case "yesterday":
      const yesterday = new Date(current);
      yesterday.setDate(current.getDate() - 1);
      return input.getTime() === yesterday.getTime();

    case "week": {
      const startOfWeek = new Date(current);
      startOfWeek.setDate(current.getDate() - current.getDay()); // Sunday

      const endOfWeek = new Date(current);
      endOfWeek.setDate(current.getDate() + (6 - current.getDay())); // Saturday

      return input >= stripTime(startOfWeek) && input <= stripTime(endOfWeek);
    }

    case "month":
      return (
        input.getFullYear() === current.getFullYear() &&
        input.getMonth() === current.getMonth()
      );

    case "lastMonth": {
      const lastMonth = new Date(
        current.getFullYear(),
        current.getMonth() - 1,
        1
      );
      return (
        input.getFullYear() === lastMonth.getFullYear() &&
        input.getMonth() === lastMonth.getMonth()
      );
    }

    case "last3Months": {
      const threeMonthsAgo = new Date(
        current.getFullYear(),
        current.getMonth() - 2,
        1
      );
      const nextMonth = new Date(
        current.getFullYear(),
        current.getMonth() + 1,
        0
      ); // End of current month
      return (
        input >= stripTime(threeMonthsAgo) && input <= stripTime(nextMonth)
      );
    }

    default:
      return false;
  }
};
export const capitalizeFirst = (str) => {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
