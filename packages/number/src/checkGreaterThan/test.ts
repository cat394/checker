import { assertEquals } from "../../deps.ts";
import { check_is_greater_than, check_is_not_greater_than } from "./main.ts";

Deno.test("check_is_greater_than", async (t) => {
  await t.step("should return true when num is greater than threshold", () => {
    assertEquals(check_is_greater_than(10, 5), true);
    assertEquals(check_is_greater_than(0, -1), true);
    assertEquals(check_is_greater_than(100, 99), true);
  });

  await t.step(
    "should return false when num is not greater than threshold",
    () => {
      assertEquals(check_is_greater_than(5, 10), false);
      assertEquals(check_is_greater_than(0, 0), false); // equal values
      assertEquals(check_is_greater_than(-1, 0), false);
      assertEquals(check_is_greater_than(-10, -5), false);
    },
  );
});

Deno.test("check_is_not_greater_than", async (t) => {
  await t.step(
    "should return true when num is not greater than threshold",
    () => {
      assertEquals(check_is_not_greater_than(5, 10), true);
      assertEquals(check_is_not_greater_than(0, 0), true); // equal values
      assertEquals(check_is_not_greater_than(-1, 0), true);
      assertEquals(check_is_not_greater_than(-10, -5), true);
    },
  );

  await t.step("should return false when num is greater than threshold", () => {
    assertEquals(check_is_not_greater_than(10, 5), false);
    assertEquals(check_is_not_greater_than(0, -1), false);
    assertEquals(check_is_not_greater_than(100, 99), false);
  });
});
