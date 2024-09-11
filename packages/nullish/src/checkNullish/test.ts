import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_nullish, check_is_nullish } from "./main.ts";

Deno.test("checkIsNullish", async (t) => {
  await t.step("should return true for nullish values", () => {
    assertEquals(check_is_nullish(null), true);
    assertEquals(check_is_nullish(undefined), true);
  });

  await t.step("should return false for non-nullish values", () => {
    assertEquals(check_is_nullish("string"), false);
    assertEquals(check_is_nullish(123), false);
    assertEquals(check_is_nullish([]), false);
    assertEquals(check_is_nullish({}), false);
  });

  await t.step("should narrow nullish types", () => {
    type Value = string | null | undefined;
    const value = {} as Value;
    if (check_is_nullish(value)) {
      assertType<IsExact<typeof value, null | undefined>>(true);
    }
  });
});

Deno.test("checkIsNotNullish", async (t) => {
  await t.step("should return true for non-nullish values", () => {
    assertEquals(check_is_not_nullish("string"), true);
    assertEquals(check_is_not_nullish(123), true);
    assertEquals(check_is_not_nullish([]), true);
    assertEquals(check_is_not_nullish({}), true);
  });

  await t.step("should return false for nullish values", () => {
    assertEquals(check_is_not_nullish(null), false);
    assertEquals(check_is_not_nullish(undefined), false);
  });

  await t.step("should exclude nullish types", () => {
    type Value = string | null | undefined;
    const value = {} as Value;
    if (check_is_not_nullish(value)) {
      assertType<IsExact<typeof value, string>>(true);
    }
  });
});
