import { assertEquals } from "../../deps.ts";
import { checkIsNotZero, checkIsZero } from "./main.ts";

Deno.test("checkIsZero", async (t) => {
  await t.step("should return true for zero", () => {
    assertEquals(checkIsZero(0), true);
  });

  await t.step("should return false for non-zero numbers", () => {
    assertEquals(checkIsZero(1), false);
    assertEquals(checkIsZero(-1), false);
    assertEquals(checkIsZero(3.14), false);
  });
});

Deno.test("checkIsNotZero", async (t) => {
  await t.step("should return true for non-zero numbers", () => {
    assertEquals(checkIsNotZero(1), true);
    assertEquals(checkIsNotZero(-1), true);
    assertEquals(checkIsNotZero(3.14), true);
  });

  await t.step("should return false for zero", () => {
    assertEquals(checkIsNotZero(0), false);
  });
});
