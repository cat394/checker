import { assertEquals } from "../../deps.ts";
import { checkIsEven, checkIsNotEven } from "./main.ts";

Deno.test("checkIsEven", async (t) => {
  await t.step("should return true for even numbers", () => {
    assertEquals(checkIsEven(2), true);
    assertEquals(checkIsEven(0), true);
    assertEquals(checkIsEven(-4), true);
    assertEquals(checkIsEven(42), true);
  });

  await t.step("should return false for odd numbers", () => {
    assertEquals(checkIsEven(1), false);
    assertEquals(checkIsEven(-3), false);
    assertEquals(checkIsEven(99), false);
  });

  await t.step("should return false for non-integer numbers", () => {
    assertEquals(checkIsEven(1.5), false);
    assertEquals(checkIsEven(3.14), false);
  });
});

Deno.test("checkIsNotEven", async (t) => {
  await t.step("should return true for odd numbers", () => {
    assertEquals(checkIsNotEven(1), true);
    assertEquals(checkIsNotEven(-3), true);
    assertEquals(checkIsNotEven(99), true);
  });

  await t.step("should return false for even numbers", () => {
    assertEquals(checkIsNotEven(2), false);
    assertEquals(checkIsNotEven(0), false);
    assertEquals(checkIsNotEven(-4), false);
  });

  await t.step("should return true for non-integer numbers", () => {
    assertEquals(checkIsNotEven(1.5), true);
    assertEquals(checkIsNotEven(3.14), true);
  });
});
