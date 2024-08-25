import { assertEquals } from "../../deps.ts";
import { checkIsCubeRoot, checkIsNotCubeRoot } from "./main.ts";

Deno.test("checkIsCubeRootOf", async (t) => {
  await t.step(
    "should return true if the number is the cube root of the target",
    () => {
      assertEquals(checkIsCubeRoot(3, 27), true); // 3 is the cube root of 27
      assertEquals(checkIsCubeRoot(2, 8), true); // 2 is the cube root of 8
      assertEquals(checkIsCubeRoot(-2, -8), true); // -2 is the cube root of -8
      assertEquals(checkIsCubeRoot(0, 0), true); // 0 is the cube root of 0
      assertEquals(checkIsCubeRoot(1, 1), true); // 1 is the cube root of 1
    },
  );

  await t.step(
    "should return false if the number is not the cube root of the target",
    () => {
      assertEquals(checkIsCubeRoot(4, 27), false); // 4 is not the cube root of 27
      assertEquals(checkIsCubeRoot(2, 9), false); // 2 is not the cube root of 9
      assertEquals(checkIsCubeRoot(-3, -8), false); // -3 is not the cube root of -8
      assertEquals(checkIsCubeRoot(1, 0), false); // 1 is not the cube root of 0
      assertEquals(checkIsCubeRoot(0, 1), false); // 0 is not the cube root of 1
    },
  );
});

Deno.test("checkIsNotCubeRootOf", async (t) => {
  await t.step(
    "should return true if the number is not the cube root of the target",
    () => {
      assertEquals(checkIsNotCubeRoot(4, 27), true); // 4 is not the cube root of 27
      assertEquals(checkIsNotCubeRoot(2, 9), true); // 2 is not the cube root of 9
      assertEquals(checkIsNotCubeRoot(-3, -8), true); // -3 is not the cube root of -8
      assertEquals(checkIsNotCubeRoot(1, 0), true); // 1 is not the cube root of 0
      assertEquals(checkIsNotCubeRoot(0, 1), true); // 0 is not the cube root of 1
    },
  );

  await t.step(
    "should return false if the number is the cube root of the target",
    () => {
      assertEquals(checkIsNotCubeRoot(3, 27), false); // 3 is the cube root of 27
      assertEquals(checkIsNotCubeRoot(2, 8), false); // 2 is the cube root of 8
      assertEquals(checkIsNotCubeRoot(-2, -8), false); // -2 is the cube root of -8
      assertEquals(checkIsNotCubeRoot(0, 0), false); // 0 is the cube root of 0
      assertEquals(checkIsNotCubeRoot(1, 1), false); // 1 is the cube root of 1
    },
  );
});
