import { describe, expect, test } from "vitest";
import { resSqrt } from "./exercise4";

describe("exercise4", () => {
  test("Returns the square root of the number", () => {
    const num: number = 25;

    const result: number = resSqrt(num);

    expect(result).toBe(5);
  });
});
