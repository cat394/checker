import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_instace, check_is_not_instance } from "./main.ts";

Deno.test("check_is_instace", async (t) => {
  await t.step("should return true for valid instances", () => {
    class MyClass {}
    const instance = new MyClass();
    assertEquals(check_is_instace(instance, MyClass), true);
  });

  await t.step("should return false for invalid instances", () => {
    class MyClass {}
    const instance = new MyClass();
    class AnotherClass {}
    assertEquals(check_is_instace(instance, AnotherClass), false);
  });

  await t.step("should return true for instances of built-in types", () => {
    const date = new Date();
    assertEquals(check_is_instace(date, Date), true); // Date instance
    const array: unknown[] = [];
    assertEquals(check_is_instace(array, Array), true); // Array instance
  });

  await t.step("should narrow class type", () => {
    class MyClass1 {}
    // deno-lint-ignore no-unused-vars
    class MyClass2 {}
    type Value = MyClass1 | MyClass2;
    const value = {} as Value;
    if (check_is_instace(value, MyClass1)) {
      assertType<IsExact<typeof value, MyClass1>>(true);
    }
  });
});

Deno.test("check_is_not_instance", async (t) => {
  await t.step("should return true for non-instances", () => {
    class MyClass {}
    const instance = new MyClass();
    class AnotherClass {}
    assertEquals(check_is_not_instance(instance, AnotherClass), true);
  });

  await t.step("should return false for valid instances", () => {
    class MyClass {}
    const instance = new MyClass();
    assertEquals(check_is_not_instance(instance, MyClass), false);
  });

  await t.step("should return false for instances of built-in types", () => {
    const date = new Date();
    assertEquals(check_is_not_instance(date, Date), false); // Date instance
    const array: unknown[] = [];
    assertEquals(check_is_not_instance(array, Array), false); // Array instance
  });

  await t.step("should exclude class type", () => {
    class MyClass1 {}
    // deno-lint-ignore no-unused-vars
    class MyClass2 {}
    type Value = MyClass1 | MyClass2;
    const value = {} as Value;
    if (check_is_not_instance(value, MyClass1)) {
      value;
      assertType<IsExact<typeof value, MyClass2>>(true);
    }
  });
});
