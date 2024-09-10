import { assertEquals } from "../../deps.ts";
import { check_is_negative, check_is_not_negative } from "./main.ts";

Deno.test("check_is_negative", async (t) => {
	await t.step("should return true for negative numbers", () => {
		assertEquals(check_is_negative(-1), true);
		assertEquals(check_is_negative(-3.14), true);
	});

	await t.step("should return false for non-negative numbers", () => {
		assertEquals(check_is_negative(0), false);
		assertEquals(check_is_negative(1), false);
	});
});

Deno.test("check_is_not_negative", async (t) => {
	await t.step("should return true for non-negative numbers", () => {
		assertEquals(check_is_not_negative(0), true);
		assertEquals(check_is_not_negative(1), true);
		assertEquals(check_is_not_negative(3.14), true);
	});

	await t.step("should return false for negative numbers", () => {
		assertEquals(check_is_not_negative(-1), false);
		assertEquals(check_is_not_negative(-3.14), false);
	});
});
