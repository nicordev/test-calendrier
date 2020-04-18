export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre'
];

export const getDaysCountFrom = (year, month) => {
  const nextMonth = month + 1;

  return new Date(year, nextMonth, 0).getDate();
};

export const getDayOfTheWeekFrom = (year, month, day = 1) => {
  return new Date(year, month, day).getDay(); // 0 = dimanche
};
