export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
];

export const getDaysCountFrom = (year, month) => {
  const nextMonth = month + 1;

  return new Date(year, nextMonth, 0).getDate();
};

export const getDayOfTheWeekFrom = (year, month, day = 1) => {
  return new Date(year, month, day).getDay(); // 0 = dimanche
};

export const getDayLabels = () => {
  return ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
};
