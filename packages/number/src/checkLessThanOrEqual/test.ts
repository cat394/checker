import { assertEquals } from "../../deps.ts";
import { checkIsLessThanOrEqual, checkIsNotLessThanOrEqual } from "./main.ts";

Deno.test("checkIsLessThanOrEqual", async (t) => {
  await t.step(
    "should return true when num is less than or equal to threshold",
    () => {
      assertEquals(checkIsLessThanOrEqual(1, 2), true);
      assertEquals(checkIsLessThanOrEqual(2, 2), true); // equal values
      assertEquals(checkIsLessThanOrEqual(-1, 0), true);
      assertEquals(checkIsLessThanOrEqual(0, 0), true); // equal values
      assertEquals(checkIsLessThanOrEqual(-100, -50), true);
    },
  );

  await t.step("should return false when num is greater than threshold", () => {
    assertEquals(checkIsLessThanOrEqual(3, 2), false);
    assertEquals(checkIsLessThanOrEqual(100, 50), false);
    assertEquals(checkIsLessThanOrEqual(0, -1), false);
  });
});

Deno.test("checkIsNotLessThanOrEqual", async (t) => {
  await t.step("should return true when num is greater than threshold", () => {
    assertEquals(checkIsNotLessThanOrEqual(3, 2), true);
    assertEquals(checkIsNotLessThanOrEqual(100, 50), true);
    assertEquals(checkIsNotLessThanOrEqual(0, -1), true);
  });

  await t.step(
    "should return false when num is less than or equal to threshold",
    () => {
      assertEquals(checkIsNotLessThanOrEqual(1, 2), false);
      assertEquals(checkIsNotLessThanOrEqual(2, 2), false); // equal values
      assertEquals(checkIsNotLessThanOrEqual(-1, 0), false);
      assertEquals(checkIsNotLessThanOrEqual(0, 0), false); // equal values
      assertEquals(checkIsNotLessThanOrEqual(-100, -50), false);
    },
  );
});
