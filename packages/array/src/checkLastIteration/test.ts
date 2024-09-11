import { assertEquals } from "../../deps.ts";
import {
  check_is_last_iteration,
  check_is_not_last_iteration,
} from "./main.ts";

Deno.test("check_is_last_iteration", async (t) => {
  const array = [1, 2, 3, 4, 5];

  await t.step("should return true for the last iteration", () => {
    assertEquals(check_is_last_iteration(array.length - 1, array), true);
  });

  await t.step("should return false for non-last iterations", () => {
    assertEquals(check_is_last_iteration(0, array), false);
    assertEquals(check_is_last_iteration(2, array), false);
    assertEquals(check_is_last_iteration(3, array), false);
  });
});

Deno.test("check_is_not_last_iteration", async (t) => {
  const array = [1, 2, 3, 4, 5];

  await t.step("should return true for non-last iterations", () => {
    assertEquals(check_is_not_last_iteration(0, array), true);
    assertEquals(check_is_not_last_iteration(2, array), true);
    assertEquals(check_is_not_last_iteration(3, array), true);
  });

  await t.step("should return false for the last iteration", () => {
    assertEquals(check_is_not_last_iteration(array.length - 1, array), false);
  });
});
