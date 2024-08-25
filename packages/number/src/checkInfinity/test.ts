import { assertEquals } from "../../deps.ts";
import { checkIsInfinity, checkIsNotInfinity } from "./main.ts";

Deno.test("checkIsInfinity", async (t) => {
  await t.step("should return true for Infinity values", () => {
    assertEquals(checkIsInfinity(Infinity), true);
    assertEquals(checkIsInfinity(-Infinity), true);
  });

  await t.step("should return false for non-Infinity values", () => {
    assertEquals(checkIsInfinity(100), false);
    assertEquals(checkIsInfinity(0), false);
    assertEquals(checkIsInfinity("Infinity"), false);
    assertEquals(checkIsInfinity(Number.NaN), false);
    assertEquals(checkIsInfinity(3.14), false);
  });
});

Deno.test("checkIsNotInfinity", async (t) => {
  await t.step("should return true for non-Infinity values", () => {
    assertEquals(checkIsNotInfinity(100), true);
    assertEquals(checkIsNotInfinity(0), true);
    assertEquals(checkIsNotInfinity("Infinity"), true);
    assertEquals(checkIsNotInfinity(Number.NaN), true);
    assertEquals(checkIsNotInfinity(3.14), true);
  });

  await t.step("should return false for Infinity values", () => {
    assertEquals(checkIsNotInfinity(Infinity), false);
    assertEquals(checkIsNotInfinity(-Infinity), false);
  });
});
