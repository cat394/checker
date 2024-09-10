import { assertEquals } from "../../deps.ts";
import { check_is_logarithm, check_is_not_logarithm } from "./main.ts";

Deno.test("check_is_logarithm", async (t) => {
	await t.step("should return true for correct logarithms", () => {
		assertEquals(check_is_logarithm(2, 10, 100), true); // log10(100) = 2
		assertEquals(check_is_logarithm(3, 2, 8), true); // log2(8) = 3
		assertEquals(check_is_logarithm(1, 10, 10), true); // log10(10) = 1
		assertEquals(check_is_logarithm(0, 5, 1), true); // log5(1) = 0
		assertEquals(check_is_logarithm(4, 2, 16), true); // log2(16) = 4
	});

	await t.step("should return false for incorrect logarithms", () => {
		assertEquals(check_is_logarithm(3, 10, 100), false); // log10(100) ≠ 3
		assertEquals(check_is_logarithm(2, 2, 8), false); // log2(8) ≠ checkIsLogarithmeckMatchesLogarithm(2, 10, 10), false); // log10(10) checkIsLogarithmcheckMatchesLogarithm(1, 5, 1), false); // log5(1checkIsLogarithms(checkMatchesLogarithm(3, 2, 16), false); // log2(16) ≠ 3
	});
});

Deno.test("check_is_not_logarithm", async (t) => {
	await t.step("should return true for incorrect logarithms", () => {
		assertEquals(check_is_not_logarithm(3, 10, 100), true); // log10(100) ≠ 3
		assertEquals(check_is_not_logarithm(2, 2, 8), true); // log2(8) ≠ 2
		assertEquals(check_is_not_logarithm(2, 10, 10), true); // log10(10) ≠ 2
		assertEquals(check_is_not_logarithm(1, 5, 1), true); // log5(1) ≠ 1
		assertEquals(check_is_not_logarithm(3, 2, 16), true); // log2(16) ≠ 3
	});

	await t.step("should return false for correct logarithms", () => {
		assertEquals(check_is_not_logarithm(2, 10, 100), false); // log10(100) = 2
		assertEquals(check_is_not_logarithm(3, 2, 8), false); // log2(8) = 3
		assertEquals(check_is_not_logarithm(1, 10, 10), false); // log10(10) = 1
		assertEquals(check_is_not_logarithm(0, 5, 1), false); // log5(1) = 0
		assertEquals(check_is_not_logarithm(4, 2, 16), false); // log2(16) = 4
	});
});
