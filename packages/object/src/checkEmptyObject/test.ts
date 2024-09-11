import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import type { EmptyObject } from "../types.ts";
import { check_is_empty_object, check_is_not_empty_object } from "./main.ts";

Deno.test("check_is_empty_object", async (t) => {
  await t.step("should return true for empty objects", () => {
    assertEquals(check_is_empty_object({}), true); // Regular empty object
    assertEquals(check_is_empty_object(Object.create(null)), true); // Object with no prototype
  });

  await t.step("should return false for non-empty objects", () => {
    assertEquals(check_is_empty_object({ key: "value" }), false); // Object with a key-value pair
    assertEquals(check_is_empty_object({ a: 1 }), false); // Another non-empty object
    assertEquals(check_is_empty_object(new Date()), false); // Date instance, considered non-empty
  });

  await t.step("should narrow non-empty object type", () => {
    const value: object = {};
    if (check_is_empty_object(value)) {
      assertType<IsExact<typeof value, EmptyObject>>(true);
    }
  });
});

Deno.test("check_is_not_empty_object", async (t) => {
  await t.step("should return true for non-empty objects", () => {
    assertEquals(check_is_not_empty_object({ key: "value" }), true); // Object with a key-value pair
    assertEquals(check_is_not_empty_object({ a: 1 }), true); // Another non-empty object
    assertEquals(check_is_not_empty_object(new Date()), true); // Date instance, considered non-empty
  });

  await t.step("should return false for empty objects", () => {
    assertEquals(check_is_not_empty_object({}), false); // Regular empty object
    assertEquals(check_is_not_empty_object(Object.create(null)), false); // Object with no prototype
  });

  await t.step("should exclude non-empty object", () => {
    type Value = Record<string, string> | EmptyObject;
    const value = {} as Value;
    assertType<IsExact<typeof value, Record<string, string>>>(true);
  });
});
