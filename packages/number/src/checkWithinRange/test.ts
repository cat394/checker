import { assertEquals } from "../../deps.ts";
import { check_is_not_within_range, check_is_within_range } from "./main.ts";

Deno.test("check_is_within_range", async (t) => {
  await t.step("should return true for numbers within the range", () => {
    assertEquals(check_is_within_range(5, 1, 10), true);
    assertEquals(check_is_within_range(1, 1, 10), true); // Testing the lower boundary
    assertEquals(check_is_within_range(10, 1, 10), true); // Testing the upper boundary
    assertEquals(check_is_within_range(0, -5, 5), true);
    assertEquals(check_is_within_range(-1, -10, 0), true);
  });

  await t.step("should return false for numbers outside the range", () => {
    assertEquals(check_is_within_range(0, 1, 10), false); // Below the lower boundary
    assertEquals(check_is_within_range(11, 1, 10), false); // Above the upper boundary
    assertEquals(check_is_within_range(-6, -5, 5), false); // Below the lower boundary
    assertEquals(check_is_within_range(6, -5, 5), false); // Above the upper boundary
    assertEquals(check_is_within_range(-11, -10, 0), false); // Below the lower boundary
  });
});

Deno.test("check_is_not_within_range", async (t) => {
  await t.step("should return true for numbers outside the range", () => {
    assertEquals(check_is_not_within_range(0, 1, 10), true); // Below the lower boundary
    assertEquals(check_is_not_within_range(11, 1, 10), true); // Above the upper boundary
    assertEquals(check_is_not_within_range(-6, -5, 5), true); // Below the lower boundary
    assertEquals(check_is_not_within_range(6, -5, 5), true); // Above the upper boundary
    assertEquals(check_is_not_within_range(-11, -10, 0), true); // Below the lower boundary
  });

  await t.step("should return false for numbers within the range", () => {
    assertEquals(check_is_not_within_range(5, 1, 10), false);
    assertEquals(check_is_not_within_range(1, 1, 10), false); // Testing the lower boundary
    assertEquals(check_is_not_within_range(10, 1, 10), false); // Testing the upper boundary
    assertEquals(check_is_not_within_range(0, -5, 5), false);
    assertEquals(check_is_not_within_range(-1, -10, 0), false);
  });
});
