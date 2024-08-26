import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsArray, checkIsNotArray } from "./main.ts";

Deno.test("checkIsArray", async (t) => {
  await t.step("should return true for arrays", () => {
    assertEquals(checkIsArray([1, 2, 3]), true);
    assertEquals(checkIsArray([]), true);
  });

  await t.step("should return false for non-arrays", () => {
    assertEquals(checkIsArray("string"), false);
    assertEquals(checkIsArray(123), false);
    assertEquals(checkIsArray({ key: "value" }), false);
    assertEquals(checkIsArray(null), false);
    assertEquals(checkIsArray(undefined), false);
  });

  await t.step("should narrow down to array type", () => {
    type Value = [] | string;
    const value = {} as Value;
    if (checkIsArray(value)) {
      assertType<IsExact<typeof value, []>>(true);
    }
  });
});

Deno.test("checkIsNotArray", async (t) => {
  await t.step("should return true for non-arrays", () => {
    assertEquals(checkIsNotArray<string>("string"), true);
    assertEquals(checkIsNotArray<number>(123), true);
    assertEquals(checkIsNotArray<object>({ key: "value" }), true);
    assertEquals(checkIsNotArray<null>(null), true);
    assertEquals(checkIsNotArray<undefined>(undefined), true);
  });

  await t.step("should return false for arrays", () => {
    assertEquals(checkIsNotArray<number[]>([1, 2, 3]), false);
    assertEquals(checkIsNotArray<number[]>([]), false);
  });

  await t.step("should exclude array type", () => {
    type Value = [] | string;
    const value = {} as Value;
    if (checkIsNotArray(value)) {
      assertType<IsExact<typeof value, string>>(true);
    }
  });
});
