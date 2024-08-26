import { assertEquals, assertType, type IsExact } from "../../deps.ts";
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

  await t.step("should narrow class type", () => {
    class MyClass1 {}
    // deno-lint-ignore no-unused-vars
    class MyClass2 {}
    type Value = MyClass1 | MyClass2;
    const value = {} as Value;
    if (checkIsInstance(value, MyClass1)) {
      assertType<IsExact<typeof value, MyClass1>>(true);
    }
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

  await t.step("should exclude class type", () => {
    class MyClass1 {}
    // deno-lint-ignore no-unused-vars
    class MyClass2 {}
    type Value = MyClass1 | MyClass2;
    const value = {} as Value;
    if (checkIsNotInstance(value, MyClass1)) {
      value;
      assertType<IsExact<typeof value, MyClass2>>(true);
    }
  });
});
