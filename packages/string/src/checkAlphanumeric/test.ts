import { assertEquals } from "../../deps.ts";
import { checkIsAlphanumeric, checkIsNotAlphanumeric } from "./main.ts";

Deno.test("checkIsAlphanumeric", async (t) => {
  await t.step("should return true for alphanumeric strings", () => {
    assertEquals(checkIsAlphanumeric("abc123"), true);
    assertEquals(checkIsAlphanumeric("ABC123"), true);
    assertEquals(checkIsAlphanumeric("a1b2c3"), true);
    assertEquals(checkIsAlphanumeric("123456"), true);
    assertEquals(checkIsAlphanumeric("abcdef"), true);
    assertEquals(checkIsAlphanumeric("ABCDEF"), true);
  });

  await t.step("should return false for non-alphanumeric strings", () => {
    assertEquals(checkIsAlphanumeric("abc!123"), false);
    assertEquals(checkIsAlphanumeric("abc 123"), false); // space is not alphanumeric
    assertEquals(checkIsAlphanumeric("abc-123"), false);
    assertEquals(checkIsAlphanumeric("abc123@"), false);
    assertEquals(checkIsAlphanumeric("!@#"), false);
    assertEquals(checkIsAlphanumeric(" "), false);
  });
});

Deno.test("checkIsNotAlphanumeric", async (t) => {
  await t.step("should return true for non-alphanumeric strings", () => {
    assertEquals(checkIsNotAlphanumeric("abc!123"), true);
    assertEquals(checkIsNotAlphanumeric("abc 123"), true); // space is not alphanumeric
    assertEquals(checkIsNotAlphanumeric("abc-123"), true);
    assertEquals(checkIsNotAlphanumeric("abc123@"), true);
    assertEquals(checkIsNotAlphanumeric("!@#"), true);
    assertEquals(checkIsNotAlphanumeric(" "), true);
  });

  await t.step("should return false for alphanumeric strings", () => {
    assertEquals(checkIsNotAlphanumeric("abc123"), false);
    assertEquals(checkIsNotAlphanumeric("ABC123"), false);
    assertEquals(checkIsNotAlphanumeric("a1b2c3"), false);
    assertEquals(checkIsNotAlphanumeric("123456"), false);
    assertEquals(checkIsNotAlphanumeric("abcdef"), false);
    assertEquals(checkIsNotAlphanumeric("ABCDEF"), false);
  });
});
