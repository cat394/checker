import { assertEquals } from "../../deps.ts";
import { check_is_alphanumeric, check_is_not_alphanumeric } from "./main.ts";

Deno.test("check_is_alphanumeric", async (t) => {
	await t.step("should return true for alphanumeric strings", () => {
		assertEquals(check_is_alphanumeric("abc123"), true);
		assertEquals(check_is_alphanumeric("ABC123"), true);
		assertEquals(check_is_alphanumeric("a1b2c3"), true);
		assertEquals(check_is_alphanumeric("123456"), true);
		assertEquals(check_is_alphanumeric("abcdef"), true);
		assertEquals(check_is_alphanumeric("ABCDEF"), true);
	});

	await t.step("should return false for non-alphanumeric strings", () => {
		assertEquals(check_is_alphanumeric("abc!123"), false);
		assertEquals(check_is_alphanumeric("abc 123"), false); // space is not alphanumeric
		assertEquals(check_is_alphanumeric("abc-123"), false);
		assertEquals(check_is_alphanumeric("abc123@"), false);
		assertEquals(check_is_alphanumeric("!@#"), false);
		assertEquals(check_is_alphanumeric(" "), false);
	});
});

Deno.test("check_is_not_alphanumeric", async (t) => {
	await t.step("should return true for non-alphanumeric strings", () => {
		assertEquals(check_is_not_alphanumeric("abc!123"), true);
		assertEquals(check_is_not_alphanumeric("abc 123"), true); // space is not alphanumeric
		assertEquals(check_is_not_alphanumeric("abc-123"), true);
		assertEquals(check_is_not_alphanumeric("abc123@"), true);
		assertEquals(check_is_not_alphanumeric("!@#"), true);
		assertEquals(check_is_not_alphanumeric(" "), true);
	});

	await t.step("should return false for alphanumeric strings", () => {
		assertEquals(check_is_not_alphanumeric("abc123"), false);
		assertEquals(check_is_not_alphanumeric("ABC123"), false);
		assertEquals(check_is_not_alphanumeric("a1b2c3"), false);
		assertEquals(check_is_not_alphanumeric("123456"), false);
		assertEquals(check_is_not_alphanumeric("abcdef"), false);
		assertEquals(check_is_not_alphanumeric("ABCDEF"), false);
	});
});
