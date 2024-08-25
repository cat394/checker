import { assertEquals } from "../../deps.ts";
import {
  checkValueDoesNotExistInObject,
  checkValueExistsInObject,
} from "./main.ts";

Deno.test("checkObjectHasValue", async (t) => {
  await t.step("should return true if object has the value", () => {
    assertEquals(checkValueExistsInObject({ key: "value" }, "value"), true);
    assertEquals(checkValueExistsInObject({ a: 1, b: 2 }, 2), true);
  });

  await t.step("should return false if object does not have the value", () => {
    assertEquals(
      checkValueExistsInObject({ key: "value" }, "nonExistentValue"),
      false,
    );
    assertEquals(checkValueExistsInObject({ a: 1, b: 2 }, 3), false);
  });

  await t.step("should handle objects with multiple identical values", () => {
    assertEquals(checkValueExistsInObject({ a: 1, b: 1 }, 1), true); // Multiple keys with the same value
  });
});

Deno.test("checkObjectNotHaveValue", async (t) => {
  await t.step("should return true if object does not have the value", () => {
    assertEquals(
      checkValueDoesNotExistInObject({ key: "value" }, "nonExistentValue"),
      true,
    );
    assertEquals(checkValueDoesNotExistInObject({ a: 1, b: 2 }, 3), true);
  });

  await t.step("should return false if object has the value", () => {
    assertEquals(
      checkValueDoesNotExistInObject({ key: "value" }, "value"),
      false,
    );
    assertEquals(checkValueDoesNotExistInObject({ a: 1, b: 2 }, 2), false);
  });

  await t.step("should handle objects with multiple identical values", () => {
    assertEquals(checkValueDoesNotExistInObject({ a: 1, b: 1 }, 1), false); // Multiple keys with the same value
  });
});
