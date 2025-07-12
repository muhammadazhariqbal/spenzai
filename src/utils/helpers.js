export const isDateMatchFilter = (dateStr, filter) => {
  const inputDate = new Date(dateStr);
  const today = new Date();

  // Normalize both dates to strip time
  const stripTime = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const input = stripTime(inputDate);
  const current = stripTime(today);

  switch (filter) {
    case "today":
      return input.getTime() === current.getTime();

    case "week":
      const startOfWeek = new Date(current);
      startOfWeek.setDate(current.getDate() - current.getDay()); // Sunday

      const endOfWeek = new Date(current);
      endOfWeek.setDate(current.getDate() + (6 - current.getDay())); // Saturday

      return input >= stripTime(startOfWeek) && input <= stripTime(endOfWeek);

    case "month":
      return (
        input.getFullYear() === current.getFullYear() &&
        input.getMonth() === current.getMonth()
      );

    default:
      return false;
  }
};

export const capitalizeFirst = (str) => {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
