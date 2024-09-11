import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_empty_array, check_is_not_empty_array } from "./main.ts";

Deno.test("check_is_empty_array", async (t) => {
  await t.step("should return true for empty arrays", () => {
    assertEquals(check_is_empty_array([]), true);
  });

  await t.step("should return false for non-empty arrays", () => {
    assertEquals(check_is_empty_array([1, 2, 3]), false);
    assertEquals(check_is_empty_array(["a", "b", "c"]), false);
  });

  await t.step("should narrow down to an empty array type", () => {
    const value = {} as string[];
    if (check_is_empty_array(value)) {
      assertType<IsExact<typeof value, []>>(true);
    }
  });
});

Deno.test("check_is_not_empty_array", async (t) => {
  await t.step("should return true for non-empty arrays", () => {
    assertEquals(check_is_not_empty_array([1, 2, 3]), true);
    assertEquals(check_is_not_empty_array(["a", "b", "c"]), true);
  });

  await t.step("should return false for empty arrays", () => {
    assertEquals(check_is_not_empty_array([]), false);
  });

  await t.step("should exclude empty array type", () => {
    type Value = string[] | [];
    const value = {} as Value;
    if (check_is_not_empty_array(value)) {
      assertType<IsExact<typeof value, string[]>>(true);
    }
  });
});
