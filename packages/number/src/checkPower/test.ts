import { assertEquals } from "../../deps.ts";
import { check_is_not_power, check_is_power } from "./main.ts";

Deno.test("check_is_power", async (t) => {
  await t.step(
    "should return true for numbers that are powers of the base",
    () => {
      assertEquals(check_is_power(1, 2), true); // 2^0 = 1
      assertEquals(check_is_power(2, 2), true); // 2^1 = 2
      assertEquals(check_is_power(4, 2), true); // 2^2 = 4
      assertEquals(check_is_power(8, 2), true); // 2^3 = 8
      assertEquals(check_is_power(9, 3), true); // 3^2 = 9
      assertEquals(check_is_power(27, 3), true); // 3^3 = 27
      assertEquals(check_is_power(16, 4), true); // 4^2 = 16
    },
  );

  await t.step(
    "should return false for numbers that are not powers of the base",
    () => {
      assertEquals(check_is_power(3, 2), false);
      assertEquals(check_is_power(5, 2), false);
      assertEquals(check_is_power(10, 2), false);
      assertEquals(check_is_power(12, 3), false);
      assertEquals(check_is_power(14, 2), false);
      assertEquals(check_is_power(20, 3), false);
    },
  );
});

Deno.test("check_is_not_power", async (t) => {
  await t.step(
    "should return true for numbers that are not powers of the base",
    () => {
      assertEquals(check_is_not_power(3, 2), true);
      assertEquals(check_is_not_power(5, 2), true);
      assertEquals(check_is_not_power(10, 2), true);
      assertEquals(check_is_not_power(12, 3), true);
      assertEquals(check_is_not_power(14, 2), true);
      assertEquals(check_is_not_power(20, 3), true);
    },
  );

  await t.step(
    "should return false for numbers that are powers of the base",
    () => {
      assertEquals(check_is_not_power(1, 2), false);
      assertEquals(check_is_not_power(2, 2), false);
      assertEquals(check_is_not_power(4, 2), false);
      assertEquals(check_is_not_power(8, 2), false);
      assertEquals(check_is_not_power(9, 3), false);
      assertEquals(check_is_not_power(27, 3), false);
      assertEquals(check_is_not_power(16, 4), false);
    },
  );
});
