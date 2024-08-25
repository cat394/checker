import { assertEquals } from "../../deps.ts";
import { checkIsNotOdd, checkIsOdd } from "./main.ts";

Deno.test("checkIsOdd", async (t) => {
  await t.step("should return true for odd numbers", () => {
    assertEquals(checkIsOdd(1), true);
    assertEquals(checkIsOdd(3), true);
    assertEquals(checkIsOdd(-1), true);
    assertEquals(checkIsOdd(101), true);
  });

  await t.step("should return false for even numbers", () => {
    assertEquals(checkIsOdd(2), false);
    assertEquals(checkIsOdd(4), false);
    assertEquals(checkIsOdd(-2), false);
    assertEquals(checkIsOdd(100), false);
  });

  await t.step("should return false for non-integer numbers", () => {
    assertEquals(checkIsOdd(1.5), false);
    assertEquals(checkIsOdd(2.5), false);
    assertEquals(checkIsOdd(-3.5), false);
  });
});

Deno.test("checkIsNotOdd", async (t) => {
  await t.step("should return true for even numbers", () => {
    assertEquals(checkIsNotOdd(2), true);
    assertEquals(checkIsNotOdd(4), true);
    assertEquals(checkIsNotOdd(-2), true);
    assertEquals(checkIsNotOdd(100), true);
  });

  await t.step("should return false for odd numbers", () => {
    assertEquals(checkIsNotOdd(1), false);
    assertEquals(checkIsNotOdd(3), false);
    assertEquals(checkIsNotOdd(-1), false);
    assertEquals(checkIsNotOdd(101), false);
  });

  await t.step("should return true for non-integer numbers", () => {
    assertEquals(checkIsNotOdd(1.5), true);
    assertEquals(checkIsNotOdd(2.5), true);
    assertEquals(checkIsNotOdd(-3.5), true);
  });
});
