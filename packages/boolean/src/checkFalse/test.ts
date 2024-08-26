import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsFalse, checkIsNotFalse } from "./main.ts";

Deno.test("checkIsFalse", async (t) => {
	await t.step("should return true for false value", () => {
		assertEquals(checkIsFalse(false), true);
	});

	await t.step("should return false for non-false values", () => {
		assertEquals(checkIsFalse(true), false);
		assertEquals(checkIsFalse(null), false);
		assertEquals(checkIsFalse(undefined), false);
		assertEquals(checkIsFalse(0), false);
		assertEquals(checkIsFalse(1), false);
		assertEquals(checkIsFalse("false"), false);
	});

	await t.step("should narrow false type", () => {
		type Value = string | false;
		const value = {} as Value;
		if (checkIsFalse(value)) {
			assertType<IsExact<typeof value, false>>(true);
		}
	});
});

Deno.test("checkIsNotFalse", async (t) => {
	await t.step("should return true for non-false values", () => {
		assertEquals(checkIsNotFalse(true), true);
		assertEquals(checkIsNotFalse(null), true);
		assertEquals(checkIsNotFalse(undefined), true);
		assertEquals(checkIsNotFalse(0), true);
		assertEquals(checkIsNotFalse(1), true);
		assertEquals(checkIsNotFalse("false"), true);
	});

	await t.step("should return false for false value", () => {
		assertEquals(checkIsNotFalse(false), false);
	});

	await t.step("should exclude false type", () => {
		type Value = string | false;
		const value = {} as Value;
		if (checkIsNotFalse(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
