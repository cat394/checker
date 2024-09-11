import { assertEquals } from "../../deps.ts";
import {
  check_is_exponential_notation,
  check_is_not_exponential_notation,
} from "./main.ts";

Deno.test("check_is_exponential_notation", async (t) => {
  await t.step("should return true for exponential strings", () => {
    assertEquals(check_is_exponential_notation("1e5"), true); // positive exponent
    assertEquals(check_is_exponential_notation("1E5"), true); // capital E
    assertEquals(check_is_exponential_notation("-1e5"), true); // negative base
    assertEquals(check_is_exponential_notation("1.23e-10"), true); // negative exponent
    assertEquals(check_is_exponential_notation("3e+8"), true); // positive exponent with explicit '+'
  });

  await t.step("should return false for non-exponential strings", () => {
    assertEquals(check_is_exponential_notation("123"), false); // plain integer
    assertEquals(check_is_exponential_notation("3.14"), false); // plain float
    assertEquals(check_is_exponential_notation("abc"), false); // non-numeric
    assertEquals(check_is_exponential_notation("1e"), false); // incomplete exponential
    assertEquals(check_is_exponential_notation("e10"), false); // missing base number
    assertEquals(check_is_exponential_notation(""), false); // empty string
  });
});

Deno.test("check_is_not_exponential_notation", async (t) => {
  await t.step("should return true for non-exponential strings", () => {
    assertEquals(check_is_not_exponential_notation("123"), true); // plain integer
    assertEquals(check_is_not_exponential_notation("3.14"), true); // plain float
    assertEquals(check_is_not_exponential_notation("abc"), true); // non-numeric
    assertEquals(check_is_not_exponential_notation("1e"), true); // incomplete exponential
    assertEquals(check_is_not_exponential_notation("e10"), true); // missing base number
    assertEquals(check_is_not_exponential_notation(""), true); // empty string
  });

  await t.step("should return false for exponential strings", () => {
    assertEquals(check_is_not_exponential_notation("1e5"), false); // positive exponent
    assertEquals(check_is_not_exponential_notation("1E5"), false); // capital E
    assertEquals(check_is_not_exponential_notation("-1e5"), false); // negative base
    assertEquals(check_is_not_exponential_notation("1.23e-10"), false); // negative exponent
    assertEquals(check_is_not_exponential_notation("3e+8"), false); // positive exponent with explicit '+'
  });
});
