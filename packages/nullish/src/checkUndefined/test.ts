import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_undefined, check_is_undefined } from "./main.ts";

Deno.test("check_is_undefined", async (t) => {
	await t.step("should return true for undefined", () => {
		assertEquals(check_is_undefined(undefined), true);
	});

	await t.step("should return false for non-undefined values", () => {
		assertEquals(check_is_undefined(null), false);
		assertEquals(check_is_undefined(0), false);
		assertEquals(check_is_undefined(""), false);
		assertEquals(check_is_undefined(false), false);
		assertEquals(check_is_undefined({}), false);
		assertEquals(check_is_undefined(0n), false);
	});

	await t.step("should narrow undefined type", () => {
		type Value = string | null | undefined;
		const value = {} as Value;
		if (check_is_undefined(value)) {
			assertType<IsExact<typeof value, undefined>>(true);
		}
	});
});

Deno.test("check_is_not_undefined", async (t) => {
	await t.step("should return true for non-undefined values", () => {
		assertEquals(check_is_not_undefined(null), true);
		assertEquals(check_is_not_undefined(0), true);
		assertEquals(check_is_not_undefined(""), true);
		assertEquals(check_is_not_undefined(false), true);
		assertEquals(check_is_not_undefined({}), true);
		assertEquals(check_is_not_undefined(0n), true);
	});

	await t.step("should return false for undefined", () => {
		assertEquals(check_is_not_undefined(undefined), false);
	});

	await t.step("should exclude undefined type", () => {
		type Value = string | null | undefined;
		const value = {} as Value;
		if (check_is_not_undefined(value)) {
			assertType<IsExact<typeof value, string | null>>(true);
		}
	});
});
