import { assertEquals } from "../../deps.ts";
import {
	check_is_not_perfect_square,
	check_is_perfect_square,
} from "./main.ts";

Deno.test("check_is_perfect_square", async (t) => {
	await t.step("should return true for perfect squares", () => {
		assertEquals(check_is_perfect_square(1), true);
		assertEquals(check_is_perfect_square(4), true);
		assertEquals(check_is_perfect_square(9), true);
		assertEquals(check_is_perfect_square(16), true);
		assertEquals(check_is_perfect_square(25), true);
		assertEquals(check_is_perfect_square(36), true);
		assertEquals(check_is_perfect_square(49), true);
	});

	await t.step("should return false for non-perfect squares", () => {
		assertEquals(check_is_perfect_square(2), false);
		assertEquals(check_is_perfect_square(3), false);
		assertEquals(check_is_perfect_square(5), false);
		assertEquals(check_is_perfect_square(10), false);
		assertEquals(check_is_perfect_square(15), false);
		assertEquals(check_is_perfect_square(50), false);
		assertEquals(check_is_perfect_square(99), false);
	});
});

Deno.test("check_is_not_perfect_square", async (t) => {
	await t.step("should return true for non-perfect squares", () => {
		assertEquals(check_is_not_perfect_square(2), true);
		assertEquals(check_is_not_perfect_square(3), true);
		assertEquals(check_is_not_perfect_square(5), true);
		assertEquals(check_is_not_perfect_square(10), true);
		assertEquals(check_is_not_perfect_square(15), true);
		assertEquals(check_is_not_perfect_square(50), true);
		assertEquals(check_is_not_perfect_square(99), true);
	});

	await t.step("should return false for perfect squares", () => {
		assertEquals(check_is_not_perfect_square(1), false);
		assertEquals(check_is_not_perfect_square(4), false);
		assertEquals(check_is_not_perfect_square(9), false);
		assertEquals(check_is_not_perfect_square(16), false);
		assertEquals(check_is_not_perfect_square(25), false);
		assertEquals(check_is_not_perfect_square(36), false);
		assertEquals(check_is_not_perfect_square(49), false);
	});
});
