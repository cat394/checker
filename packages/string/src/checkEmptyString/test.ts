import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_is_empty_string, check_is_not_empty_string } from "./main.ts";

Deno.test("check_is_empty_string", async (t) => {
	await t.step("should return true for empty strings", () => {
		assertEquals(check_is_empty_string(""), true);
	});

	await t.step("should return false for non-empty strings", () => {
		assertEquals(check_is_empty_string("hello"), false);
		assertEquals(check_is_empty_string(" "), false);
		assertEquals(check_is_empty_string("123"), false);
	});

	await t.step("should narrow empty-string type", () => {
		const value: string = "some string";
		if (check_is_empty_string(value)) {
			assertType<IsExact<typeof value, "">>(true);
		}
	});
});

Deno.test("check_is_not_empty_string", async (t) => {
	await t.step("should return true for non-empty strings", () => {
		assertEquals(check_is_not_empty_string("hello"), true);
		assertEquals(check_is_not_empty_string(" "), true);
		assertEquals(check_is_not_empty_string("123"), true);
	});

	await t.step("should return false for empty strings", () => {
		assertEquals(check_is_not_empty_string(""), false);
	});
});
