import { assertEquals } from "../../deps.ts";
import { checkIsFirstIteration, checkIsNotFirstIteration } from "./main.ts";

Deno.test("checkIsFirstIteration", async (t) => {
  await t.step("should return true for the first iteration", () => {
    assertEquals(checkIsFirstIteration(0), true);
  });

  await t.step("should return false for non-first iterations", () => {
    assertEquals(checkIsFirstIteration(1), false);
    assertEquals(checkIsFirstIteration(10), false);
  });
});

Deno.test("checkIsNotFirstIteration", async (t) => {
  await t.step("should return true for non-first iterations", () => {
    assertEquals(checkIsNotFirstIteration(1), true);
    assertEquals(checkIsNotFirstIteration(10), true);
  });

  await t.step("should return false for the first iteration", () => {
    assertEquals(checkIsNotFirstIteration(0), false);
  });
});
