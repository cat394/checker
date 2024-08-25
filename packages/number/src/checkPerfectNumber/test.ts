import { assertEquals } from "../../deps.ts";
import { checkIsNotPerfectNumber, checkIsPerfectNumber } from "./main.ts";

Deno.test("checkIsPerfectNumber", async (t) => {
  await t.step("should return true for perfect numbers", () => {
    assertEquals(checkIsPerfectNumber(6), true); // 6 = 1 + 2 + 3
    assertEquals(checkIsPerfectNumber(28), true); // 28 = 1 + 2 + 4 + 7 + 14
    assertEquals(checkIsPerfectNumber(496), true); // 496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248
    assertEquals(checkIsPerfectNumber(8128), true); // 8128 = 1 + 2 + 4 + 8 + ... + 4064
  });

  await t.step("should return false for non-perfect numbers", () => {
    assertEquals(checkIsPerfectNumber(1), false); // 1 is not considered a perfect number
    assertEquals(checkIsPerfectNumber(5), false);
    assertEquals(checkIsPerfectNumber(10), false);
    assertEquals(checkIsPerfectNumber(12), false);
    assertEquals(checkIsPerfectNumber(100), false);
    assertEquals(checkIsPerfectNumber(500), false);
    assertEquals(checkIsPerfectNumber(1000), false);
  });
});

Deno.test("checkIsNotPerfectNumber", async (t) => {
  await t.step("should return true for non-perfect numbers", () => {
    assertEquals(checkIsNotPerfectNumber(1), true);
    assertEquals(checkIsNotPerfectNumber(5), true);
    assertEquals(checkIsNotPerfectNumber(10), true);
    assertEquals(checkIsNotPerfectNumber(12), true);
    assertEquals(checkIsNotPerfectNumber(100), true);
    assertEquals(checkIsNotPerfectNumber(500), true);
    assertEquals(checkIsNotPerfectNumber(1000), true);
  });

  await t.step("should return false for perfect numbers", () => {
    assertEquals(checkIsNotPerfectNumber(6), false);
    assertEquals(checkIsNotPerfectNumber(28), false);
    assertEquals(checkIsNotPerfectNumber(496), false);
    assertEquals(checkIsNotPerfectNumber(8128), false);
  });
});
