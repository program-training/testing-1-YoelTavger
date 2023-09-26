import { describe, expect, test } from "vitest";
import { palindrome } from "./exercise2";

describe("exercise2", () => {
  test("palindrome", () => {
    const str: string = "yoyooyoy";

    const result: boolean = palindrome(str);

    expect(result).toBe(true);
  });
});
