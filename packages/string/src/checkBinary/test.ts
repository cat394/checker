import { assertEquals } from "../../deps.ts";
import { check_is_binary, check_is_not_binary } from "./main.ts";

Deno.test("check_is_binary", async (t) => {
	await t.step("should return true for binary strings", () => {
		assertEquals(check_is_binary("0b101"), true); // simple binary
		assertEquals(check_is_binary("0B1101"), true); // capital B
		assertEquals(check_is_binary("0b0"), true); // single digit binary
		assertEquals(check_is_binary("0b11111111"), true); // multiple digits binary
	});

	await t.step("should return false for non-binary strings", () => {
		assertEquals(check_is_binary("101"), false); // missing binary prefix
		assertEquals(check_is_binary("0b102"), false); // invalid binary digits
		assertEquals(check_is_binary("0b"), false); // only prefix, no digits
		assertEquals(check_is_binary("0b "), false); // space after prefix
		assertEquals(check_is_binary(""), false); // empty string
		assertEquals(check_is_binary("0bxyz"), false); // non-binary characters
	});
});

Deno.test("check_is_not_binary", async (t) => {
	await t.step("should return true for non-binary strings", () => {
		assertEquals(check_is_not_binary("101"), true); // missing binary prefix
		assertEquals(check_is_not_binary("0b102"), true); // invalid binary digits
		assertEquals(check_is_not_binary("0b"), true); // only prefix, no digits
		assertEquals(check_is_not_binary("0b "), true); // space after prefix
		assertEquals(check_is_not_binary(""), true); // empty string
		assertEquals(check_is_not_binary("0bxyz"), true); // non-binary characters
	});

	await t.step("should return false for binary strings", () => {
		assertEquals(check_is_not_binary("0b101"), false); // simple binary
		assertEquals(check_is_not_binary("0B1101"), false); // capital B
		assertEquals(check_is_not_binary("0b0"), false); // single digit binary
		assertEquals(check_is_not_binary("0b11111111"), false); // multiple digits binary
	});
});
