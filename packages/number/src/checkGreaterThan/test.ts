import { assertEquals } from "../../deps.ts";
import { checkIsGreaterThan, checkIsNotGreaterThan } from "./main.ts";

Deno.test("checkIsGreaterThan", async (t) => {
  await t.step("should return true when num is greater than threshold", () => {
    assertEquals(checkIsGreaterThan(10, 5), true);
    assertEquals(checkIsGreaterThan(0, -1), true);
    assertEquals(checkIsGreaterThan(100, 99), true);
  });

  await t.step(
    "should return false when num is not greater than threshold",
    () => {
      assertEquals(checkIsGreaterThan(5, 10), false);
      assertEquals(checkIsGreaterThan(0, 0), false); // equal values
      assertEquals(checkIsGreaterThan(-1, 0), false);
      assertEquals(checkIsGreaterThan(-10, -5), false);
    },
  );
});

Deno.test("checkIsNotGreaterThan", async (t) => {
  await t.step(
    "should return true when num is not greater than threshold",
    () => {
      assertEquals(checkIsNotGreaterThan(5, 10), true);
      assertEquals(checkIsNotGreaterThan(0, 0), true); // equal values
      assertEquals(checkIsNotGreaterThan(-1, 0), true);
      assertEquals(checkIsNotGreaterThan(-10, -5), true);
    },
  );

  await t.step("should return false when num is greater than threshold", () => {
    assertEquals(checkIsNotGreaterThan(10, 5), false);
    assertEquals(checkIsNotGreaterThan(0, -1), false);
    assertEquals(checkIsNotGreaterThan(100, 99), false);
  });
});
