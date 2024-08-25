import { assertEquals } from "../../deps.ts";
import { checkIsLessThan, checkIsNotLessThan } from "./main.ts";

Deno.test("checkIsLessThan", async (t) => {
  await t.step("should return true when num is less than threshold", () => {
    assertEquals(checkIsLessThan(1, 5), true);
    assertEquals(checkIsLessThan(-1, 0), true);
    assertEquals(checkIsLessThan(3.14, 10), true);
    assertEquals(checkIsLessThan(-10, -5), true);
  });

  await t.step(
    "should return false when num is not less than threshold",
    () => {
      assertEquals(checkIsLessThan(5, 1), false);
      assertEquals(checkIsLessThan(0, 0), false); // equal values
      assertEquals(checkIsLessThan(10, 3.14), false);
      assertEquals(checkIsLessThan(-5, -10), false);
    },
  );
});

Deno.test("checkIsNotLessThan", async (t) => {
  await t.step("should return true when num is not less than threshold", () => {
    assertEquals(checkIsNotLessThan(5, 1), true);
    assertEquals(checkIsNotLessThan(0, 0), true); // equal values
    assertEquals(checkIsNotLessThan(10, 3.14), true);
    assertEquals(checkIsNotLessThan(-5, -10), true);
  });

  await t.step("should return false when num is less than threshold", () => {
    assertEquals(checkIsNotLessThan(1, 5), false);
    assertEquals(checkIsNotLessThan(-1, 0), false);
    assertEquals(checkIsNotLessThan(3.14, 10), false);
    assertEquals(checkIsNotLessThan(-10, -5), false);
  });
});
