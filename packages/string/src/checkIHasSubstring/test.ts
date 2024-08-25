import { assertEquals } from "../../deps.ts";
import { checkDoesNotHaveSubstring, checkHasSubstring } from "./main.ts";

Deno.test("checkIncludes", async (t) => {
  await t.step(
    "should return true if the string includes the substring",
    () => {
      assertEquals(checkHasSubstring("hello world", "world"), true);
      assertEquals(checkHasSubstring("hello", "ell"), true);
      assertEquals(checkHasSubstring("typescript", "script"), true);
      assertEquals(checkHasSubstring("openai", "pen"), true);
      assertEquals(checkHasSubstring("check", "check"), true);
    },
  );

  await t.step(
    "should return false if the string does not include the substring",
    () => {
      assertEquals(checkHasSubstring("hello world", "universe"), false);
      assertEquals(checkHasSubstring("hello", "world"), false);
      assertEquals(checkHasSubstring("typescript", "java"), false);
      assertEquals(checkHasSubstring("openai", "closedai"), false);
      assertEquals(checkHasSubstring("check", "cross"), false);
    },
  );
});

Deno.test("checkNotInclude", async (t) => {
  await t.step(
    "should return true if the string does not include the substring",
    () => {
      assertEquals(checkDoesNotHaveSubstring("hello world", "universe"), true);
      assertEquals(checkDoesNotHaveSubstring("hello", "world"), true);
      assertEquals(checkDoesNotHaveSubstring("typescript", "java"), true);
      assertEquals(checkDoesNotHaveSubstring("openai", "closedai"), true);
      assertEquals(checkDoesNotHaveSubstring("check", "cross"), true);
    },
  );

  await t.step(
    "should return false if the string includes the substring",
    () => {
      assertEquals(checkDoesNotHaveSubstring("hello world", "world"), false);
      assertEquals(checkDoesNotHaveSubstring("hello", "ell"), false);
      assertEquals(checkDoesNotHaveSubstring("typescript", "script"), false);
      assertEquals(checkDoesNotHaveSubstring("openai", "pen"), false);
      assertEquals(checkDoesNotHaveSubstring("check", "check"), false);
    },
  );
});
