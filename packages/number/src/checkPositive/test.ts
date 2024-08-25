import { assertEquals } from "../../deps.ts";
import { checkIsNotPositive, checkIsPositive } from "./main.ts";

Deno.test("checkIsPositive", async (t) => {
  await t.step("should return true for positive numbers", () => {
    assertEquals(checkIsPositive(1), true);
    assertEquals(checkIsPositive(3.14), true);
  });

  await t.step("should return false for non-positive numbers", () => {
    assertEquals(checkIsPositive(0), false);
    assertEquals(checkIsPositive(-1), false);
  });
});

Deno.test("checkIsNotPositive", async (t) => {
  await t.step("should return true for non-positive numbers", () => {
    assertEquals(checkIsNotPositive(0), true);
    assertEquals(checkIsNotPositive(-1), true);
  });

  await t.step("should return false for positive numbers", () => {
    assertEquals(checkIsNotPositive(1), false);
    assertEquals(checkIsNotPositive(3.14), false);
  });
});
