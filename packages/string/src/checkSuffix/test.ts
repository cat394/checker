import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkDoesNotHaveSuffix, checkHasSuffix } from "./main.ts";

Deno.test("checkEndsWith", async (t) => {
  await t.step(
    "should return true for strings that end with the given suffix",
    () => {
      assertEquals(checkHasSuffix("hello world", "world"), true);
      assertEquals(checkHasSuffix("hello", "o"), true);
      assertEquals(checkHasSuffix("typescript", "script"), true);
      assertEquals(checkHasSuffix("openai", "ai"), true);
      assertEquals(checkHasSuffix("end", "end"), true);
    },
  );

  await t.step(
    "should return false for strings that do not end with the given suffix",
    () => {
      assertEquals(checkHasSuffix("hello world", "hello"), false);
      assertEquals(checkHasSuffix("hello", "l"), false);
      assertEquals(checkHasSuffix("typescript", "type"), false);
      assertEquals(checkHasSuffix("openai", "open"), false);
      assertEquals(checkHasSuffix("end", "start"), false);
    },
  );

  await t.step("should narrow string with suffix type", () => {
    const value: string = "";
    if (checkHasSuffix(value, "suffix")) {
      assertType<IsExact<typeof value, `${string}suffix`>>(true);
    }
  });
});

Deno.test("checkNotEndWith", async (t) => {
  await t.step(
    "should return true for strings that do not end with the given suffix",
    () => {
      assertEquals(checkDoesNotHaveSuffix("hello world", "hello"), true);
      assertEquals(checkDoesNotHaveSuffix("hello", "l"), true);
      assertEquals(checkDoesNotHaveSuffix("typescript", "type"), true);
      assertEquals(checkDoesNotHaveSuffix("openai", "open"), true);
      assertEquals(checkDoesNotHaveSuffix("end", "start"), true);
    },
  );

  await t.step(
    "should return false for strings that end with the given suffix",
    () => {
      assertEquals(checkDoesNotHaveSuffix("hello world", "world"), false);
      assertEquals(checkDoesNotHaveSuffix("hello", "o"), false);
      assertEquals(checkDoesNotHaveSuffix("typescript", "script"), false);
      assertEquals(checkDoesNotHaveSuffix("openai", "ai"), false);
      assertEquals(checkDoesNotHaveSuffix("end", "end"), false);
    },
  );
});
