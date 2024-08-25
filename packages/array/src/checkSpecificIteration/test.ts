import { assertEquals } from "../../deps.ts";
import {
  checkIsNotSpecificIteration,
  checkIsSpecificIteration,
} from "./main.ts";

Deno.test("checkIsSpecificIteration", async (t) => {
  await t.step("should return true when index matches targetIndex", () => {
    assertEquals(checkIsSpecificIteration(2, 2), true);
    assertEquals(checkIsSpecificIteration(0, 0), true);
    assertEquals(checkIsSpecificIteration(5, 5), true);
  });

  await t.step(
    "should return false when index does not match targetIndex",
    () => {
      assertEquals(checkIsSpecificIteration(1, 2), false);
      assertEquals(checkIsSpecificIteration(3, 2), false);
      assertEquals(checkIsSpecificIteration(4, 0), false);
    },
  );
});

Deno.test("checkIsNotSpecificIteration", async (t) => {
  await t.step(
    "should return true when index does not match targetIndex",
    () => {
      assertEquals(checkIsNotSpecificIteration(1, 2), true);
      assertEquals(checkIsNotSpecificIteration(3, 2), true);
      assertEquals(checkIsNotSpecificIteration(4, 0), true);
    },
  );

  await t.step("should return false when index matches targetIndex", () => {
    assertEquals(checkIsNotSpecificIteration(2, 2), false);
    assertEquals(checkIsNotSpecificIteration(0, 0), false);
    assertEquals(checkIsNotSpecificIteration(5, 5), false);
  });
});
