import { assertEquals } from "../../deps.ts";
import { checkIsBoolean, checkIsNotBoolean } from "./main.ts";

Deno.test("checkIsBoolean", async (t) => {
  await t.step("should return true for boolean values", () => {
    assertEquals(checkIsBoolean(true), true);
    assertEquals(checkIsBoolean(false), true);
  });

  await t.step("should return false for non-boolean values", () => {
    assertEquals(checkIsBoolean(1), false);
    assertEquals(checkIsBoolean("true"), false);
    assertEquals(checkIsBoolean(null), false);
    assertEquals(checkIsBoolean(undefined), false);
    assertEquals(checkIsBoolean({}), false);
  });
});

Deno.test("checkIsNotBoolean", async (t) => {
  await t.step("should return true for non-boolean values", () => {
    assertEquals(checkIsNotBoolean(1), true);
    assertEquals(checkIsNotBoolean("false"), true);
    assertEquals(checkIsNotBoolean(null), true);
    assertEquals(checkIsNotBoolean(undefined), true);
    assertEquals(checkIsNotBoolean({}), true);
  });

  await t.step("should return false for boolean values", () => {
    assertEquals(checkIsNotBoolean(true), false);
    assertEquals(checkIsNotBoolean(false), false);
  });
});
