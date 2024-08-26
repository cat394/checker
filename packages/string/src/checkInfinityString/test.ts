import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsInfinityString, checkIsNotInfinityString } from "./main.ts";

Deno.test("checkIsInfinityString", async (t) => {
  await t.step(
    'should return true for "Infinity" or "-Infinity" strings',
    () => {
      assertEquals(checkIsInfinityString("Infinity"), true);
      assertEquals(checkIsInfinityString("-Infinity"), true);
    },
  );

  await t.step("should return false for non-Infinity strings", () => {
    assertEquals(checkIsInfinityString("abc"), false);
    assertEquals(checkIsInfinityString("123"), false);
    assertEquals(checkIsInfinityString("NaN"), false);
    assertEquals(checkIsInfinityString("1e5"), false);
    assertEquals(checkIsInfinityString(""), false);
    assertEquals(checkIsInfinityString(" "), false);
    assertEquals(checkIsInfinityString("  Infinity  "), false); // with spaces
    assertEquals(checkIsInfinityString("  -Infinity  "), false); // with spaces
  });

  await t.step("should narrow 'Infinity' or '-Infinity", () => {
    const value: string = "";
    if (checkIsInfinityString(value)) {
      assertType<IsExact<typeof value, "Infinity" | "-Infinity">>(true);
    }
  });
});

Deno.test("checkIsNotInfinityString", async (t) => {
  await t.step(
    'should return true for strings that are not "Infinity" or "-Infinity"',
    () => {
      assertEquals(checkIsNotInfinityString("abc"), true);
      assertEquals(checkIsNotInfinityString("123"), true);
      assertEquals(checkIsNotInfinityString("NaN"), true);
      assertEquals(checkIsNotInfinityString("1e5"), true);
      assertEquals(checkIsNotInfinityString(""), true);
      assertEquals(checkIsNotInfinityString(" "), true);
      assertEquals(checkIsNotInfinityString("  Infinity  "), true); // with spaces
      assertEquals(checkIsNotInfinityString("  -Infinity  "), true); // with spaces
    },
  );

  await t.step(
    'should return false for "Infinity" or "-Infinity" strings',
    () => {
      assertEquals(checkIsNotInfinityString("Infinity"), false);
      assertEquals(checkIsNotInfinityString("-Infinity"), false);
    },
  );
});
