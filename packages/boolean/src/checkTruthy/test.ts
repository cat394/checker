import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsNotTruthy, checkIsTruthy } from "./main.ts";

Deno.test("checkIsTruthy", async (t) => {
	await t.step("should return true for truthy values", () => {
		assertEquals(checkIsTruthy(1), true);
		assertEquals(checkIsTruthy("string"), true);
		assertEquals(checkIsTruthy(true), true);
		assertEquals(checkIsTruthy([]), true);
		assertEquals(checkIsTruthy({}), true);
	});

	await t.step("should return false for falsy values", () => {
		assertEquals(checkIsTruthy(false), false);
		assertEquals(checkIsTruthy(0), false);
		assertEquals(checkIsTruthy(""), false);
		assertEquals(checkIsTruthy(null), false);
		assertEquals(checkIsTruthy(undefined), false);
		assertEquals(checkIsTruthy(0n), false);
		assertEquals(checkIsTruthy(NaN), false);
	});

	await t.step("should narrow truthy types", () => {
		type Value = string | number | true | null | undefined | false;
		const value = {} as Value;
		if (checkIsTruthy(value)) {
			assertType<IsExact<typeof value, string | number | true>>(true);
		}
	});
});

Deno.test("checkIsNotTruthy", async (t) => {
	await t.step("should return true for falsy values", () => {
		assertEquals(checkIsNotTruthy(false), true);
		assertEquals(checkIsNotTruthy(0), true);
		assertEquals(checkIsNotTruthy(""), true);
		assertEquals(checkIsNotTruthy(null), true);
		assertEquals(checkIsNotTruthy(undefined), true);
		assertEquals(checkIsNotTruthy(0n), true);
		assertEquals(checkIsNotTruthy(NaN), true);
	});

	await t.step("should return false for truthy values", () => {
		assertEquals(checkIsNotTruthy(1), false);
		assertEquals(checkIsNotTruthy("string"), false);
		assertEquals(checkIsNotTruthy(true), false);
		assertEquals(checkIsNotTruthy([]), false);
		assertEquals(checkIsNotTruthy({}), false);
	});

	await t.step("should exclude truthy types", () => {
		type Value = string | number | true | null | undefined | false;
		const value = {} as Value;
		if (checkIsNotTruthy(value)) {
			assertType<IsExact<typeof value, null | undefined | false>>(true);
		}
	});
});
