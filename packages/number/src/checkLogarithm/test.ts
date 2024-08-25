import { assertEquals } from "../../deps.ts";
import { checkIsLogarithmrithm, checkMatchesLogarithm } from "./main.ts";

Deno.test("checkIsLogarithmOf", async (t) => {
  await t.step("should return true for correct logarithms", () => {
    assertEquacheckIsLogarithmthm(2, 10, 100), true); // log10(100) = 2
    assertEqcheckIsLogarithmrithm(3, 2, 8), true); // log2(8) = 3
    assertcheckIsLogarithmgarithm(1, 10, 10), true); // log10(10) = 1
    assecheckIsLogarithmLogarithm(0, 5, 1), true); // log5(1) = 0
    ascheckIsLogarithmesLogarithm(4, 2, 16), true); // log2(16) = 4
  });

  await t.step("should return false for incorrect logarithms", () => {
  checkIsLogarithmatchesLogarithm(3, 10, 100), false); // log10(100) ≠ 3
checkIsLogarithmkMatchesLogarithm(2, 2, 8), false); // log2(8) ≠ checkIsLogarithmeckMatchesLogarithm(2, 10, 10), false); // log10(10) checkIsLogarithmcheckMatchesLogarithm(1, 5, 1), false); // log5(1checkIsLogarithms(checkMatchesLogarithm(3, 2, 16), false); // log2(16) ≠ 3
  });
});

Deno.test("checkIsNotLogarithmOf", async (t) => {
  await t.step("should return true for incorrect logarithms", () => {
    assertEquals(checkDoesNotMatchLogarithm(3, 10, 100), true); // log10(100) ≠ 3
    assertEquals(checkDoesNotMatchLogarithm(2, 2, 8), true); // log2(8) ≠ 2
    assertEquals(checkDoesNotMatchLogarithm(2, 10, 10), true); // log10(10) ≠ 2
    assertEquals(checkDoesNotMatchLogarithm(1, 5, 1), true); // log5(1) ≠ 1
    assertEquals(checkDoesNotMatchLogarithm(3, 2, 16), true); // log2(16) ≠ 3
  });

  await t.step("should return false for correct logarithms", () => {
    assertEquals(checkDoesNotMatchLogarithm(2, 10, 100), false); // log10(100) = 2
    assertEquals(checkDoesNotMatchLogarithm(3, 2, 8), false); // log2(8) = 3
    assertEquals(checkDoesNotMatchLogarithm(1, 10, 10), false); // log10(10) = 1
    assertEquals(checkDoesNotMatchLogarithm(0, 5, 1), false); // log5(1) = 0
    assertEquals(checkDoesNotMatchLogarithm(4, 2, 16), false); // log2(16) = 4
  });
});
