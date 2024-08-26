import { assertEquals, assertType, IsExact } from "../../deps.ts";
import { checkIsFalsy, checkIsNotFalsy } from "./main.ts";

Deno.test("checkIsFalsy", async (t) => {
	await t.step("should return true for falsy values", () => {
		assertEquals(checkIsFalsy(false), true);
		assertEquals(checkIsFalsy(0), true);
		assertEquals(checkIsFalsy(""), true);
		assertEquals(checkIsFalsy(null), true);
		assertEquals(checkIsFalsy(undefined), true);
		assertEquals(checkIsFalsy(NaN), true);
		assertEquals(checkIsFalsy(0n), true);
	});

	await t.step("should return false for truthy values", () => {
		assertEquals(checkIsFalsy(true), false);
		assertEquals(checkIsFalsy(1), false);
		assertEquals(checkIsFalsy("string"), false);
		assertEquals(checkIsFalsy({}), false);
		assertEquals(checkIsFalsy([]), false);
	});

	await t.step("should narrow falsy types", () => {
		type Value = string | 0 | null | undefined | false;
		const value = {} as Value;
		if (checkIsFalsy(value)) {
			assertType<IsExact<typeof value, Exclude<Value, string>>>(true);
		}
	});
});

Deno.test("checkIsNotFalsy", async (t) => {
	await t.step("should return true for truthy values", () => {
		assertEquals(checkIsNotFalsy(true), true);
		assertEquals(checkIsNotFalsy(1), true);
		assertEquals(checkIsNotFalsy("string"), true);
		assertEquals(checkIsNotFalsy({}), true);
		assertEquals(checkIsNotFalsy([]), true);
	});

	await t.step("should return false for falsy values", () => {
		assertEquals(checkIsNotFalsy(false), false);
		assertEquals(checkIsNotFalsy(0), false);
		assertEquals(checkIsNotFalsy(""), false);
		assertEquals(checkIsNotFalsy(null), false);
		assertEquals(checkIsNotFalsy(undefined), false);
		assertEquals(checkIsNotFalsy(NaN), false);
		assertEquals(checkIsNotFalsy(0n), false);
	});

	await t.step("should exclude falsy types", () => {
		type Value = string | 0 | null | undefined | false;
		const value = {} as Value;
		if (checkIsNotFalsy(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
