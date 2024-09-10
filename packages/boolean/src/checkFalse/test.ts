import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_false, check_is_not_false } from "./main.ts";

Deno.test("check_is_false", async (t) => {
	await t.step("should return true for false value", () => {
		assertEquals(check_is_false(false), true);
	});

	await t.step("should return false for non-false values", () => {
		assertEquals(check_is_false(true), false);
		assertEquals(check_is_false(null), false);
		assertEquals(check_is_false(undefined), false);
		assertEquals(check_is_false(0), false);
		assertEquals(check_is_false(1), false);
		assertEquals(check_is_false("false"), false);
	});

	await t.step("should narrow false type", () => {
		type Value = string | false;
		const value = {} as Value;
		if (check_is_false(value)) {
			assertType<IsExact<typeof value, false>>(true);
		}
	});
});

Deno.test("check_is_not_false", async (t) => {
	await t.step("should return true for non-false values", () => {
		assertEquals(check_is_not_false(true), true);
		assertEquals(check_is_not_false(null), true);
		assertEquals(check_is_not_false(undefined), true);
		assertEquals(check_is_not_false(0), true);
		assertEquals(check_is_not_false(1), true);
		assertEquals(check_is_not_false("false"), true);
	});

	await t.step("should return false for false value", () => {
		assertEquals(check_is_not_false(false), false);
	});

	await t.step("should exclude false type", () => {
		type Value = string | false;
		const value = {} as Value;
		if (check_is_not_false(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
