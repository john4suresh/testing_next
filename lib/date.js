import { format, startOfWeek, endOfWeek, parse } from "date-fns";

const getWeekFormatted = (date) => {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 }); // Assuming week starts on Monday (use 0 for Sunday)
  const weekEnd = endOfWeek(date, { weekStartsOn: 1 }); // Assuming week starts on Monday (use 0 for Sunday)

  const formattedWeekStart = format(weekStart, "MMMM d");
  const formattedWeekEnd = format(weekEnd, "d, yyyy");

  return `${formattedWeekStart}-${formattedWeekEnd}`;
};

const date = new Date();

export const formattedWeek = getWeekFormatted(date);

export const currentDate = format(new Date(), "MMMM dd, yyyy");
