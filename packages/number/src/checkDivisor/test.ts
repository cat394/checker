import { assertEquals } from "../../deps.ts";
import { checkIsDivisor, checkIsNotDivisor } from "./main.ts";

Deno.test("checkIsDivisorOf", async (t) => {
  await t.step("should return true when num is a divisor of target", () => {
    assertEquals(checkIsDivisor(1, 10), true);
    assertEquals(checkIsDivisor(2, 10), true);
    assertEquals(checkIsDivisor(5, 10), true);
    assertEquals(checkIsDivisor(10, 100), true);
    assertEquals(checkIsDivisor(-2, 10), true);
  });

  await t.step(
    "should return false when num is not a divisor of target",
    () => {
      assertEquals(checkIsDivisor(3, 10), false);
      assertEquals(checkIsDivisor(7, 10), false);
      assertEquals(checkIsDivisor(11, 10), false);
      assertEquals(checkIsDivisor(4, 10), false);
      assertEquals(checkIsDivisor(-3, 10), false);
    },
  );
});

Deno.test("checkIsNotDivisorOf", async (t) => {
  await t.step("should return true when num is not a divisor of target", () => {
    assertEquals(checkIsNotDivisor(3, 10), true);
    assertEquals(checkIsNotDivisor(7, 10), true);
    assertEquals(checkIsNotDivisor(11, 10), true);
    assertEquals(checkIsNotDivisor(4, 10), true);
    assertEquals(checkIsNotDivisor(-3, 10), true);
  });

  await t.step("should return false when num is a divisor of target", () => {
    assertEquals(checkIsNotDivisor(1, 10), false);
    assertEquals(checkIsNotDivisor(2, 10), false);
    assertEquals(checkIsNotDivisor(5, 10), false);
    assertEquals(checkIsNotDivisor(10, 100), false);
    assertEquals(checkIsNotDivisor(-2, 10), false);
  });
});
