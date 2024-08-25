import { assertEquals } from "../../deps.ts";
import { checkIsFloat, checkIsNotFloat } from "./main.ts";

Deno.test("checkIsFloat", async (t) => {
  await t.step("should return true for float numbers", () => {
    assertEquals(checkIsFloat(3.14), true);
    assertEquals(checkIsFloat(-2.71), true);
  });

  await t.step("should return false for integers", () => {
    assertEquals(checkIsFloat(1), false);
    assertEquals(checkIsFloat(0), false);
    assertEquals(checkIsFloat(-1), false);
  });
});

Deno.test("checkIsNotFloat", async (t) => {
  await t.step("should return true for non-float numbers (integers)", () => {
    assertEquals(checkIsNotFloat(1), true);
    assertEquals(checkIsNotFloat(0), true);
    assertEquals(checkIsNotFloat(-1), true);
  });

  await t.step("should return false for float numbers", () => {
    assertEquals(checkIsNotFloat(3.14), false);
    assertEquals(checkIsNotFloat(-2.71), false);
  });
});
