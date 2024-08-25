import { assertEquals } from "../../deps.ts";
import {
  checkIsGreaterThanOrEqual,
  checkIsNotGreaterThanOrEqual,
} from "./main.ts";

Deno.test("checkIsGreaterThanOrEqual", async (t) => {
  await t.step("should return true when num is greater than threshold", () => {
    assertEquals(checkIsGreaterThanOrEqual(10, 5), true);
    assertEquals(checkIsGreaterThanOrEqual(100, 99), true);
    assertEquals(checkIsGreaterThanOrEqual(-1, -5), true);
  });

  await t.step("should return true when num is equal to threshold", () => {
    assertEquals(checkIsGreaterThanOrEqual(5, 5), true);
    assertEquals(checkIsGreaterThanOrEqual(0, 0), true);
    assertEquals(checkIsGreaterThanOrEqual(-10, -10), true);
  });

  await t.step("should return false when num is less than threshold", () => {
    assertEquals(checkIsGreaterThanOrEqual(3, 5), false);
    assertEquals(checkIsGreaterThanOrEqual(0, 10), false);
    assertEquals(checkIsGreaterThanOrEqual(-20, -10), false);
  });
});

Deno.test("checkIsNotGreaterThanOrEqual", async (t) => {
  await t.step("should return true when num is less than threshold", () => {
    assertEquals(checkIsNotGreaterThanOrEqual(3, 5), true);
    assertEquals(checkIsNotGreaterThanOrEqual(0, 10), true);
    assertEquals(checkIsNotGreaterThanOrEqual(-20, -10), true);
  });

  await t.step(
    "should return false when num is greater than or equal to threshold",
    () => {
      assertEquals(checkIsNotGreaterThanOrEqual(10, 5), false);
      assertEquals(checkIsNotGreaterThanOrEqual(0, 0), false);
      assertEquals(checkIsNotGreaterThanOrEqual(-1, -5), false);
    },
  );
});
