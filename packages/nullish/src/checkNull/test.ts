import { assertEquals } from "../../deps.ts";
import { checkIsNotNull, checkIsNull } from "./main.ts";

Deno.test("checkIsNull", async (t) => {
  await t.step("should return true for null", () => {
    assertEquals(checkIsNull(null), true);
  });

  await t.step("should return false for non-null values", () => {
    assertEquals(checkIsNull(undefined), false);
    assertEquals(checkIsNull(0), false);
    assertEquals(checkIsNull(""), false);
    assertEquals(checkIsNull(false), false);
    assertEquals(checkIsNull({}), false);
  });
});

Deno.test("checkIsNotNull", async (t) => {
  await t.step("should return true for non-null values", () => {
    assertEquals(checkIsNotNull(undefined), true);
    assertEquals(checkIsNotNull(0), true);
    assertEquals(checkIsNotNull(""), true);
    assertEquals(checkIsNotNull(false), true);
    assertEquals(checkIsNotNull({}), true);
  });

  await t.step("should return false for null", () => {
    assertEquals(checkIsNotNull(null), false);
  });
});
