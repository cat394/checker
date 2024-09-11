import { check_is_enter_key, check_is_not_enter_key } from "./main.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("check_is_enter_key", async (t) => {
  await t.step("should return true for 'Enter'", () => {
    assertEquals(check_is_enter_key("Enter"), true);
  });

  await t.step("should return false for other strings", () => {
    assertEquals(check_is_enter_key("Space"), false);
    assertEquals(check_is_enter_key("enter"), false);
    assertEquals(check_is_enter_key("EnterKey"), false);
  });
});

Deno.test("check_is_not_enter_key", async (t) => {
  await t.step("should return true for strings other than 'Enter'", () => {
    assertEquals(check_is_not_enter_key("Space"), true);
    assertEquals(check_is_not_enter_key("enter"), true);
    assertEquals(check_is_not_enter_key("EnterKey"), true);
  });

  await t.step("should return false for 'Enter'", () => {
    assertEquals(check_is_not_enter_key("Enter"), false);
  });
});
