import { assertEquals } from "../../deps.ts";
import { check_is_fibonacci, check_is_not_fibonacci } from "./main.ts";

Deno.test("check_is_fibonacci", async (t) => {
	await t.step("should return true for Fibonacci numbers", () => {
		assertEquals(check_is_fibonacci(0), true);
		assertEquals(check_is_fibonacci(1), true);
		assertEquals(check_is_fibonacci(2), true);
		assertEquals(check_is_fibonacci(3), true);
		assertEquals(check_is_fibonacci(5), true);
		assertEquals(check_is_fibonacci(8), true);
		assertEquals(check_is_fibonacci(13), true);
		assertEquals(check_is_fibonacci(21), true);
		assertEquals(check_is_fibonacci(34), true);
		assertEquals(check_is_fibonacci(55), true);
	});

	await t.step("should return false for non-Fibonacci numbers", () => {
		assertEquals(check_is_fibonacci(4), false);
		assertEquals(check_is_fibonacci(6), false);
		assertEquals(check_is_fibonacci(7), false);
		assertEquals(check_is_fibonacci(9), false);
		assertEquals(check_is_fibonacci(10), false);
		assertEquals(check_is_fibonacci(14), false);
		assertEquals(check_is_fibonacci(22), false);
	});
});

Deno.test("check_is_not_fibonacci", async (t) => {
	await t.step("should return true for non-Fibonacci numbers", () => {
		assertEquals(check_is_not_fibonacci(4), true);
		assertEquals(check_is_not_fibonacci(6), true);
		assertEquals(check_is_not_fibonacci(7), true);
		assertEquals(check_is_not_fibonacci(9), true);
		assertEquals(check_is_not_fibonacci(10), true);
		assertEquals(check_is_not_fibonacci(14), true);
		assertEquals(check_is_not_fibonacci(22), true);
	});

	await t.step("should return false for Fibonacci numbers", () => {
		assertEquals(check_is_not_fibonacci(0), false);
		assertEquals(check_is_not_fibonacci(1), false);
		assertEquals(check_is_not_fibonacci(2), false);
		assertEquals(check_is_not_fibonacci(3), false);
		assertEquals(check_is_not_fibonacci(5), false);
		assertEquals(check_is_not_fibonacci(8), false);
		assertEquals(check_is_not_fibonacci(13), false);
		assertEquals(check_is_not_fibonacci(21), false);
		assertEquals(check_is_not_fibonacci(34), false);
		assertEquals(check_is_not_fibonacci(55), false);
	});
});
