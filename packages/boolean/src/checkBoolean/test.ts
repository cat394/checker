import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_boolean, check_is_not_boolean } from "./main.ts";

Deno.test("check_is_boolean", async (t) => {
	await t.step("should return true for boolean values", () => {
		assertEquals(check_is_boolean(true), true);
		assertEquals(check_is_boolean(false), true);
	});

	await t.step("should return false for non-boolean values", () => {
		assertEquals(check_is_boolean(1), false);
		assertEquals(check_is_boolean("true"), false);
		assertEquals(check_is_boolean(null), false);
		assertEquals(check_is_boolean(undefined), false);
		assertEquals(check_is_boolean({}), false);
	});

	await t.step("should narrow down to boolean type", () => {
		type Value = string | boolean;
		const value = {} as Value;
		if (check_is_boolean(value)) {
			assertType<IsExact<typeof value, boolean>>(true);
		}
	});
});

Deno.test("check_is_not_boolean", async (t) => {
	await t.step("should return true for non-boolean values", () => {
		assertEquals(check_is_not_boolean(1), true);
		assertEquals(check_is_not_boolean("false"), true);
		assertEquals(check_is_not_boolean(null), true);
		assertEquals(check_is_not_boolean(undefined), true);
		assertEquals(check_is_not_boolean({}), true);
	});

	await t.step("should return false for boolean values", () => {
		assertEquals(check_is_not_boolean(true), false);
		assertEquals(check_is_not_boolean(false), false);
	});

	await t.step("should exclude boolean type", () => {
		type Value = string | boolean;
		const value = {} as Value;
		if (check_is_not_boolean(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
