import { isBissextile } from '../dates';

describe('dates', () => {
  it("la fonction renvoie une erreur si l'année n'est pas un nombre", () => {
    const year = null;
    const testCase = () => {
      isBissextile(year);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('2020 est une année bissextile', () => {
    const year = 2020;
    const testCase = isBissextile(year);
    const expected = true;

    expect(testCase).toBe(expected);
  });

  it("2021 n'est pas une année bissextile", () => {
    const year = 2021;
    const testCase = isBissextile(year);
    const expected = false;

    expect(testCase).toBe(expected);
  });

  it("1900 n'est pas une année bissextile", () => {
    const year = 1900;
    const testCase = isBissextile(year);
    const expected = false;

    expect(testCase).toBe(expected);
  });
});
