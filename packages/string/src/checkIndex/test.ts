import { assertEquals } from "../../deps.ts";
import { check_is_index_found, check_is_index_not_found } from "./main.ts";

Deno.test("check_is_index_found", async (t) => {
  const str1 = "hello world";
  const str2 = "banana";

  await t.step("should return true for valid indexes (non -1)", () => {
    assertEquals(check_is_index_found(0), true);
    assertEquals(check_is_index_found(10), true);

    assertEquals(check_is_index_found(str1.indexOf("h")), true);
    assertEquals(check_is_index_found(str1.indexOf("world")), true);

    assertEquals(check_is_index_found(str2.lastIndexOf("a")), true);
    assertEquals(check_is_index_found(str2.lastIndexOf("n")), true);
  });

  await t.step("should return false for invalid indexes (-1)", () => {
    assertEquals(check_is_index_found(-1), false);

    assertEquals(check_is_index_found(str1.indexOf("z")), false);

    assertEquals(check_is_index_found(str2.lastIndexOf("z")), false);
  });
});

Deno.test("check_is_index_not_found", async (t) => {
  const str1 = "hello world";
  const str2 = "banana";

  await t.step("should return true for invalid indexes (-1)", () => {
    assertEquals(check_is_index_not_found(-1), true);

    assertEquals(check_is_index_not_found(str1.indexOf("z")), true);

    assertEquals(check_is_index_not_found(str2.lastIndexOf("z")), true);
  });

  await t.step("should return false for valid indexes (non -1)", () => {
    assertEquals(check_is_index_not_found(0), false);
    assertEquals(check_is_index_not_found(10), false);

    assertEquals(check_is_index_not_found(str1.indexOf("h")), false);
    assertEquals(check_is_index_not_found(str1.indexOf("world")), false);

    assertEquals(check_is_index_not_found(str2.lastIndexOf("a")), false);
    assertEquals(check_is_index_not_found(str2.lastIndexOf("n")), false);
  });
});
