import { assertEquals } from "../../deps.ts";
import { checkIsLogarithm, checkIsNotLogarithm } from "./main.ts";

Deno.test("checkIsLogarithm", async (t) => {
  await t.step("should return true for correct logarithms", () => {
    assertEquals(checkIsLogarithm(2, 10, 100), true); // log10(100) = 2
    assertEquals(checkIsLogarithm(3, 2, 8), true); // log2(8) = 3
    assertEquals(checkIsLogarithm(1, 10, 10), true); // log10(10) = 1
    assertEquals(checkIsLogarithm(0, 5, 1), true); // log5(1) = 0
    assertEquals(checkIsLogarithm(4, 2, 16), true); // log2(16) = 4
  });

  await t.step("should return false for incorrect logarithms", () => {
    assertEquals(checkIsLogarithm(3, 10, 100), false); // log10(100) ≠ 3
    assertEquals(checkIsLogarithm(2, 2, 8), false); // log2(8) ≠ checkIsLogarithmeckMatchesLogarithm(2, 10, 10), false); // log10(10) checkIsLogarithmcheckMatchesLogarithm(1, 5, 1), false); // log5(1checkIsLogarithms(checkMatchesLogarithm(3, 2, 16), false); // log2(16) ≠ 3
  });
});

Deno.test("checkIsNotLogarithmOf", async (t) => {
  await t.step("should return true for incorrect logarithms", () => {
    assertEquals(checkIsNotLogarithm(3, 10, 100), true); // log10(100) ≠ 3
    assertEquals(checkIsNotLogarithm(2, 2, 8), true); // log2(8) ≠ 2
    assertEquals(checkIsNotLogarithm(2, 10, 10), true); // log10(10) ≠ 2
    assertEquals(checkIsNotLogarithm(1, 5, 1), true); // log5(1) ≠ 1
    assertEquals(checkIsNotLogarithm(3, 2, 16), true); // log2(16) ≠ 3
  });

  await t.step("should return false for correct logarithms", () => {
    assertEquals(checkIsNotLogarithm(2, 10, 100), false); // log10(100) = 2
    assertEquals(checkIsNotLogarithm(3, 2, 8), false); // log2(8) = 3
    assertEquals(checkIsNotLogarithm(1, 10, 10), false); // log10(10) = 1
    assertEquals(checkIsNotLogarithm(0, 5, 1), false); // log5(1) = 0
    assertEquals(checkIsNotLogarithm(4, 2, 16), false); // log2(16) = 4
  });
});
