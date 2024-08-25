import { assertEquals } from "../../deps.ts";
import {
  checkIsIntegerOrDecimalString,
  checkIsNotIntegerOrDecimalString,
} from "./main.ts";

Deno.test("checkIsNumeric", async (t) => {
  await t.step("should return true for numeric strings", () => {
    assertEquals(checkIsIntegerOrDecimalString("123"), true);
    assertEquals(checkIsIntegerOrDecimalString("0"), true);
    assertEquals(checkIsIntegerOrDecimalString("-123"), true);
    assertEquals(checkIsIntegerOrDecimalString("3.14"), true);
    assertEquals(checkIsIntegerOrDecimalString("-3.14"), true);
  });

  await t.step("should return false for non-numeric strings", () => {
    assertEquals(checkIsIntegerOrDecimalString("abc"), false);
    assertEquals(checkIsIntegerOrDecimalString("123abc"), false);
    assertEquals(checkIsIntegerOrDecimalString(""), false);
    assertEquals(checkIsIntegerOrDecimalString(" "), false);
    assertEquals(checkIsIntegerOrDecimalString("NaN"), false);
    assertEquals(checkIsIntegerOrDecimalString("Infinity"), false);
    assertEquals(checkIsIntegerOrDecimalString("1e5"), false);
  });
});

Deno.test("checkIsNotNumeric", async (t) => {
  await t.step("should return true for non-numeric strings", () => {
    assertEquals(checkIsNotIntegerOrDecimalString("abc"), true);
    assertEquals(checkIsNotIntegerOrDecimalString("123abc"), true);
    assertEquals(checkIsNotIntegerOrDecimalString(""), true);
    assertEquals(checkIsNotIntegerOrDecimalString(" "), true);
    assertEquals(checkIsNotIntegerOrDecimalString("NaN"), true);
    assertEquals(checkIsNotIntegerOrDecimalString("Infinity"), true);
    assertEquals(checkIsNotIntegerOrDecimalString("1e5"), true);
  });

  await t.step("should return false for numeric strings", () => {
    assertEquals(checkIsNotIntegerOrDecimalString("123"), false);
    assertEquals(checkIsNotIntegerOrDecimalString("0"), false);
    assertEquals(checkIsNotIntegerOrDecimalString("-123"), false);
    assertEquals(checkIsNotIntegerOrDecimalString("3.14"), false);
    assertEquals(checkIsNotIntegerOrDecimalString("-3.14"), false);
  });
});
