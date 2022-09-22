import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testing-practice";

it("Capitalize", () => {
  expect(capitalize("anime")).toBe("Anime");
  expect(capitalize("boaT")).toMatch(/BoaT/);
  expect(capitalize("hURRY")).toBe("HURRY");
  expect(capitalize("i forgot I had my hat on.")).toBe(
    "I forgot I had my hat on."
  );
});

it("Reverse string", () => {
  expect(reverseString("Anime")).toBe("eminA");
  expect(reverseString("Hannah")).toBe("hannaH");
  expect(reverseString("Chocolate")).toBe("etalocohC");
});

it("Calculator", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(20, 8)).toBe(28);
  expect(calculator.subtract(100, 201)).toBe(-101);
  expect(calculator.subtract(5000, 5000)).toBe(0);
  expect(calculator.divide(8, 5)).toBeCloseTo(1.6);
  expect(calculator.divide(10, 0)).toBeNull();
  expect(calculator.divide(0, 10)).toEqual(0);
  expect(calculator.multiply(-89, 3)).toEqual(-267);
  expect(calculator.multiply(-8.3, -5)).toBeCloseTo(41.5);
});

it("Caesar cipher", () => {
  expect(caesarCipher("We ate pizza with extra cheese.")).toBe(
    "Xf buf qjaab xjui fyusb difftf."
  );
  expect(caesarCipher("Did you say we owe Mr. Hernandez $5?", 4)).toBe(
    "Hmh csy wec ai sai Qv. Livrerhid $5?"
  );
  expect(caesarCipher("Let's calm down right now!!!", -2)).toBe(
    "Jcr'q ayjk bmul pgefr lmu!!!"
  );
});

it("Analyze array", () => {
  const analyzedArr = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(typeof analyzedArr).toBe("object");
  expect(analyzedArr.average).toBe(4);
  expect(analyzedArr.min).toBe(1);
  expect(analyzedArr.max).toBe(8);
  expect(analyzedArr.arrLength).toBe(6);
});
