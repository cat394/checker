import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_true, check_is_true } from "./main.ts";

Deno.test("check_is_true", async (t) => {
	await t.step("should return true for true value", () => {
		assertEquals(check_is_true(true), true);
	});

	await t.step("should return false for non-true values", () => {
		assertEquals(check_is_true(false), false);
		assertEquals(check_is_true(null), false);
		assertEquals(check_is_true(undefined), false);
		assertEquals(check_is_true(0), false);
		assertEquals(check_is_true(1), false);
		assertEquals(check_is_true("true"), false);
	});

	await t.step("should narrow true type", () => {
		type Value = string | true;
		const value = {} as Value;
		if (check_is_true(value)) {
			assertType<IsExact<typeof value, true>>(true);
		}
	});
});

Deno.test("check_is_not_true", async (t) => {
	await t.step("should return true for non-true values", () => {
		assertEquals(check_is_not_true(false), true);
		assertEquals(check_is_not_true(null), true);
		assertEquals(check_is_not_true(undefined), true);
		assertEquals(check_is_not_true(0), true);
		assertEquals(check_is_not_true(1), true);
		assertEquals(check_is_not_true("true"), true);
	});

	await t.step("should return false for true value", () => {
		assertEquals(check_is_not_true(true), false);
	});

	await t.step("should exclude true type", () => {
		type Value = string | true;
		const value = {} as Value;
		if (check_is_not_true(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
