import { assertEquals } from "../../deps.ts";
import { checkIsFibonacci, checkIsNotFibonacci } from "./main.ts";

Deno.test("checkIsFibonacci", async (t) => {
  await t.step("should return true for Fibonacci numbers", () => {
    assertEquals(checkIsFibonacci(0), true);
    assertEquals(checkIsFibonacci(1), true);
    assertEquals(checkIsFibonacci(2), true);
    assertEquals(checkIsFibonacci(3), true);
    assertEquals(checkIsFibonacci(5), true);
    assertEquals(checkIsFibonacci(8), true);
    assertEquals(checkIsFibonacci(13), true);
    assertEquals(checkIsFibonacci(21), true);
    assertEquals(checkIsFibonacci(34), true);
    assertEquals(checkIsFibonacci(55), true);
  });

  await t.step("should return false for non-Fibonacci numbers", () => {
    assertEquals(checkIsFibonacci(4), false);
    assertEquals(checkIsFibonacci(6), false);
    assertEquals(checkIsFibonacci(7), false);
    assertEquals(checkIsFibonacci(9), false);
    assertEquals(checkIsFibonacci(10), false);
    assertEquals(checkIsFibonacci(14), false);
    assertEquals(checkIsFibonacci(22), false);
  });
});

Deno.test("checkIsNotFibonacci", async (t) => {
  await t.step("should return true for non-Fibonacci numbers", () => {
    assertEquals(checkIsNotFibonacci(4), true);
    assertEquals(checkIsNotFibonacci(6), true);
    assertEquals(checkIsNotFibonacci(7), true);
    assertEquals(checkIsNotFibonacci(9), true);
    assertEquals(checkIsNotFibonacci(10), true);
    assertEquals(checkIsNotFibonacci(14), true);
    assertEquals(checkIsNotFibonacci(22), true);
  });

  await t.step("should return false for Fibonacci numbers", () => {
    assertEquals(checkIsNotFibonacci(0), false);
    assertEquals(checkIsNotFibonacci(1), false);
    assertEquals(checkIsNotFibonacci(2), false);
    assertEquals(checkIsNotFibonacci(3), false);
    assertEquals(checkIsNotFibonacci(5), false);
    assertEquals(checkIsNotFibonacci(8), false);
    assertEquals(checkIsNotFibonacci(13), false);
    assertEquals(checkIsNotFibonacci(21), false);
    assertEquals(checkIsNotFibonacci(34), false);
    assertEquals(checkIsNotFibonacci(55), false);
  });
});
