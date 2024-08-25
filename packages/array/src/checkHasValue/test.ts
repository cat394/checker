import { assertEquals } from "../../deps.ts";
import { checkArrayDoesNotHaveValue, checkArrayHasValue } from "./main.ts";

Deno.test("checkHaveValueInArray", async (t) => {
  await t.step("should return true when the value is in the array", () => {
    assertEquals(checkArrayHasValue([1, 2, 3, 4], 3), true);
    assertEquals(checkArrayHasValue(["a", "b", "c"], "b"), true);
  });

  await t.step("should return false when the value is not in the array", () => {
    assertEquals(checkArrayHasValue([1, 2, 3, 4], 5), false);
    assertEquals(checkArrayHasValue(["a", "b", "c"], "d"), false);
  });
});

// Test for checkNotHaveValueInArray
Deno.test("checkNotHaveValueInArray", async (t) => {
  await t.step("should return true when the value is not in the array", () => {
    assertEquals(checkArrayDoesNotHaveValue([1, 2, 3, 4], 5), true);
    assertEquals(checkArrayDoesNotHaveValue(["a", "b", "c"], "d"), true);
  });

  await t.step("should return false when the value is in the array", () => {
    assertEquals(checkArrayDoesNotHaveValue([1, 2, 3, 4], 3), false);
    assertEquals(checkArrayDoesNotHaveValue(["a", "b", "c"], "b"), false);
  });
});
