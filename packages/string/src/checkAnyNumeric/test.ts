import { assertEquals } from "../../deps.ts";
import { checkIsAnyNumeric, checkIsNotAnyNumeric } from "./main.ts";

Deno.test("checkIsAnyNumeric", async (t) => {
  await t.step("should return true for numeric strings", () => {
    assertEquals(checkIsAnyNumeric("123"), true); // plain integer
    assertEquals(checkIsAnyNumeric("0"), true); // zero
    assertEquals(checkIsAnyNumeric("-123"), true); // negative integer
    assertEquals(checkIsAnyNumeric("3.14"), true); // plain float
    assertEquals(checkIsAnyNumeric("-3.14"), true); // negative float
    assertEquals(checkIsAnyNumeric("1e5"), true); // exponential notation
    assertEquals(checkIsAnyNumeric("Infinity"), true); // Infinity as a numeric value
    assertEquals(checkIsAnyNumeric("0b101"), true); // binary notation
    assertEquals(checkIsAnyNumeric(""), true); // empty string evaluate 0
    assertEquals(checkIsAnyNumeric(" "), true); // space string evaluate 0
  });

  await t.step("should return false for non-numeric strings", () => {
    assertEquals(checkIsAnyNumeric("abc"), false); // alphabetic string
    assertEquals(checkIsAnyNumeric("123abc"), false); // alphanumeric string
    assertEquals(checkIsAnyNumeric("NaN"), false); // "NaN" as a string
  });
});

Deno.test("checkIsNotAnyNumeric", async (t) => {
  await t.step("should return true for non-numeric strings", () => {
    assertEquals(checkIsNotAnyNumeric("abc"), true); // alphabetic string
    assertEquals(checkIsNotAnyNumeric("123abc"), true); // alphanumeric string
    assertEquals(checkIsNotAnyNumeric("NaN"), true); // "NaN" as a string
  });

  await t.step("should return false for numeric strings", () => {
    assertEquals(checkIsNotAnyNumeric("123"), false); // plain integer
    assertEquals(checkIsNotAnyNumeric("0"), false); // zero
    assertEquals(checkIsNotAnyNumeric("-123"), false); // negative integer
    assertEquals(checkIsNotAnyNumeric("3.14"), false); // plain float
    assertEquals(checkIsNotAnyNumeric("-3.14"), false); // negative float
    assertEquals(checkIsNotAnyNumeric("1e5"), false); // exponential notation
    assertEquals(checkIsNotAnyNumeric("Infinity"), false); // Infinity as a numeric value
    assertEquals(checkIsNotAnyNumeric("0b101"), false); // binary notation
    assertEquals(checkIsNotAnyNumeric(""), false); // empty string evaluate 0
    assertEquals(checkIsNotAnyNumeric(" "), false); // space string evaluate 0
  });
});
