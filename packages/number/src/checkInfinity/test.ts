import { assertEquals } from "../../deps.ts";
import { check_is_infinity, check_is_not_infinity } from "./main.ts";

Deno.test("check_is_infinity", async (t) => {
  await t.step("should return true for Infinity values", () => {
    assertEquals(check_is_infinity(Infinity), true);
    assertEquals(check_is_infinity(-Infinity), true);
  });

  await t.step("should return false for non-Infinity values", () => {
    assertEquals(check_is_infinity(100), false);
    assertEquals(check_is_infinity(0), false);
    assertEquals(check_is_infinity("Infinity"), false);
    assertEquals(check_is_infinity(Number.NaN), false);
    assertEquals(check_is_infinity(3.14), false);
  });
});

Deno.test("check_is_not_infinity", async (t) => {
  await t.step("should return true for non-Infinity values", () => {
    assertEquals(check_is_not_infinity(100), true);
    assertEquals(check_is_not_infinity(0), true);
    assertEquals(check_is_not_infinity("Infinity"), true);
    assertEquals(check_is_not_infinity(Number.NaN), true);
    assertEquals(check_is_not_infinity(3.14), true);
  });

  await t.step("should return false for Infinity values", () => {
    assertEquals(check_is_not_infinity(Infinity), false);
    assertEquals(check_is_not_infinity(-Infinity), false);
  });
});
