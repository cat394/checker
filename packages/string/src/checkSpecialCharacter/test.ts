import { assertEquals } from "../../deps.ts";
import {
  check_does_not_have_special_character,
  check_has_special_character,
} from "./main.ts";

Deno.test("check_has_special_character", async (t) => {
  await t.step("should return true for strings with special characters", () => {
    assertEquals(check_has_special_character("hello!"), true);
    assertEquals(check_has_special_character("password#1"), true);
    assertEquals(check_has_special_character("welcome@home"), true);
    assertEquals(check_has_special_character("$100"), true);
    assertEquals(check_has_special_character("what's up?"), true);
    assertEquals(check_has_special_character("<tag>"), true);
  });

  await t.step(
    "should return false for strings without special characters",
    () => {
      assertEquals(check_has_special_character("hello"), false);
      assertEquals(check_has_special_character("password1"), false);
      assertEquals(check_has_special_character("welcomehome"), false);
      assertEquals(check_has_special_character("hello123"), false);
      assertEquals(check_has_special_character("justText"), false);
    },
  );
});

Deno.test("check_does_not_have_special_character", async (t) => {
  await t.step(
    "should return true for strings without special characters",
    () => {
      assertEquals(check_does_not_have_special_character("hello"), true);
      assertEquals(check_does_not_have_special_character("password1"), true);
      assertEquals(check_does_not_have_special_character("welcomehome"), true);
      assertEquals(check_does_not_have_special_character("hello123"), true);
      assertEquals(check_does_not_have_special_character("justText"), true);
    },
  );

  await t.step(
    "should return false for strings with special characters",
    () => {
      assertEquals(check_does_not_have_special_character("hello!"), false);
      assertEquals(check_does_not_have_special_character("password#1"), false);
      assertEquals(
        check_does_not_have_special_character("welcome@home"),
        false,
      );
      assertEquals(check_does_not_have_special_character("$100"), false);
      assertEquals(check_does_not_have_special_character("what's up?"), false);
      assertEquals(check_does_not_have_special_character("<tag>"), false);
    },
  );
});
