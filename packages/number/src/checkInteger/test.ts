import { assertEquals } from "../../deps.ts";
import { check_is_integer, check_is_not_integer } from "./main.ts";

Deno.test("check_is_integer", async (t) => {
  await t.step("should return true for integer numbers", () => {
    assertEquals(check_is_integer(1), true);
    assertEquals(check_is_integer(0), true);
    assertEquals(check_is_integer(-100), true);
    assertEquals(check_is_integer(42), true);
  });

  await t.step("should return false for non-integer numbers", () => {
    assertEquals(check_is_integer(1.5), false);
    assertEquals(check_is_integer(3.14), false);
    assertEquals(check_is_integer(-2.718), false);
    assertEquals(check_is_integer(Number.NaN), false);
    assertEquals(check_is_integer(Number.POSITIVE_INFINITY), false);
    assertEquals(check_is_integer(Number.NEGATIVE_INFINITY), false);
  });
});

Deno.test("check_is_not_integer", async (t) => {
  await t.step("should return true for non-integer numbers", () => {
    assertEquals(check_is_not_integer(1.5), true);
    assertEquals(check_is_not_integer(3.14), true);
    assertEquals(check_is_not_integer(-2.718), true);
    assertEquals(check_is_not_integer(Number.NaN), true);
    assertEquals(check_is_not_integer(Number.POSITIVE_INFINITY), true);
    assertEquals(check_is_not_integer(Number.NEGATIVE_INFINITY), true);
  });

  await t.step("should return false for integer numbers", () => {
    assertEquals(check_is_not_integer(1), false);
    assertEquals(check_is_not_integer(0), false);
    assertEquals(check_is_not_integer(-100), false);
    assertEquals(check_is_not_integer(42), false);
  });
});
