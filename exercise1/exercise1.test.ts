import { expect, test } from "vitest";
import { length } from "./exercise1";

test("return length of david = 5", () => {
  expect(length("david")).toBe(5);
});