import { assertEquals } from "../../deps.ts";
import { check_is_not_zero, check_is_zero } from "./main.ts";

Deno.test("checkIsZero", async (t) => {
  await t.step("should return true for zero", () => {
    assertEquals(check_is_zero(0), true);
  });

  await t.step("should return false for non-zero numbers", () => {
    assertEquals(check_is_zero(1), false);
    assertEquals(check_is_zero(-1), false);
    assertEquals(check_is_zero(3.14), false);
  });
});

Deno.test("checkIsNotZero", async (t) => {
  await t.step("should return true for non-zero numbers", () => {
    assertEquals(check_is_not_zero(1), true);
    assertEquals(check_is_not_zero(-1), true);
    assertEquals(check_is_not_zero(3.14), true);
  });

  await t.step("should return false for zero", () => {
    assertEquals(check_is_not_zero(0), false);
  });
});
