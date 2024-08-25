import { assertEquals } from "../../deps.ts";
import { checkIsNotPerfectSquare, checkIsPerfectSquare } from "./main.ts";

Deno.test("checkIsPerfectSquare", async (t) => {
  await t.step("should return true for perfect squares", () => {
    assertEquals(checkIsPerfectSquare(1), true);
    assertEquals(checkIsPerfectSquare(4), true);
    assertEquals(checkIsPerfectSquare(9), true);
    assertEquals(checkIsPerfectSquare(16), true);
    assertEquals(checkIsPerfectSquare(25), true);
    assertEquals(checkIsPerfectSquare(36), true);
    assertEquals(checkIsPerfectSquare(49), true);
  });

  await t.step("should return false for non-perfect squares", () => {
    assertEquals(checkIsPerfectSquare(2), false);
    assertEquals(checkIsPerfectSquare(3), false);
    assertEquals(checkIsPerfectSquare(5), false);
    assertEquals(checkIsPerfectSquare(10), false);
    assertEquals(checkIsPerfectSquare(15), false);
    assertEquals(checkIsPerfectSquare(50), false);
    assertEquals(checkIsPerfectSquare(99), false);
  });
});

Deno.test("checkIsNotPerfectSquare", async (t) => {
  await t.step("should return true for non-perfect squares", () => {
    assertEquals(checkIsNotPerfectSquare(2), true);
    assertEquals(checkIsNotPerfectSquare(3), true);
    assertEquals(checkIsNotPerfectSquare(5), true);
    assertEquals(checkIsNotPerfectSquare(10), true);
    assertEquals(checkIsNotPerfectSquare(15), true);
    assertEquals(checkIsNotPerfectSquare(50), true);
    assertEquals(checkIsNotPerfectSquare(99), true);
  });

  await t.step("should return false for perfect squares", () => {
    assertEquals(checkIsNotPerfectSquare(1), false);
    assertEquals(checkIsNotPerfectSquare(4), false);
    assertEquals(checkIsNotPerfectSquare(9), false);
    assertEquals(checkIsNotPerfectSquare(16), false);
    assertEquals(checkIsNotPerfectSquare(25), false);
    assertEquals(checkIsNotPerfectSquare(36), false);
    assertEquals(checkIsNotPerfectSquare(49), false);
  });
});
