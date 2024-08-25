import { assertEquals } from "../../deps.ts";
import { checkIsNotWithinRange, checkIsWithinRange } from "./main.ts";

Deno.test("checkIsWithinRange", async (t) => {
  await t.step("should return true for numbers within the range", () => {
    assertEquals(checkIsWithinRange(5, 1, 10), true);
    assertEquals(checkIsWithinRange(1, 1, 10), true); // Testing the lower boundary
    assertEquals(checkIsWithinRange(10, 1, 10), true); // Testing the upper boundary
    assertEquals(checkIsWithinRange(0, -5, 5), true);
    assertEquals(checkIsWithinRange(-1, -10, 0), true);
  });

  await t.step("should return false for numbers outside the range", () => {
    assertEquals(checkIsWithinRange(0, 1, 10), false); // Below the lower boundary
    assertEquals(checkIsWithinRange(11, 1, 10), false); // Above the upper boundary
    assertEquals(checkIsWithinRange(-6, -5, 5), false); // Below the lower boundary
    assertEquals(checkIsWithinRange(6, -5, 5), false); // Above the upper boundary
    assertEquals(checkIsWithinRange(-11, -10, 0), false); // Below the lower boundary
  });
});

Deno.test("checkIsNotWithinRange", async (t) => {
  await t.step("should return true for numbers outside the range", () => {
    assertEquals(checkIsNotWithinRange(0, 1, 10), true); // Below the lower boundary
    assertEquals(checkIsNotWithinRange(11, 1, 10), true); // Above the upper boundary
    assertEquals(checkIsNotWithinRange(-6, -5, 5), true); // Below the lower boundary
    assertEquals(checkIsNotWithinRange(6, -5, 5), true); // Above the upper boundary
    assertEquals(checkIsNotWithinRange(-11, -10, 0), true); // Below the lower boundary
  });

  await t.step("should return false for numbers within the range", () => {
    assertEquals(checkIsNotWithinRange(5, 1, 10), false);
    assertEquals(checkIsNotWithinRange(1, 1, 10), false); // Testing the lower boundary
    assertEquals(checkIsNotWithinRange(10, 1, 10), false); // Testing the upper boundary
    assertEquals(checkIsNotWithinRange(0, -5, 5), false);
    assertEquals(checkIsNotWithinRange(-1, -10, 0), false);
  });
});
