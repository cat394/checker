import { assertEquals } from "../../deps.ts";
import { checkIsLastIteration, checkIsNotLastIteration } from "./main.ts";

Deno.test("checkIsLastIteration", async (t) => {
  const array = [1, 2, 3, 4, 5];

  await t.step("should return true for the last iteration", () => {
    assertEquals(checkIsLastIteration(array.length - 1, array), true);
  });

  await t.step("should return false for non-last iterations", () => {
    assertEquals(checkIsLastIteration(0, array), false);
    assertEquals(checkIsLastIteration(2, array), false);
    assertEquals(checkIsLastIteration(3, array), false);
  });
});

Deno.test("checkIsNotLastIteration", async (t) => {
  const array = [1, 2, 3, 4, 5];

  await t.step("should return true for non-last iterations", () => {
    assertEquals(checkIsNotLastIteration(0, array), true);
    assertEquals(checkIsNotLastIteration(2, array), true);
    assertEquals(checkIsNotLastIteration(3, array), true);
  });

  await t.step("should return false for the last iteration", () => {
    assertEquals(checkIsNotLastIteration(array.length - 1, array), false);
  });
});
