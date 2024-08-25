import { assertEquals } from "../../deps.ts";
import { checkIsNotString, checkIsString } from "./main.ts";

Deno.test("checkIsString", async (t) => {
  await t.step("should return true for strings", () => {
    assertEquals(checkIsString("hello"), true);
    assertEquals(checkIsString(""), true);
    assertEquals(checkIsString("123"), true);
  });

  await t.step("should return false for non-strings", () => {
    assertEquals(checkIsString(123), false);
    assertEquals(checkIsString(true), false);
    assertEquals(checkIsString({}), false);
    assertEquals(checkIsString([]), false);
    assertEquals(checkIsString(null), false);
    assertEquals(checkIsString(undefined), false);
  });
});

Deno.test("checkIsNotString", async (t) => {
  await t.step("should return true for non-strings", () => {
    assertEquals(checkIsNotString(123), true);
    assertEquals(checkIsNotString(true), true);
    assertEquals(checkIsNotString({}), true);
    assertEquals(checkIsNotString([]), true);
    assertEquals(checkIsNotString(null), true);
    assertEquals(checkIsNotString(undefined), true);
  });

  await t.step("should return false for strings", () => {
    assertEquals(checkIsNotString("hello"), false);
    assertEquals(checkIsNotString(""), false);
    assertEquals(checkIsNotString("123"), false);
  });
});
