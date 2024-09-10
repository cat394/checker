import { assertEquals } from "../../deps.ts";
import { check_is_cube_root, check_is_not_cube_root } from "./main.ts";

Deno.test("checkIsCubeRootOf", async (t) => {
	await t.step(
		"should return true if the number is the cube root of the target",
		() => {
			assertEquals(check_is_cube_root(3, 27), true); // 3 is the cube root of 27
			assertEquals(check_is_cube_root(2, 8), true); // 2 is the cube root of 8
			assertEquals(check_is_cube_root(-2, -8), true); // -2 is the cube root of -8
			assertEquals(check_is_cube_root(0, 0), true); // 0 is the cube root of 0
			assertEquals(check_is_cube_root(1, 1), true); // 1 is the cube root of 1
		}
	);

	await t.step(
		"should return false if the number is not the cube root of the target",
		() => {
			assertEquals(check_is_cube_root(4, 27), false); // 4 is not the cube root of 27
			assertEquals(check_is_cube_root(2, 9), false); // 2 is not the cube root of 9
			assertEquals(check_is_cube_root(-3, -8), false); // -3 is not the cube root of -8
			assertEquals(check_is_cube_root(1, 0), false); // 1 is not the cube root of 0
			assertEquals(check_is_cube_root(0, 1), false); // 0 is not the cube root of 1
		}
	);
});

Deno.test("checkIsNotCubeRootOf", async (t) => {
	await t.step(
		"should return true if the number is not the cube root of the target",
		() => {
			assertEquals(check_is_not_cube_root(4, 27), true); // 4 is not the cube root of 27
			assertEquals(check_is_not_cube_root(2, 9), true); // 2 is not the cube root of 9
			assertEquals(check_is_not_cube_root(-3, -8), true); // -3 is not the cube root of -8
			assertEquals(check_is_not_cube_root(1, 0), true); // 1 is not the cube root of 0
			assertEquals(check_is_not_cube_root(0, 1), true); // 0 is not the cube root of 1
		}
	);

	await t.step(
		"should return false if the number is the cube root of the target",
		() => {
			assertEquals(check_is_not_cube_root(3, 27), false); // 3 is the cube root of 27
			assertEquals(check_is_not_cube_root(2, 8), false); // 2 is the cube root of 8
			assertEquals(check_is_not_cube_root(-2, -8), false); // -2 is the cube root of -8
			assertEquals(check_is_not_cube_root(0, 0), false); // 0 is the cube root of 0
			assertEquals(check_is_not_cube_root(1, 1), false); // 1 is the cube root of 1
		}
	);
});
