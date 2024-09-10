import { check_is_email_format, check_is_not_email_format } from "./main.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("check_is_email_format", async (t) => {
	await t.step("should return true for valid email addresses", () => {
		assertEquals(check_is_email_format("example@example.com"), true);
		assertEquals(
			check_is_email_format("user.name+tag+sorting@example.com"),
			true
		);
	});

	await t.step("should return false for invalid email addresses", () => {
		assertEquals(check_is_email_format("invalid-email"), false);
		assertEquals(check_is_email_format("example@.com"), false);
	});
});

Deno.test("check_is_not_email_format", async (t) => {
	await t.step("should return true for invalid email addresses", () => {
		assertEquals(check_is_not_email_format("invalid-email"), true);
		assertEquals(check_is_not_email_format("example@.com"), true);
	});

	await t.step("should return false for valid email addresses", () => {
		assertEquals(check_is_not_email_format("example@example.com"), false);
		assertEquals(
			check_is_not_email_format("user.name+tag+sorting@example.com"),
			false
		);
	});
});
