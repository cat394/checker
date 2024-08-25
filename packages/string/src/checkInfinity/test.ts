import { assertEquals } from "../../deps.ts";
import { checkStringIsInfinity, checkStringIsNotInfinity } from "./main.ts";

Deno.test("checkStringIsInfinity", async (t) => {
  await t.step(
    'should return true for "Infinity" or "-Infinity" strings',
    () => {
      assertEquals(checkStringIsInfinity("Infinity"), true);
      assertEquals(checkStringIsInfinity("-Infinity"), true);
    },
  );

  await t.step("should return false for non-Infinity strings", () => {
    assertEquals(checkStringIsInfinity("abc"), false);
    assertEquals(checkStringIsInfinity("123"), false);
    assertEquals(checkStringIsInfinity("NaN"), false);
    assertEquals(checkStringIsInfinity("1e5"), false);
    assertEquals(checkStringIsInfinity(""), false);
    assertEquals(checkStringIsInfinity(" "), false);
    assertEquals(checkStringIsInfinity("  Infinity  "), false); // with spaces
    assertEquals(checkStringIsInfinity("  -Infinity  "), false); // with spaces
  });
});

Deno.test("checkStringIsNotInfinity", async (t) => {
  await t.step(
    'should return true for strings that are not "Infinity" or "-Infinity"',
    () => {
      assertEquals(checkStringIsNotInfinity("abc"), true);
      assertEquals(checkStringIsNotInfinity("123"), true);
      assertEquals(checkStringIsNotInfinity("NaN"), true);
      assertEquals(checkStringIsNotInfinity("1e5"), true);
      assertEquals(checkStringIsNotInfinity(""), true);
      assertEquals(checkStringIsNotInfinity(" "), true);
      assertEquals(checkStringIsNotInfinity("  Infinity  "), true); // with spaces
      assertEquals(checkStringIsNotInfinity("  -Infinity  "), true); // with spaces
    },
  );

  await t.step(
    'should return false for "Infinity" or "-Infinity" strings',
    () => {
      assertEquals(checkStringIsNotInfinity("Infinity"), false);
      assertEquals(checkStringIsNotInfinity("-Infinity"), false);
    },
  );
});
