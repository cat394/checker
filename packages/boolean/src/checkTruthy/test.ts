import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_truthy, check_is_truthy } from "./main.ts";

Deno.test("check_is_truthy", async (t) => {
  await t.step("should return true for truthy values", () => {
    assertEquals(check_is_truthy(1), true);
    assertEquals(check_is_truthy("string"), true);
    assertEquals(check_is_truthy(true), true);
    assertEquals(check_is_truthy([]), true);
    assertEquals(check_is_truthy({}), true);
  });

  await t.step("should return false for falsy values", () => {
    assertEquals(check_is_truthy(false), false);
    assertEquals(check_is_truthy(0), false);
    assertEquals(check_is_truthy(""), false);
    assertEquals(check_is_truthy(null), false);
    assertEquals(check_is_truthy(undefined), false);
    assertEquals(check_is_truthy(0n), false);
    assertEquals(check_is_truthy(NaN), false);
  });

  await t.step("should narrow truthy types", () => {
    type Value = string | number | true | null | undefined | false;
    const value = {} as Value;
    if (check_is_truthy(value)) {
      assertType<IsExact<typeof value, string | number | true>>(true);
    }
  });
});

Deno.test("check_is_not_truthy", async (t) => {
  await t.step("should return true for falsy values", () => {
    assertEquals(check_is_not_truthy(false), true);
    assertEquals(check_is_not_truthy(0), true);
    assertEquals(check_is_not_truthy(""), true);
    assertEquals(check_is_not_truthy(null), true);
    assertEquals(check_is_not_truthy(undefined), true);
    assertEquals(check_is_not_truthy(0n), true);
    assertEquals(check_is_not_truthy(NaN), true);
  });

  await t.step("should return false for truthy values", () => {
    assertEquals(check_is_not_truthy(1), false);
    assertEquals(check_is_not_truthy("string"), false);
    assertEquals(check_is_not_truthy(true), false);
    assertEquals(check_is_not_truthy([]), false);
    assertEquals(check_is_not_truthy({}), false);
  });

  await t.step("should exclude truthy types", () => {
    type Value = string | number | true | null | undefined | false;
    const value = {} as Value;
    if (check_is_not_truthy(value)) {
      assertType<IsExact<typeof value, null | undefined | false>>(true);
    }
  });
});
