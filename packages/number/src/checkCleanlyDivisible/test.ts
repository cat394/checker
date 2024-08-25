import { assertEquals } from "../../deps.ts";
import { checkIsCleanlyDivisible, checkIsNotCleanlyDivisible } from "./main.ts";

Deno.test("checkIsDivisibleBy", async (t) => {
  await t.step(
    "should return true for numbers divisible by the divisor",
    () => {
      assertEquals(checkIsCleanlyDivisible(10, 2), true);
      assertEquals(checkIsCleanlyDivisible(15, 3), true);
      assertEquals(checkIsCleanlyDivisible(100, 10), true);
      assertEquals(checkIsCleanlyDivisible(0, 1), true); // Zero is divisible by any non-zero number
      assertEquals(checkIsCleanlyDivisible(-10, 5), true); // Negative number divisible
    },
  );

  await t.step(
    "should return false for numbers not divisible by the divisor",
    () => {
      assertEquals(checkIsCleanlyDivisible(10, 3), false);
      assertEquals(checkIsCleanlyDivisible(14, 5), false);
      assertEquals(checkIsCleanlyDivisible(100, 6), false);
      assertEquals(checkIsCleanlyDivisible(7, 2), false);
      assertEquals(checkIsCleanlyDivisible(-9, 4), false); // Negative number not divisible
    },
  );
});

Deno.test("checkIsNotDivisibleBy", async (t) => {
  await t.step(
    "should return true for numbers not divisible by the divisor",
    () => {
      assertEquals(checkIsNotCleanlyDivisible(10, 3), true);
      assertEquals(checkIsNotCleanlyDivisible(14, 5), true);
      assertEquals(checkIsNotCleanlyDivisible(100, 6), true);
      assertEquals(checkIsNotCleanlyDivisible(7, 2), true);
      assertEquals(checkIsNotCleanlyDivisible(-9, 4), true); // Negative number not divisible
    },
  );

  await t.step(
    "should return false for numbers divisible by the divisor",
    () => {
      assertEquals(checkIsNotCleanlyDivisible(10, 2), false);
      assertEquals(checkIsNotCleanlyDivisible(15, 3), false);
      assertEquals(checkIsNotCleanlyDivisible(100, 10), false);
      assertEquals(checkIsNotCleanlyDivisible(0, 1), false); // Zero is divisible by any non-zero number
      assertEquals(checkIsNotCleanlyDivisible(-10, 5), false); // Negative number divisible
    },
  );
});
