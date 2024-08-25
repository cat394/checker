import { assertEquals } from "../../deps.ts";
import { checkIsDeepEqual, checkIsNotDeepEqual } from "./main.ts";

Deno.test("checkIsDeepEqual", async (t) => {
  await t.step("should return true for deeply equal objects", () => {
    assertEquals(checkIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
    assertEquals(checkIsDeepEqual({}, {}), true); // Empty objects
  });

  await t.step("should return false for objects with different values", () => {
    assertEquals(checkIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }), false);
    assertEquals(checkIsDeepEqual({ a: 1 }, { a: 1, b: 2 }), false); // Different keys
  });

  await t.step(
    "should return false for objects with different key order",
    () => {
      assertEquals(checkIsDeepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), false); // Different key order
    },
  );
});

Deno.test("checkIsNotDeepEqual", async (t) => {
  await t.step(
    "should return true for objects that are not deeply equal",
    () => {
      assertEquals(checkIsNotDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }), true);
      assertEquals(checkIsNotDeepEqual({ a: 1 }, { a: 1, b: 2 }), true); // Different keys
    },
  );

  await t.step("should return false for deeply equal objects", () => {
    assertEquals(checkIsNotDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), false);
    assertEquals(checkIsNotDeepEqual({}, {}), false); // Empty objects
  });
});
