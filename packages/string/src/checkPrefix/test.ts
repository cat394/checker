import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_does_not_have_prefix, check_has_prefix } from "./main.ts";

Deno.test("check_has_prefix", async (t) => {
  await t.step(
    "should return true when the string starts with the prefix",
    () => {
      assertEquals(check_has_prefix("hello world", "hello"), true);
      assertEquals(check_has_prefix("deno land", "deno"), true);
      assertEquals(check_has_prefix("special!characters", "special!"), true);
      assertEquals(check_has_prefix("12345", "123"), true);
      assertEquals(check_has_prefix("test", "t"), true);
    },
  );

  await t.step(
    "should return false when the string does not start with the prefix",
    () => {
      assertEquals(check_has_prefix("hello world", "world"), false);
      assertEquals(check_has_prefix("deno land", "land"), false);
      assertEquals(check_has_prefix("special!characters", "!special"), false);
      assertEquals(check_has_prefix("12345", "234"), false);
      assertEquals(check_has_prefix("test", "e"), false);
    },
  );

  await t.step("should narrow string with prefix type", () => {
    const value: string = "hl";
    if (check_has_prefix(value, "prefix")) {
      assertType<IsExact<typeof value, `prefix${string}`>>(true);
    }
  });
});

Deno.test("check_does_not_have_prefix", async (t) => {
  await t.step(
    "should return true when the string does not start with the prefix",
    () => {
      assertEquals(check_does_not_have_prefix("hello world", "world"), true);
      assertEquals(check_does_not_have_prefix("deno land", "land"), true);
      assertEquals(
        check_does_not_have_prefix("special!characters", "!special"),
        true,
      );
      assertEquals(check_does_not_have_prefix("12345", "234"), true);
      assertEquals(check_does_not_have_prefix("test", "e"), true);
    },
  );

  await t.step(
    "should return false when the string starts with the prefix",
    () => {
      assertEquals(check_does_not_have_prefix("hello world", "hello"), false);
      assertEquals(check_does_not_have_prefix("deno land", "deno"), false);
      assertEquals(
        check_does_not_have_prefix("special!characters", "special!"),
        false,
      );
      assertEquals(check_does_not_have_prefix("12345", "123"), false);
      assertEquals(check_does_not_have_prefix("test", "t"), false);
    },
  );
});
