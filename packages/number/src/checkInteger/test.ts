import { assertEquals } from "../../deps.ts";
import { checkIsInteger, checkIsNotInteger } from "./main.ts";

Deno.test("checkIsInteger", async (t) => {
  await t.step("should return true for integer numbers", () => {
    assertEquals(checkIsInteger(1), true);
    assertEquals(checkIsInteger(0), true);
    assertEquals(checkIsInteger(-100), true);
    assertEquals(checkIsInteger(42), true);
  });

  await t.step("should return false for non-integer numbers", () => {
    assertEquals(checkIsInteger(1.5), false);
    assertEquals(checkIsInteger(3.14), false);
    assertEquals(checkIsInteger(-2.718), false);
    assertEquals(checkIsInteger(Number.NaN), false);
    assertEquals(checkIsInteger(Number.POSITIVE_INFINITY), false);
    assertEquals(checkIsInteger(Number.NEGATIVE_INFINITY), false);
  });
});

Deno.test("checkIsNotInteger", async (t) => {
  await t.step("should return true for non-integer numbers", () => {
    assertEquals(checkIsNotInteger(1.5), true);
    assertEquals(checkIsNotInteger(3.14), true);
    assertEquals(checkIsNotInteger(-2.718), true);
    assertEquals(checkIsNotInteger(Number.NaN), true);
    assertEquals(checkIsNotInteger(Number.POSITIVE_INFINITY), true);
    assertEquals(checkIsNotInteger(Number.NEGATIVE_INFINITY), true);
  });

  await t.step("should return false for integer numbers", () => {
    assertEquals(checkIsNotInteger(1), false);
    assertEquals(checkIsNotInteger(0), false);
    assertEquals(checkIsNotInteger(-100), false);
    assertEquals(checkIsNotInteger(42), false);
  });
});
