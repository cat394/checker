import { assertEquals } from "../../deps.ts";
import {
  check_is_not_perfect_number,
  check_is_perfect_number,
} from "./main.ts";

Deno.test("check_is_perfect_number", async (t) => {
  await t.step("should return true for perfect numbers", () => {
    assertEquals(check_is_perfect_number(6), true); // 6 = 1 + 2 + 3
    assertEquals(check_is_perfect_number(28), true); // 28 = 1 + 2 + 4 + 7 + 14
    assertEquals(check_is_perfect_number(496), true); // 496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248
    assertEquals(check_is_perfect_number(8128), true); // 8128 = 1 + 2 + 4 + 8 + ... + 4064
  });

  await t.step("should return false for non-perfect numbers", () => {
    assertEquals(check_is_perfect_number(1), false); // 1 is not considered a perfect number
    assertEquals(check_is_perfect_number(5), false);
    assertEquals(check_is_perfect_number(10), false);
    assertEquals(check_is_perfect_number(12), false);
    assertEquals(check_is_perfect_number(100), false);
    assertEquals(check_is_perfect_number(500), false);
    assertEquals(check_is_perfect_number(1000), false);
  });
});

Deno.test("check_is_not_perfect_number", async (t) => {
  await t.step("should return true for non-perfect numbers", () => {
    assertEquals(check_is_not_perfect_number(1), true);
    assertEquals(check_is_not_perfect_number(5), true);
    assertEquals(check_is_not_perfect_number(10), true);
    assertEquals(check_is_not_perfect_number(12), true);
    assertEquals(check_is_not_perfect_number(100), true);
    assertEquals(check_is_not_perfect_number(500), true);
    assertEquals(check_is_not_perfect_number(1000), true);
  });

  await t.step("should return false for perfect numbers", () => {
    assertEquals(check_is_not_perfect_number(6), false);
    assertEquals(check_is_not_perfect_number(28), false);
    assertEquals(check_is_not_perfect_number(496), false);
    assertEquals(check_is_not_perfect_number(8128), false);
  });
});
