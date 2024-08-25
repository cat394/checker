import { assertEquals } from "../../deps.ts";
import {
  checkKeyDoesNotExistInObject,
  checkKeyExistsInObject,
} from "./main.ts";

Deno.test("checkHasKey", async (t) => {
  await t.step("should return true if object has the key", () => {
    assertEquals(checkKeyExistsInObject({ key: "value" }, "key"), true);
    assertEquals(checkKeyExistsInObject({ a: 1, b: 2 }, "b"), true);
  });

  await t.step("should return false if object does not have the key", () => {
    assertEquals(
      checkKeyExistsInObject({ key: "value" }, "nonExistentKey"),
      false,
    );
    assertEquals(checkKeyExistsInObject({}, "anyKey"), false); // Empty object
  });

  await t.step("should return true for inherited keys", () => {
    const obj = Object.create({ inheritedKey: "value" });
    assertEquals(checkKeyExistsInObject(obj, "inheritedKey"), true); // Inherited key
  });
});

Deno.test("checkNotHaveKey", async (t) => {
  await t.step("should return true if object does not have the key", () => {
    assertEquals(
      checkKeyDoesNotExistInObject({ key: "value" }, "nonExistentKey"),
      true,
    );
    assertEquals(checkKeyDoesNotExistInObject({}, "anyKey"), true); // Empty object
  });

  await t.step("should return false if object has the key", () => {
    assertEquals(checkKeyDoesNotExistInObject({ key: "value" }, "key"), false);
    assertEquals(checkKeyDoesNotExistInObject({ a: 1, b: 2 }, "a"), false);
  });

  await t.step("should return false for inherited keys", () => {
    const obj = Object.create({ inheritedKey: "value" });
    assertEquals(checkKeyDoesNotExistInObject(obj, "inheritedKey"), false); // Inherited key
  });
});
