import {
  getDaysCountFrom,
  getDayOfTheWeekFrom,
  getFormatedDate
} from '../dates';

describe('dates', () => {
  it('février 2020 contient 29 jours', () => {
    const year = 2020;
    const month = 1; // 0 = janvier

    const expected = 29;
    const testCase = getDaysCountFrom(year, month);

    expect(testCase).toEqual(expected);
  });

  it('le 25 novembre 2020 est un mercredi', () => {
    const year = 2020;
    const month = 10; // 0 = janvier
    const day = 25;

    const expected = 3; // 0 = dimanche
    const testCase = getDayOfTheWeekFrom(year, month, day);

    expect(testCase).toEqual(expected);
  });

  it('getFormatedDate', () => {
    const weekDayIndex = 3; // 3 = mercredi
    const monthDay = 25;
    const monthIndex = 10; // 0 = janvier
    const year = 2020;

    const expected = 'Mercredi 25 novembre 2020';
    const testCase = getFormatedDate(weekDayIndex, monthDay, monthIndex, year);

    expect(testCase).toEqual(expected);
  });
});
