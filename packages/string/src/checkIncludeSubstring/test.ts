import { assertEquals } from "../../deps.ts";
import {
  checkDoesNotIncludeSubstring,
  checkIncludesSubstring,
} from "./main.ts";

Deno.test("checkIncludes", async (t) => {
  await t.step(
    "should return true if the string includes the substring",
    () => {
      assertEquals(checkIncludesSubstring("hello world", "world"), true);
      assertEquals(checkIncludesSubstring("hello", "ell"), true);
      assertEquals(checkIncludesSubstring("typescript", "script"), true);
      assertEquals(checkIncludesSubstring("openai", "pen"), true);
      assertEquals(checkIncludesSubstring("check", "check"), true);
    },
  );

  await t.step(
    "should return false if the string does not include the substring",
    () => {
      assertEquals(checkIncludesSubstring("hello world", "universe"), false);
      assertEquals(checkIncludesSubstring("hello", "world"), false);
      assertEquals(checkIncludesSubstring("typescript", "java"), false);
      assertEquals(checkIncludesSubstring("openai", "closedai"), false);
      assertEquals(checkIncludesSubstring("check", "cross"), false);
    },
  );
});

Deno.test("checkNotInclude", async (t) => {
  await t.step(
    "should return true if the string does not include the substring",
    () => {
      assertEquals(
        checkDoesNotIncludeSubstring("hello world", "universe"),
        true,
      );
      assertEquals(checkDoesNotIncludeSubstring("hello", "world"), true);
      assertEquals(checkDoesNotIncludeSubstring("typescript", "java"), true);
      assertEquals(checkDoesNotIncludeSubstring("openai", "closedai"), true);
      assertEquals(checkDoesNotIncludeSubstring("check", "cross"), true);
    },
  );

  await t.step(
    "should return false if the string includes the substring",
    () => {
      assertEquals(checkDoesNotIncludeSubstring("hello world", "world"), false);
      assertEquals(checkDoesNotIncludeSubstring("hello", "ell"), false);
      assertEquals(checkDoesNotIncludeSubstring("typescript", "script"), false);
      assertEquals(checkDoesNotIncludeSubstring("openai", "pen"), false);
      assertEquals(checkDoesNotIncludeSubstring("check", "check"), false);
    },
  );
});
