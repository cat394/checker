import { assertEquals } from "../../deps.ts";
import {
  checkIsGeometricSequence,
  checkIsNotGeometricSequence,
} from "./main.ts";

Deno.test("checkIsGeometricSequence", async (t) => {
  await t.step("should return true for valid geometric sequences", () => {
    assertEquals(checkIsGeometricSequence([2, 4, 8, 16], 2), true); // ratio of 2
    assertEquals(checkIsGeometricSequence([3, 9, 27], 3), true); // ratio of 3
    assertEquals(checkIsGeometricSequence([5, 25, 125], 5), true); // ratio of 5
    assertEquals(checkIsGeometricSequence([1, 0.1, 0.01, 0.001], 0.1), true); // ratio of 0.1
  });

  await t.step("should return false for invalid geometric sequences", () => {
    assertEquals(checkIsGeometricSequence([2, 4, 9, 16], 2), false); // 9 does not fit the ratio of 2
    assertEquals(checkIsGeometricSequence([3, 9, 28], 3), false); // 28 does not fit the ratio of 3
    assertEquals(checkIsGeometricSequence([5, 20, 125], 5), false); // 20 does not fit the ratio of 5
    assertEquals(checkIsGeometricSequence([1, 0.2, 0.01, 0.001], 0.1), false); // 0.2 does not fit the ratio of 0.1
  });

  await t.step(
    "should return false for sequences with less than 2 numbers",
    () => {
      assertEquals(checkIsGeometricSequence([1], 2), false); // single element
      assertEquals(checkIsGeometricSequence([], 2), false); // empty array
    },
  );
});

Deno.test("checkIsNotGeometricSequence", async (t) => {
  await t.step("should return true for invalid geometric sequences", () => {
    assertEquals(checkIsNotGeometricSequence([2, 4, 9, 16], 2), true); // 9 does not fit the ratio of 2
    assertEquals(checkIsNotGeometricSequence([3, 9, 28], 3), true); // 28 does not fit the ratio of 3
    assertEquals(checkIsNotGeometricSequence([5, 20, 125], 5), true); // 20 does not fit the ratio of 5
    assertEquals(checkIsNotGeometricSequence([1, 0.2, 0.01, 0.001], 0.1), true); // 0.2 does not fit the ratio of 0.1
    assertEquals(checkIsNotGeometricSequence([1], 2), true); // single element
    assertEquals(checkIsNotGeometricSequence([], 2), true); // empty array
  });

  await t.step("should return false for valid geometric sequences", () => {
    assertEquals(checkIsNotGeometricSequence([2, 4, 8, 16], 2), false); // ratio of 2
    assertEquals(checkIsNotGeometricSequence([3, 9, 27], 3), false); // ratio of 3
    assertEquals(checkIsNotGeometricSequence([5, 25, 125], 5), false); // ratio of 5
    assertEquals(
      checkIsNotGeometricSequence([1, 0.1, 0.01, 0.001], 0.1),
      false,
    ); // ratio of 0.1
  });
});
