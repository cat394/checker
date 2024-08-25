import { assertEquals } from "../../deps.ts";
import { checkIsNegative, checkIsNotNegative } from "./main.ts";

Deno.test("checkIsNegative", async (t) => {
  await t.step("should return true for negative numbers", () => {
    assertEquals(checkIsNegative(-1), true);
    assertEquals(checkIsNegative(-3.14), true);
  });

  await t.step("should return false for non-negative numbers", () => {
    assertEquals(checkIsNegative(0), false);
    assertEquals(checkIsNegative(1), false);
  });
});

Deno.test("checkIsNotNegative", async (t) => {
  await t.step("should return true for non-negative numbers", () => {
    assertEquals(checkIsNotNegative(0), true);
    assertEquals(checkIsNotNegative(1), true);
    assertEquals(checkIsNotNegative(3.14), true);
  });

  await t.step("should return false for negative numbers", () => {
    assertEquals(checkIsNotNegative(-1), false);
    assertEquals(checkIsNotNegative(-3.14), false);
  });
});
