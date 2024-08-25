import { assertEquals } from "../../deps.ts";
import { checkIsEmptyObject, checkIsNotEmptyObject } from "./main.ts";

Deno.test("checkIsEmptyObject", async (t) => {
  await t.step("should return true for empty objects", () => {
    assertEquals(checkIsEmptyObject({}), true); // Regular empty object
    assertEquals(checkIsEmptyObject(Object.create(null)), true); // Object with no prototype
  });

  await t.step("should return false for non-empty objects", () => {
    assertEquals(checkIsEmptyObject({ key: "value" }), false); // Object with a key-value pair
    assertEquals(checkIsEmptyObject({ a: 1 }), false); // Another non-empty object
    assertEquals(checkIsEmptyObject(new Date()), false); // Date instance, considered non-empty
  });
});

Deno.test("checkIsNotEmptyObject", async (t) => {
  await t.step("should return true for non-empty objects", () => {
    assertEquals(checkIsNotEmptyObject({ key: "value" }), true); // Object with a key-value pair
    assertEquals(checkIsNotEmptyObject({ a: 1 }), true); // Another non-empty object
    assertEquals(checkIsNotEmptyObject(new Date()), true); // Date instance, considered non-empty
  });

  await t.step("should return false for empty objects", () => {
    assertEquals(checkIsNotEmptyObject({}), false); // Regular empty object
    assertEquals(checkIsNotEmptyObject(Object.create(null)), false); // Object with no prototype
  });
});
