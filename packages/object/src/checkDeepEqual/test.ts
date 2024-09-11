import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_deep_equal, check_is_not_deep_equal } from "./main.ts";

Deno.test("check_is_deep_equal", async (t) => {
  await t.step("should return true for deeply equal objects", () => {
    assertEquals(check_is_deep_equal({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
    assertEquals(check_is_deep_equal({}, {}), true); // Empty objects
  });

  await t.step("should return false for objects with different values", () => {
    assertEquals(check_is_deep_equal({ a: 1, b: 2 }, { a: 1, b: 3 }), false);
    assertEquals(check_is_deep_equal({ a: 1 }, { a: 1, b: 2 }), false); // Different keys
  });

  await t.step(
    "should return false for objects with different key order",
    () => {
      assertEquals(check_is_deep_equal({ a: 1, b: 2 }, { b: 2, a: 1 }), false); // Different key order
    },
  );

  await t.step("should obj1 type narrow obj2 type", () => {
    const obj1: Record<string, unknown> = { a: 1, b: 2 };
    const obj2: Record<string, boolean> = { c: true, d: false };

    if (check_is_deep_equal(obj1, obj2)) {
      assertType<IsExact<typeof obj1, typeof obj2>>(true);
    }
  });
});

Deno.test("check_is_not_deep_equal", async (t) => {
  await t.step(
    "should return true for objects that are not deeply equal",
    () => {
      assertEquals(
        check_is_not_deep_equal({ a: 1, b: 2 }, { a: 1, b: 3 }),
        true,
      );
      assertEquals(check_is_not_deep_equal({ a: 1 }, { a: 1, b: 2 }), true); // Different keys
    },
  );

  await t.step("should return false for deeply equal objects", () => {
    assertEquals(
      check_is_not_deep_equal({ a: 1, b: 2 }, { a: 1, b: 2 }),
      false,
    );
    assertEquals(check_is_not_deep_equal({}, {}), false); // Empty objects
  });
});
