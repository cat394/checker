import { assertEquals } from "../../deps.ts";
import { checkIsInstance, checkIsNotInstance } from "./main.ts";

Deno.test("checkIsInstanceOf", async (t) => {
  await t.step("should return true for valid instances", () => {
    class MyClass {}
    const instance = new MyClass();
    assertEquals(checkIsInstance(instance, MyClass), true);
  });

  await t.step("should return false for invalid instances", () => {
    class MyClass {}
    const instance = new MyClass();
    class AnotherClass {}
    assertEquals(checkIsInstance(instance, AnotherClass), false);
  });

  await t.step("should return true for instances of built-in types", () => {
    const date = new Date();
    assertEquals(checkIsInstance(date, Date), true); // Date instance
    const array: unknown[] = [];
    assertEquals(checkIsInstance(array, Array), true); // Array instance
  });
});

Deno.test("checkIsNotInstanceOf", async (t) => {
  await t.step("should return true for non-instances", () => {
    class MyClass {}
    const instance = new MyClass();
    class AnotherClass {}
    assertEquals(checkIsNotInstance(instance, AnotherClass), true);
  });

  await t.step("should return false for valid instances", () => {
    class MyClass {}
    const instance = new MyClass();
    assertEquals(checkIsNotInstance(instance, MyClass), false);
  });

  await t.step("should return false for instances of built-in types", () => {
    const date = new Date();
    assertEquals(checkIsNotInstance(date, Date), false); // Date instance
    const array: unknown[] = [];
    assertEquals(checkIsNotInstance(array, Array), false); // Array instance
  });
});
