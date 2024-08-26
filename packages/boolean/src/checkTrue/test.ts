import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsNotTrue, checkIsTrue } from "./main.ts";

Deno.test("checkIsTrue", async (t) => {
	await t.step("should return true for true value", () => {
		assertEquals(checkIsTrue(true), true);
	});

	await t.step("should return false for non-true values", () => {
		assertEquals(checkIsTrue(false), false);
		assertEquals(checkIsTrue(null), false);
		assertEquals(checkIsTrue(undefined), false);
		assertEquals(checkIsTrue(0), false);
		assertEquals(checkIsTrue(1), false);
		assertEquals(checkIsTrue("true"), false);
	});

	await t.step("should narrow true type", () => {
		type Value = string | true;
		const value = {} as Value;
		if (checkIsTrue(value)) {
			assertType<IsExact<typeof value, true>>(true);
		}
	});
});

Deno.test("checkIsNotTrue", async (t) => {
	await t.step("should return true for non-true values", () => {
		assertEquals(checkIsNotTrue(false), true);
		assertEquals(checkIsNotTrue(null), true);
		assertEquals(checkIsNotTrue(undefined), true);
		assertEquals(checkIsNotTrue(0), true);
		assertEquals(checkIsNotTrue(1), true);
		assertEquals(checkIsNotTrue("true"), true);
	});

	await t.step("should return false for true value", () => {
		assertEquals(checkIsNotTrue(true), false);
	});

	await t.step("should exclude true type", () => {
		type Value = string | true;
		const value = {} as Value;
		if (checkIsNotTrue(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
