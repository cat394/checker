import { assertEquals } from "../../deps.ts";
import {
  check_array_does_not_have_value,
  check_array_has_value,
} from "./main.ts";

Deno.test("check_array_has_value", async (t) => {
  await t.step("should return true when the value is in the array", () => {
    assertEquals(check_array_has_value([1, 2, 3, 4], 3), true);
    assertEquals(check_array_has_value(["a", "b", "c"], "b"), true);
  });

  await t.step("should return false when the value is not in the array", () => {
    assertEquals(check_array_has_value([1, 2, 3, 4], 5), false);
    assertEquals(check_array_has_value(["a", "b", "c"], "d"), false);
  });
});

Deno.test("check_array_does_not_have_value", async (t) => {
  await t.step("should return true when the value is not in the array", () => {
    assertEquals(check_array_does_not_have_value([1, 2, 3, 4], 5), true);
    assertEquals(check_array_does_not_have_value(["a", "b", "c"], "d"), true);
  });

  await t.step("should return false when the value is in the array", () => {
    assertEquals(check_array_does_not_have_value([1, 2, 3, 4], 3), false);
    assertEquals(check_array_does_not_have_value(["a", "b", "c"], "b"), false);
  });
});
