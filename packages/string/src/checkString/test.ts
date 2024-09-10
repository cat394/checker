import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_string, check_is_string } from "./main.ts";

Deno.test("check_is_string", async (t) => {
	await t.step("should return true for strings", () => {
		assertEquals(check_is_string("hello"), true);
		assertEquals(check_is_string(""), true);
		assertEquals(check_is_string("123"), true);
	});

	await t.step("should return false for non-strings", () => {
		assertEquals(check_is_string(123), false);
		assertEquals(check_is_string(true), false);
		assertEquals(check_is_string({}), false);
		assertEquals(check_is_string([]), false);
		assertEquals(check_is_string(null), false);
		assertEquals(check_is_string(undefined), false);
	});

	await t.step("should narrow string type", () => {
		type Value = string | number;
		const value = {} as Value;
		if (check_is_string(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});

Deno.test("check_is_not_string", async (t) => {
	await t.step("should return true for non-strings", () => {
		assertEquals(check_is_not_string(123), true);
		assertEquals(check_is_not_string(true), true);
		assertEquals(check_is_not_string({}), true);
		assertEquals(check_is_not_string([]), true);
		assertEquals(check_is_not_string(null), true);
		assertEquals(check_is_not_string(undefined), true);
	});

	await t.step("should return false for strings", () => {
		assertEquals(check_is_not_string("hello"), false);
		assertEquals(check_is_not_string(""), false);
		assertEquals(check_is_not_string("123"), false);
	});

	await t.step("should exclude string type", () => {
		type Value = string | number;
		const value = {} as Value;
		if (check_is_not_string(value)) {
			assertType<IsExact<typeof value, number>>(true);
		}
	});
});
