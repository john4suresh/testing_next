export const MONTHS = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const WORKING_HOURS = [
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
];

export const WEEK_DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const getStartDay = (day) => {
  let colStart;
  switch (day) {
    case 0:
      colStart = 7; // Sunday
      break;
    case 1:
      colStart = 1; // Monday
      break;
    case 2:
      colStart = 2; // Tuesday
      break;
    case 3:
      colStart = 3; // Wednesday
      break;
    case 4:
      colStart = 4; // Thursday
      break;
    case 5:
      colStart = 5; // Friday
      break;
    case 6:
      colStart = 6; // Saturday
      break;
    default:
      colStart = 1; // default to Monday
  }
  return colStart;
};
