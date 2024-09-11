import { assertEquals } from "../../deps.ts";
import { check_is_not_number, check_is_number } from "./main.ts";

Deno.test("check_is_number", async (t) => {
  await t.step("should return true for numbers", () => {
    assertEquals(check_is_number(1), true);
    assertEquals(check_is_number(0), true);
    assertEquals(check_is_number(-1), true);
    assertEquals(check_is_number(3.14), true);
  });

  await t.step("should return false for non-numbers", () => {
    assertEquals(check_is_number("1"), false);
    assertEquals(check_is_number(true), false);
    assertEquals(check_is_number(null), false);
    assertEquals(check_is_number(undefined), false);
    assertEquals(check_is_number({}), false);
  });
});

Deno.test("check_is_not_number", async (t) => {
  await t.step("should return true for non-numbers", () => {
    assertEquals(check_is_not_number("1"), true);
    assertEquals(check_is_not_number(true), true);
    assertEquals(check_is_not_number(null), true);
    assertEquals(check_is_not_number(undefined), true);
    assertEquals(check_is_not_number({}), true);
  });

  await t.step("should return false for numbers", () => {
    assertEquals(check_is_not_number(1), false);
    assertEquals(check_is_not_number(0), false);
    assertEquals(check_is_not_number(-1), false);
    assertEquals(check_is_not_number(3.14), false);
  });
});
