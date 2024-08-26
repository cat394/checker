import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsEmptryString, checkIsNotEmptyString } from "./main.ts";

Deno.test("checkIsEmptryString", async (t) => {
  await t.step("should return true for empty strings", () => {
    assertEquals(checkIsEmptryString(""), true);
  });

  await t.step("should return false for non-empty strings", () => {
    assertEquals(checkIsEmptryString("hello"), false);
    assertEquals(checkIsEmptryString(" "), false);
    assertEquals(checkIsEmptryString("123"), false);
  });

  await t.step("should narrow empty-string type", () => {
    const value: string = "some string";
    if (checkIsEmptryString(value)) {
      assertType<IsExact<typeof value, "">>(true);
    }
  });
});

Deno.test("checkIsNotEmptyString", async (t) => {
  await t.step("should return true for non-empty strings", () => {
    assertEquals(checkIsNotEmptyString("hello"), true);
    assertEquals(checkIsNotEmptyString(" "), true);
    assertEquals(checkIsNotEmptyString("123"), true);
  });

  await t.step("should return false for empty strings", () => {
    assertEquals(checkIsNotEmptyString(""), false);
  });
});
