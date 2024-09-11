import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_null, check_is_null } from "./main.ts";

Deno.test("check_is_null", async (t) => {
  await t.step("should return true for null", () => {
    assertEquals(check_is_null(null), true);
  });

  await t.step("should return false for non-null values", () => {
    assertEquals(check_is_null(undefined), false);
    assertEquals(check_is_null(0), false);
    assertEquals(check_is_null(""), false);
    assertEquals(check_is_null(false), false);
    assertEquals(check_is_null({}), false);
  });

  await t.step("should narrow null type", () => {
    type Value = string | null;
    const value = {} as Value;
    if (check_is_null(value)) {
      assertType<IsExact<typeof value, null>>(true);
    }
  });
});

Deno.test("check_is_not_null", async (t) => {
  await t.step("should return true for non-null values", () => {
    assertEquals(check_is_not_null(undefined), true);
    assertEquals(check_is_not_null(0), true);
    assertEquals(check_is_not_null(""), true);
    assertEquals(check_is_not_null(false), true);
    assertEquals(check_is_not_null({}), true);
  });

  await t.step("should return false for null", () => {
    assertEquals(check_is_not_null(null), false);
  });

  await t.step("should exclude null type", () => {
    type Value = string | null;
    const value = {} as Value;
    if (check_is_not_null(value)) {
      assertType<IsExact<typeof value, string>>(true);
    }
  });
});
