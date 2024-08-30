import { checkIsEnterKey, checkIsNotEnterKey } from "./main.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("checkIsEnterKey", async (t) => {
  await t.step("should return true for 'Enter'", () => {
    assertEquals(checkIsEnterKey("Enter"), true);
  });

  await t.step("should return false for other strings", () => {
    assertEquals(checkIsEnterKey("Space"), false);
    assertEquals(checkIsEnterKey("enter"), false);
    assertEquals(checkIsEnterKey("EnterKey"), false);
  });
});

Deno.test("checkIsNotEnterKey", async (t) => {
  await t.step("should return true for strings other than 'Enter'", () => {
    assertEquals(checkIsNotEnterKey("Space"), true);
    assertEquals(checkIsNotEnterKey("enter"), true);
    assertEquals(checkIsNotEnterKey("EnterKey"), true);
  });

  await t.step("should return false for 'Enter'", () => {
    assertEquals(checkIsNotEnterKey("Enter"), false);
  });
});
