import { assertEquals } from "../../deps.ts";
import { checkIsNotPower, checkIsPower } from "./main.ts";

Deno.test("checkIsPowerOf", async (t) => {
  await t.step(
    "should return true for numbers that are powers of the base",
    () => {
      assertEquals(checkIsPower(1, 2), true); // 2^0 = 1
      assertEquals(checkIsPower(2, 2), true); // 2^1 = 2
      assertEquals(checkIsPower(4, 2), true); // 2^2 = 4
      assertEquals(checkIsPower(8, 2), true); // 2^3 = 8
      assertEquals(checkIsPower(9, 3), true); // 3^2 = 9
      assertEquals(checkIsPower(27, 3), true); // 3^3 = 27
      assertEquals(checkIsPower(16, 4), true); // 4^2 = 16
    },
  );

  await t.step(
    "should return false for numbers that are not powers of the base",
    () => {
      assertEquals(checkIsPower(3, 2), false);
      assertEquals(checkIsPower(5, 2), false);
      assertEquals(checkIsPower(10, 2), false);
      assertEquals(checkIsPower(12, 3), false);
      assertEquals(checkIsPower(14, 2), false);
      assertEquals(checkIsPower(20, 3), false);
    },
  );
});

Deno.test("checkIsNotPowerOf", async (t) => {
  await t.step(
    "should return true for numbers that are not powers of the base",
    () => {
      assertEquals(checkIsNotPower(3, 2), true);
      assertEquals(checkIsNotPower(5, 2), true);
      assertEquals(checkIsNotPower(10, 2), true);
      assertEquals(checkIsNotPower(12, 3), true);
      assertEquals(checkIsNotPower(14, 2), true);
      assertEquals(checkIsNotPower(20, 3), true);
    },
  );

  await t.step(
    "should return false for numbers that are powers of the base",
    () => {
      assertEquals(checkIsNotPower(1, 2), false);
      assertEquals(checkIsNotPower(2, 2), false);
      assertEquals(checkIsNotPower(4, 2), false);
      assertEquals(checkIsNotPower(8, 2), false);
      assertEquals(checkIsNotPower(9, 3), false);
      assertEquals(checkIsNotPower(27, 3), false);
      assertEquals(checkIsNotPower(16, 4), false);
    },
  );
});
