import { assertEquals } from "../../deps.ts";
import { checkIsIndexFound, checkIsIndexNotFound } from "./main.ts";

Deno.test("checkIsIndexFound", async (t) => {
  const str1 = "hello world";
  const str2 = "banana";

  await t.step("should return true for valid indexes (non -1)", () => {
    assertEquals(checkIsIndexFound(0), true);
    assertEquals(checkIsIndexFound(10), true);

    assertEquals(checkIsIndexFound(str1.indexOf("h")), true);
    assertEquals(checkIsIndexFound(str1.indexOf("world")), true);

    assertEquals(checkIsIndexFound(str2.lastIndexOf("a")), true);
    assertEquals(checkIsIndexFound(str2.lastIndexOf("n")), true);
  });

  await t.step("should return false for invalid indexes (-1)", () => {
    assertEquals(checkIsIndexFound(-1), false);

    assertEquals(checkIsIndexFound(str1.indexOf("z")), false);

    assertEquals(checkIsIndexFound(str2.lastIndexOf("z")), false);
  });
});

Deno.test("checkIsIndexNotFound", async (t) => {
  const str1 = "hello world";
  const str2 = "banana";

  await t.step("should return true for invalid indexes (-1)", () => {
    assertEquals(checkIsIndexNotFound(-1), true);

    assertEquals(checkIsIndexNotFound(str1.indexOf("z")), true);

    assertEquals(checkIsIndexNotFound(str2.lastIndexOf("z")), true);
  });

  await t.step("should return false for valid indexes (non -1)", () => {
    assertEquals(checkIsIndexNotFound(0), false);
    assertEquals(checkIsIndexNotFound(10), false);

    assertEquals(checkIsIndexNotFound(str1.indexOf("h")), false);
    assertEquals(checkIsIndexNotFound(str1.indexOf("world")), false);

    assertEquals(checkIsIndexNotFound(str2.lastIndexOf("a")), false);
    assertEquals(checkIsIndexNotFound(str2.lastIndexOf("n")), false);
  });
});
