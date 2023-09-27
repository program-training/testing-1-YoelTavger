import { describe, expect, test } from "vitest";
import { sumArr } from "./exercise5";

describe("exercise5", () => {
  const arrNum: number[] = [1, 2, 3];

  const result: number = sumArr(arrNum);

  test("Sum up all the numbers in the array", () => {
    expect(result).toBe(6);
  });

  test("Is the total amount greater than 4", () => {
    expect(result).toBeGreaterThan(4);
  });
});
