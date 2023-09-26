import { describe, expect, test } from "vitest";
import { fetchUserData } from "./exercise6";

describe("exercise6", async () => {
  const userId: number = 2;

  const result = await fetchUserData(userId);

  test("If the user is correct", () => {
    expect(result.id).toBe(userId);
  });

  test("Do the details exist", async () => {
    expect(result.name).toBeTruthy();
    expect(result.email).toBeTruthy();
  });
});
