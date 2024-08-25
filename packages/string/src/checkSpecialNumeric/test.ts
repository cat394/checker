import { assertEquals } from "../../deps.ts";
import { checkIsNotSpecialNumeric, checkIsSpecialNumeric } from "./main.ts";

Deno.test("checkStringIsSpecialNumeric", async (t) => {
  await t.step("should return true for special numeric strings", () => {
    assertEquals(checkIsSpecialNumeric("1e5"), true); // exponential notation
    assertEquals(checkIsSpecialNumeric("0b101"), true); // binary notation
    assertEquals(checkIsSpecialNumeric("Infinity"), true); // infinity
    assertEquals(checkIsSpecialNumeric("-Infinity"), true); // negative infinity
  });

  await t.step("should return false for non-special numeric strings", () => {
    assertEquals(checkIsSpecialNumeric("123"), false);
    assertEquals(checkIsSpecialNumeric("3.14"), false);
    assertEquals(checkIsSpecialNumeric("abc"), false);
    assertEquals(checkIsSpecialNumeric("0x1F"), false); // hexadecimal is not considered special here
    assertEquals(checkIsSpecialNumeric(" "), false);
    assertEquals(checkIsSpecialNumeric(""), false);
  });
});

Deno.test("checkStringIsNotSpecialNumeric", async (t) => {
  await t.step("should return true for non-special numeric strings", () => {
    assertEquals(checkIsNotSpecialNumeric("123"), true);
    assertEquals(checkIsNotSpecialNumeric("3.14"), true);
    assertEquals(checkIsNotSpecialNumeric("abc"), true);
    assertEquals(checkIsNotSpecialNumeric("0x1F"), true); // hexadecimal is not considered special here
    assertEquals(checkIsNotSpecialNumeric(" "), true);
    assertEquals(checkIsNotSpecialNumeric(""), true);
  });

  await t.step("should return false for special numeric strings", () => {
    assertEquals(checkIsNotSpecialNumeric("1e5"), false); // exponential notation
    assertEquals(checkIsNotSpecialNumeric("0b101"), false); // binary notation
    assertEquals(checkIsNotSpecialNumeric("Infinity"), false); // infinity
    assertEquals(checkIsNotSpecialNumeric("-Infinity"), false); // negative infinity
  });
});
