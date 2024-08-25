import { assertEquals } from "../../deps.ts";
import { checkIsNotObject, checkIsObject } from "./main.ts";

Deno.test("checkIsObject", async (t) => {
  await t.step("should return true for objects", () => {
    assertEquals(checkIsObject({}), true); // Regular object
    assertEquals(checkIsObject({ key: "value" }), true); // Object with properties
    assertEquals(checkIsObject(Object.create(null)), true); // Object with no prototype
  });

  await t.step("should return false for non-objects", () => {
    assertEquals(checkIsObject(null), false); // Null should not be considered an object
    assertEquals(checkIsObject(undefined), false);
    assertEquals(checkIsObject(123), false);
    assertEquals(checkIsObject("string"), false);
    assertEquals(checkIsObject([1, 2, 3]), false);
    // Function is not considered an object
    assertEquals(
      checkIsObject(() => {}),
      false,
    );
  });
});

Deno.test("checkIsNotObject", async (t) => {
  await t.step("should return true for non-objects", () => {
    assertEquals(checkIsNotObject(null), true); // Null should be true
    assertEquals(checkIsNotObject(undefined), true);
    assertEquals(checkIsNotObject(123), true);
    assertEquals(checkIsNotObject("string"), true);
    assertEquals(checkIsNotObject([1, 2, 3]), true); // Array should return true
    // Function should return true
    assertEquals(
      checkIsNotObject(() => {}),
      true,
    );
  });

  await t.step("should return false for objects", () => {
    assertEquals(checkIsNotObject({}), false);
    assertEquals(checkIsNotObject({ key: "value" }), false);
    assertEquals(checkIsNotObject(Object.create(null)), false);
  });
});
