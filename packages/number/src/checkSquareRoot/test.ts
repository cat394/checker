import { assertEquals } from "../../deps.ts";
import { checkIsNotSquareRoot, checkIsSquareRoot } from "./main.ts";

Deno.test("checkIsSquareRootOf", async (t) => {
  await t.step(
    "should return true if the number is the square root of the target",
    () => {
      assertEquals(checkIsSquareRoot(2, 4), true);
      assertEquals(checkIsSquareRoot(3, 9), true);
      assertEquals(checkIsSquareRoot(5, 25), true);
      assertEquals(checkIsSquareRoot(0, 0), true);
      assertEquals(checkIsSquareRoot(1, 1), true);
      assertEquals(checkIsSquareRoot(10, 100), true);
    },
  );

  await t.step(
    "should return false if the number is not the square root of the target",
    () => {
      // assertEquals(checkIsSquareRootOf(2, 5), false);
      // assertEquals(checkIsSquareRootOf(3, 8), false);
      // assertEquals(checkIsSquareRootOf(4, 20), false);
      // assertEquals(checkIsSquareRootOf(7, 50), false);
      // assertEquals(checkIsSquareRootOf(10, 99), false); // Incorrect square root
    },
  );
});

Deno.test("checkIsNotSquareRootOf", async (t) => {
  await t.step(
    "should return true if the number is not the square root of the target",
    () => {
      assertEquals(checkIsNotSquareRoot(2, 5), true);
      assertEquals(checkIsNotSquareRoot(3, 8), true);
      assertEquals(checkIsNotSquareRoot(4, 20), true);
      assertEquals(checkIsNotSquareRoot(7, 50), true);
      assertEquals(checkIsNotSquareRoot(10, 99), true); // Incorrect square root
    },
  );

  await t.step(
    "should return false if the number is the square root of the target",
    () => {
      assertEquals(checkIsNotSquareRoot(2, 4), false);
      assertEquals(checkIsNotSquareRoot(3, 9), false);
      assertEquals(checkIsNotSquareRoot(5, 25), false);
      assertEquals(checkIsNotSquareRoot(0, 0), false);
      assertEquals(checkIsNotSquareRoot(1, 1), false);
      assertEquals(checkIsNotSquareRoot(10, 100), false);
    },
  );
});
