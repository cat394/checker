import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkDoesNotHavePrefix, checkHasPrefix } from "./main.ts";

Deno.test("checkStartsWith", async (t) => {
  await t.step(
    "should return true when the string starts with the prefix",
    () => {
      assertEquals(checkHasPrefix("hello world", "hello"), true);
      assertEquals(checkHasPrefix("deno land", "deno"), true);
      assertEquals(checkHasPrefix("special!characters", "special!"), true);
      assertEquals(checkHasPrefix("12345", "123"), true);
      assertEquals(checkHasPrefix("test", "t"), true);
    },
  );

  await t.step(
    "should return false when the string does not start with the prefix",
    () => {
      assertEquals(checkHasPrefix("hello world", "world"), false);
      assertEquals(checkHasPrefix("deno land", "land"), false);
      assertEquals(checkHasPrefix("special!characters", "!special"), false);
      assertEquals(checkHasPrefix("12345", "234"), false);
      assertEquals(checkHasPrefix("test", "e"), false);
    },
  );

  await t.step("should narrow string with prefix type", () => {
    const value: string = "hl";
    if (checkHasPrefix(value, 'prefix')) {
      assertType<IsExact<typeof value, `prefix${string}`>>(true);
    }
  })
});

Deno.test("checkNotStartWith", async (t) => {
  await t.step(
    "should return true when the string does not start with the prefix",
    () => {
      assertEquals(checkDoesNotHavePrefix("hello world", "world"), true);
      assertEquals(checkDoesNotHavePrefix("deno land", "land"), true);
      assertEquals(
        checkDoesNotHavePrefix("special!characters", "!special"),
        true,
      );
      assertEquals(checkDoesNotHavePrefix("12345", "234"), true);
      assertEquals(checkDoesNotHavePrefix("test", "e"), true);
    },
  );

  await t.step(
    "should return false when the string starts with the prefix",
    () => {
      assertEquals(checkDoesNotHavePrefix("hello world", "hello"), false);
      assertEquals(checkDoesNotHavePrefix("deno land", "deno"), false);
      assertEquals(
        checkDoesNotHavePrefix("special!characters", "special!"),
        false,
      );
      assertEquals(checkDoesNotHavePrefix("12345", "123"), false);
      assertEquals(checkDoesNotHavePrefix("test", "t"), false);
    },
  );
});
