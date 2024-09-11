import { assertEquals } from "../../deps.ts";
import { check_is_even, check_is_not_even } from "./main.ts";

Deno.test("check_is_even", async (t) => {
  await t.step("should return true for even numbers", () => {
    assertEquals(check_is_even(2), true);
    assertEquals(check_is_even(0), true);
    assertEquals(check_is_even(-4), true);
    assertEquals(check_is_even(42), true);
  });

  await t.step("should return false for odd numbers", () => {
    assertEquals(check_is_even(1), false);
    assertEquals(check_is_even(-3), false);
    assertEquals(check_is_even(99), false);
  });

  await t.step("should return false for non-integer numbers", () => {
    assertEquals(check_is_even(1.5), false);
    assertEquals(check_is_even(3.14), false);
  });
});

Deno.test("check_is_not_even", async (t) => {
  await t.step("should return true for odd numbers", () => {
    assertEquals(check_is_not_even(1), true);
    assertEquals(check_is_not_even(-3), true);
    assertEquals(check_is_not_even(99), true);
  });

  await t.step("should return false for even numbers", () => {
    assertEquals(check_is_not_even(2), false);
    assertEquals(check_is_not_even(0), false);
    assertEquals(check_is_not_even(-4), false);
  });

  await t.step("should return true for non-integer numbers", () => {
    assertEquals(check_is_not_even(1.5), true);
    assertEquals(check_is_not_even(3.14), true);
  });
});
