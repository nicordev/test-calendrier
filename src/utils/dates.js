export const isBissextile = year => {
  // `year` doit être un nombre entier
  year = parseInt(year);

  if (Number.isNaN(year)) {
    throw new TypeError('La date doit être un nombre entier');
  }

  // si l'année n'est pas divisible par 4, elle n'est pas bissextile
  if (year % 4 !== 0) {
    return false;
  }

  // désormais, si l'année n'est pas divisible par 100, elle est bissextile
  if (year % 100 !== 0) {
    return true;
  }

  // désormais, si l'année n'est pas divisible par 400, elle n'est pas bissextile
  if (year % 400 !== 0) {
    return false;
  }

  return true;
};
