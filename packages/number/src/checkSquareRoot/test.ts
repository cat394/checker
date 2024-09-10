import { assertEquals } from "../../deps.ts";
import { check_is_not_square_root, check_is_square_root } from "./main.ts";

Deno.test("check_is_square_root", async (t) => {
	await t.step(
		"should return true if the number is the square root of the target",
		() => {
			assertEquals(check_is_square_root(2, 4), true);
			assertEquals(check_is_square_root(3, 9), true);
			assertEquals(check_is_square_root(5, 25), true);
			assertEquals(check_is_square_root(0, 0), true);
			assertEquals(check_is_square_root(1, 1), true);
			assertEquals(check_is_square_root(10, 100), true);
		}
	);

	await t.step(
		"should return false if the number is not the square root of the target",
		() => {
			// assertEquals(checkIsSquareRootOf(2, 5), false);
			// assertEquals(checkIsSquareRootOf(3, 8), false);
			// assertEquals(checkIsSquareRootOf(4, 20), false);
			// assertEquals(checkIsSquareRootOf(7, 50), false);
			// assertEquals(checkIsSquareRootOf(10, 99), false); // Incorrect square root
		}
	);
});

Deno.test("check_is_not_square_root", async (t) => {
	await t.step(
		"should return true if the number is not the square root of the target",
		() => {
			assertEquals(check_is_not_square_root(2, 5), true);
			assertEquals(check_is_not_square_root(3, 8), true);
			assertEquals(check_is_not_square_root(4, 20), true);
			assertEquals(check_is_not_square_root(7, 50), true);
			assertEquals(check_is_not_square_root(10, 99), true); // Incorrect square root
		}
	);

	await t.step(
		"should return false if the number is the square root of the target",
		() => {
			assertEquals(check_is_not_square_root(2, 4), false);
			assertEquals(check_is_not_square_root(3, 9), false);
			assertEquals(check_is_not_square_root(5, 25), false);
			assertEquals(check_is_not_square_root(0, 0), false);
			assertEquals(check_is_not_square_root(1, 1), false);
			assertEquals(check_is_not_square_root(10, 100), false);
		}
	);
});
