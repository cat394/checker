import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_not_object, check_is_object } from "./main.ts";

Deno.test("checkIsObject", async (t) => {
	await t.step("should return true for objects", () => {
		assertEquals(check_is_object({}), true); // Regular object
		assertEquals(check_is_object({ key: "value" }), true); // Object with properties
		assertEquals(check_is_object(Object.create(null)), true); // Object with no prototype
	});

	await t.step("should return false for non-objects", () => {
		assertEquals(check_is_object(null), false); // Null should not be considered an object
		assertEquals(check_is_object(undefined), false);
		assertEquals(check_is_object(123), false);
		assertEquals(check_is_object("string"), false);
		assertEquals(check_is_object([1, 2, 3]), false);
		// Function is not considered an object
		assertEquals(
			check_is_object(() => {}),
			false
		);
	});

	await t.step("should narrow object type", () => {
		type Value = string | object;
		const value = {} as Value;
		if (check_is_object(value)) {
			assertType<IsExact<typeof value, object>>(true);
		}
	});
});

Deno.test("checkIsNotObject", async (t) => {
	await t.step("should return true for non-objects", () => {
		assertEquals(check_is_not_object(null), true); // Null should be true
		assertEquals(check_is_not_object(undefined), true);
		assertEquals(check_is_not_object(123), true);
		assertEquals(check_is_not_object("string"), true);
		assertEquals(check_is_not_object([1, 2, 3]), true); // Array should return true
		// Function should return true
		assertEquals(
			check_is_not_object(() => {}),
			true
		);
	});

	await t.step("should return false for objects", () => {
		assertEquals(check_is_not_object({}), false);
		assertEquals(check_is_not_object({ key: "value" }), false);
		assertEquals(check_is_not_object(Object.create(null)), false);
	});

	await t.step("should exclude object type", () => {
		type Value = string | object;
		const value = {} as Value;
		if (check_is_not_object(value)) {
			assertType<IsExact<typeof value, string>>(true);
		}
	});
});
