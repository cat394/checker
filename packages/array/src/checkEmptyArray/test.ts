import { assertEquals } from "../../deps.ts";
import { checkIsEmptyArray, checkIsNotEmptyArray } from "./main.ts";

Deno.test("checkIsEmptyArray", async (t) => {
  await t.step("should return true for empty arrays", () => {
    assertEquals(checkIsEmptyArray([]), true);
  });

  await t.step("should return false for non-empty arrays", () => {
    assertEquals(checkIsEmptyArray([1, 2, 3]), false);
    assertEquals(checkIsEmptyArray(["a", "b", "c"]), false);
  });
});

Deno.test("checkIsNotEmptyArray", async (t) => {
  await t.step("should return true for non-empty arrays", () => {
    assertEquals(checkIsNotEmptyArray([1, 2, 3]), true);
    assertEquals(checkIsNotEmptyArray(["a", "b", "c"]), true);
  });

  await t.step("should return false for empty arrays", () => {
    assertEquals(checkIsNotEmptyArray([]), false);
  });
});
