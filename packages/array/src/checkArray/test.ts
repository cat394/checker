import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_array, check_is_not_array } from "./main.ts";

Deno.test("check_is_array", async (t) => {
	await t.step("should return true for arrays", () => {
		assertEquals(check_is_array([1, 2, 3]), true);
		assertEquals(check_is_array([]), true);
	});

	await t.step("should return false for non-arrays", () => {
		assertEquals(check_is_array("string"), false);
		assertEquals(check_is_array(123), false);
		assertEquals(check_is_array({ key: "value" }), false);
		assertEquals(check_is_array(null), false);
		assertEquals(check_is_array(undefined), false);
	});

	await t.step("should narrow down to array type", () => {
		type Value = [] | string;
		const value = {} as Value;
		if (check_is_array(value)) {
			assertType<IsExact<typeof value, []>>(true);
		}
	});
});

Deno.test("check_is_not_array", async (t) => {
	await t.step("should return true for non-arrays", () => {
		assertEquals(check_is_not_array<string>("string"), true);
		assertEquals(check_is_not_array<number>(123), true);
		assertEquals(check_is_not_array<object>({ key: "value" }), true);
		assertEquals(check_is_not_array<null>(null), true);
		assertEquals(check_is_not_array<undefined>(undefined), true);
	});

	await t.step("should return false for arrays", () => {
		assertEquals(check_is_not_array<number[]>([1, 2, 3]), false);
		assertEquals(check_is_not_array<number[]>([]), false);
	});

	await t.step("should exclude array type", () => {
		type Value = [] | string;
		const value = {} as Value;
		if (check_is_not_array(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
