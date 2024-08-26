import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsNotUndefined, checkIsUndefined } from "./main.ts";

Deno.test("checkIsUndefined", async (t) => {
	await t.step("should return true for undefined", () => {
		assertEquals(checkIsUndefined(undefined), true);
	});

	await t.step("should return false for non-undefined values", () => {
		assertEquals(checkIsUndefined(null), false);
		assertEquals(checkIsUndefined(0), false);
		assertEquals(checkIsUndefined(""), false);
		assertEquals(checkIsUndefined(false), false);
		assertEquals(checkIsUndefined({}), false);
		assertEquals(checkIsUndefined(0n), false);
	});

	await t.step("should narrow undefined type", () => {
		type Value = string | null | undefined;
		const value = {} as Value;
		if (checkIsUndefined(value)) {
			assertType<IsExact<typeof value, undefined>>(true);
		}
	});
});

Deno.test("checkIsNotUndefined", async (t) => {
	await t.step("should return true for non-undefined values", () => {
		assertEquals(checkIsNotUndefined(null), true);
		assertEquals(checkIsNotUndefined(0), true);
		assertEquals(checkIsNotUndefined(""), true);
		assertEquals(checkIsNotUndefined(false), true);
		assertEquals(checkIsNotUndefined({}), true);
		assertEquals(checkIsNotUndefined(0n), true);
	});

	await t.step("should return false for undefined", () => {
		assertEquals(checkIsNotUndefined(undefined), false);
	});

	await t.step("should exclude undefined type", () => {
		type Value = string | null | undefined;
		const value = {} as Value;
		if (checkIsNotUndefined(value)) {
			assertType<IsExact<typeof value, string | null>>(true);
		}
	});
});
