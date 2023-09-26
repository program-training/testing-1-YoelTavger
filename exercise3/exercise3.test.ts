import { describe, expect, test } from "vitest";
import { sortNum } from "./exercise3";

describe("exercise3", () => {
  test("return sort array numbers", () => {
    const arrayNumbers: number[] = [9, 3, 6];

    const result: number[] = sortNum(arrayNumbers);

    expect(result).toEqual([3, 6, 9]);
  });
});
