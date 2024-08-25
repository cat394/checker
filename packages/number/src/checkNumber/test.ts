import { assertEquals } from "../../deps.ts";
import { checkIsNotNumber, checkIsNumber } from "./main.ts";

Deno.test("checkIsNumber", async (t) => {
  await t.step("should return true for numbers", () => {
    assertEquals(checkIsNumber(1), true);
    assertEquals(checkIsNumber(0), true);
    assertEquals(checkIsNumber(-1), true);
    assertEquals(checkIsNumber(3.14), true);
  });

  await t.step("should return false for non-numbers", () => {
    assertEquals(checkIsNumber("1"), false);
    assertEquals(checkIsNumber(true), false);
    assertEquals(checkIsNumber(null), false);
    assertEquals(checkIsNumber(undefined), false);
    assertEquals(checkIsNumber({}), false);
  });
});

Deno.test("checkIsNotNumber", async (t) => {
  await t.step("should return true for non-numbers", () => {
    assertEquals(checkIsNotNumber("1"), true);
    assertEquals(checkIsNotNumber(true), true);
    assertEquals(checkIsNotNumber(null), true);
    assertEquals(checkIsNotNumber(undefined), true);
    assertEquals(checkIsNotNumber({}), true);
  });

  await t.step("should return false for numbers", () => {
    assertEquals(checkIsNotNumber(1), false);
    assertEquals(checkIsNotNumber(0), false);
    assertEquals(checkIsNotNumber(-1), false);
    assertEquals(checkIsNotNumber(3.14), false);
  });
});
