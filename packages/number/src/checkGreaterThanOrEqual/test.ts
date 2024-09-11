import { assertEquals } from "../../deps.ts";
import {
  check_is_greater_than_or_equal,
  check_is_not_greater_than_or_equal,
} from "./main.ts";

Deno.test("checkIsGreaterThanOrEqual", async (t) => {
  await t.step("should return true when num is greater than threshold", () => {
    assertEquals(check_is_greater_than_or_equal(10, 5), true);
    assertEquals(check_is_greater_than_or_equal(100, 99), true);
    assertEquals(check_is_greater_than_or_equal(-1, -5), true);
  });

  await t.step("should return true when num is equal to threshold", () => {
    assertEquals(check_is_greater_than_or_equal(5, 5), true);
    assertEquals(check_is_greater_than_or_equal(0, 0), true);
    assertEquals(check_is_greater_than_or_equal(-10, -10), true);
  });

  await t.step("should return false when num is less than threshold", () => {
    assertEquals(check_is_greater_than_or_equal(3, 5), false);
    assertEquals(check_is_greater_than_or_equal(0, 10), false);
    assertEquals(check_is_greater_than_or_equal(-20, -10), false);
  });
});

Deno.test("checkIsNotGreaterThanOrEqual", async (t) => {
  await t.step("should return true when num is less than threshold", () => {
    assertEquals(check_is_not_greater_than_or_equal(3, 5), true);
    assertEquals(check_is_not_greater_than_or_equal(0, 10), true);
    assertEquals(check_is_not_greater_than_or_equal(-20, -10), true);
  });

  await t.step(
    "should return false when num is greater than or equal to threshold",
    () => {
      assertEquals(check_is_not_greater_than_or_equal(10, 5), false);
      assertEquals(check_is_not_greater_than_or_equal(0, 0), false);
      assertEquals(check_is_not_greater_than_or_equal(-1, -5), false);
    },
  );
});
