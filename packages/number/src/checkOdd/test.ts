import { assertEquals } from "../../deps.ts";
import { check_is_not_odd, check_is_odd } from "./main.ts";

Deno.test("check_is_odd", async (t) => {
	await t.step("should return true for odd numbers", () => {
		assertEquals(check_is_odd(1), true);
		assertEquals(check_is_odd(3), true);
		assertEquals(check_is_odd(-1), true);
		assertEquals(check_is_odd(101), true);
	});

	await t.step("should return false for even numbers", () => {
		assertEquals(check_is_odd(2), false);
		assertEquals(check_is_odd(4), false);
		assertEquals(check_is_odd(-2), false);
		assertEquals(check_is_odd(100), false);
	});

	await t.step("should return false for non-integer numbers", () => {
		assertEquals(check_is_odd(1.5), false);
		assertEquals(check_is_odd(2.5), false);
		assertEquals(check_is_odd(-3.5), false);
	});
});

Deno.test("check_is_not_odd", async (t) => {
	await t.step("should return true for even numbers", () => {
		assertEquals(check_is_not_odd(2), true);
		assertEquals(check_is_not_odd(4), true);
		assertEquals(check_is_not_odd(-2), true);
		assertEquals(check_is_not_odd(100), true);
	});

	await t.step("should return false for odd numbers", () => {
		assertEquals(check_is_not_odd(1), false);
		assertEquals(check_is_not_odd(3), false);
		assertEquals(check_is_not_odd(-1), false);
		assertEquals(check_is_not_odd(101), false);
	});

	await t.step("should return true for non-integer numbers", () => {
		assertEquals(check_is_not_odd(1.5), true);
		assertEquals(check_is_not_odd(2.5), true);
		assertEquals(check_is_not_odd(-3.5), true);
	});
});
