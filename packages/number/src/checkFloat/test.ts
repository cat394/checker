import { assertEquals } from "../../deps.ts";
import { check_is_float, check_is_not_float } from "./main.ts";

Deno.test("check_is_float", async (t) => {
  await t.step("should return true for float numbers", () => {
    assertEquals(check_is_float(3.14), true);
    assertEquals(check_is_float(-2.71), true);
  });

  await t.step("should return false for integers", () => {
    assertEquals(check_is_float(1), false);
    assertEquals(check_is_float(0), false);
    assertEquals(check_is_float(-1), false);
  });
});

Deno.test("check_is_not_float", async (t) => {
  await t.step("should return true for non-float numbers (integers)", () => {
    assertEquals(check_is_not_float(1), true);
    assertEquals(check_is_not_float(0), true);
    assertEquals(check_is_not_float(-1), true);
  });

  await t.step("should return false for float numbers", () => {
    assertEquals(check_is_not_float(3.14), false);
    assertEquals(check_is_not_float(-2.71), false);
  });
});
