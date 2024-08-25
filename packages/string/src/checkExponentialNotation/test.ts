import { assertEquals } from "../../deps.ts";
import {
  checkIsExponentialNotation,
  checkIsNotExponentialNotation,
} from "./main.ts";

Deno.test("checkStringIsExponential", async (t) => {
  await t.step("should return true for exponential strings", () => {
    assertEquals(checkIsExponentialNotation("1e5"), true); // positive exponent
    assertEquals(checkIsExponentialNotation("1E5"), true); // capital E
    assertEquals(checkIsExponentialNotation("-1e5"), true); // negative base
    assertEquals(checkIsExponentialNotation("1.23e-10"), true); // negative exponent
    assertEquals(checkIsExponentialNotation("3e+8"), true); // positive exponent with explicit '+'
  });

  await t.step("should return false for non-exponential strings", () => {
    assertEquals(checkIsExponentialNotation("123"), false); // plain integer
    assertEquals(checkIsExponentialNotation("3.14"), false); // plain float
    assertEquals(checkIsExponentialNotation("abc"), false); // non-numeric
    assertEquals(checkIsExponentialNotation("1e"), false); // incomplete exponential
    assertEquals(checkIsExponentialNotation("e10"), false); // missing base number
    assertEquals(checkIsExponentialNotation(""), false); // empty string
  });
});

Deno.test("checkStringIsNotExponential", async (t) => {
  await t.step("should return true for non-exponential strings", () => {
    assertEquals(checkIsNotExponentialNotation("123"), true); // plain integer
    assertEquals(checkIsNotExponentialNotation("3.14"), true); // plain float
    assertEquals(checkIsNotExponentialNotation("abc"), true); // non-numeric
    assertEquals(checkIsNotExponentialNotation("1e"), true); // incomplete exponential
    assertEquals(checkIsNotExponentialNotation("e10"), true); // missing base number
    assertEquals(checkIsNotExponentialNotation(""), true); // empty string
  });

  await t.step("should return false for exponential strings", () => {
    assertEquals(checkIsNotExponentialNotation("1e5"), false); // positive exponent
    assertEquals(checkIsNotExponentialNotation("1E5"), false); // capital E
    assertEquals(checkIsNotExponentialNotation("-1e5"), false); // negative base
    assertEquals(checkIsNotExponentialNotation("1.23e-10"), false); // negative exponent
    assertEquals(checkIsNotExponentialNotation("3e+8"), false); // positive exponent with explicit '+'
  });
});
