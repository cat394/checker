import { assertEquals } from "../../deps.ts";
import { check_does_not_have_substring, check_has_substring } from "./main.ts";

Deno.test("check_has_substring", async (t) => {
  await t.step(
    "should return true if the string includes the substring",
    () => {
      assertEquals(check_has_substring("hello world", "world"), true);
      assertEquals(check_has_substring("hello", "ell"), true);
      assertEquals(check_has_substring("typescript", "script"), true);
      assertEquals(check_has_substring("openai", "pen"), true);
      assertEquals(check_has_substring("check", "check"), true);
    },
  );

  await t.step(
    "should return false if the string does not include the substring",
    () => {
      assertEquals(check_has_substring("hello world", "universe"), false);
      assertEquals(check_has_substring("hello", "world"), false);
      assertEquals(check_has_substring("typescript", "java"), false);
      assertEquals(check_has_substring("openai", "closedai"), false);
      assertEquals(check_has_substring("check", "cross"), false);
    },
  );
});

Deno.test("check_does_not_have_substring", async (t) => {
  await t.step(
    "should return true if the string does not include the substring",
    () => {
      assertEquals(
        check_does_not_have_substring("hello world", "universe"),
        true,
      );
      assertEquals(check_does_not_have_substring("hello", "world"), true);
      assertEquals(check_does_not_have_substring("typescript", "java"), true);
      assertEquals(check_does_not_have_substring("openai", "closedai"), true);
      assertEquals(check_does_not_have_substring("check", "cross"), true);
    },
  );

  await t.step(
    "should return false if the string includes the substring",
    () => {
      assertEquals(
        check_does_not_have_substring("hello world", "world"),
        false,
      );
      assertEquals(check_does_not_have_substring("hello", "ell"), false);
      assertEquals(
        check_does_not_have_substring("typescript", "script"),
        false,
      );
      assertEquals(check_does_not_have_substring("openai", "pen"), false);
      assertEquals(check_does_not_have_substring("check", "check"), false);
    },
  );
});
