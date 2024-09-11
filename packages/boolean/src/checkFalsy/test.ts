import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_falsy, check_is_not_falsy } from "./main.ts";

Deno.test("check_is_falsy", async (t) => {
  await t.step("should return true for falsy values", () => {
    assertEquals(check_is_falsy(false), true);
    assertEquals(check_is_falsy(0), true);
    assertEquals(check_is_falsy(""), true);
    assertEquals(check_is_falsy(null), true);
    assertEquals(check_is_falsy(undefined), true);
    assertEquals(check_is_falsy(NaN), true);
    assertEquals(check_is_falsy(0n), true);
  });

  await t.step("should return false for truthy values", () => {
    assertEquals(check_is_falsy(true), false);
    assertEquals(check_is_falsy(1), false);
    assertEquals(check_is_falsy("string"), false);
    assertEquals(check_is_falsy({}), false);
    assertEquals(check_is_falsy([]), false);
  });

  await t.step("should narrow falsy types", () => {
    type Value = string | 0 | null | undefined | false;
    const value = {} as Value;
    if (check_is_falsy(value)) {
      assertType<IsExact<typeof value, Exclude<Value, string>>>(true);
    }
  });
});

Deno.test("check_is_not_falsy", async (t) => {
  await t.step("should return true for truthy values", () => {
    assertEquals(check_is_not_falsy(true), true);
    assertEquals(check_is_not_falsy(1), true);
    assertEquals(check_is_not_falsy("string"), true);
    assertEquals(check_is_not_falsy({}), true);
    assertEquals(check_is_not_falsy([]), true);
  });

  await t.step("should return false for falsy values", () => {
    assertEquals(check_is_not_falsy(false), false);
    assertEquals(check_is_not_falsy(0), false);
    assertEquals(check_is_not_falsy(""), false);
    assertEquals(check_is_not_falsy(null), false);
    assertEquals(check_is_not_falsy(undefined), false);
    assertEquals(check_is_not_falsy(NaN), false);
    assertEquals(check_is_not_falsy(0n), false);
  });

  await t.step("should exclude falsy types", () => {
    type Value = string | 0 | null | undefined | false;
    const value = {} as Value;
    if (check_is_not_falsy(value)) {
      assertType<IsExact<typeof value, string>>(true);
    }
  });
});
