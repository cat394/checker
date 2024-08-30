import { checkIsEmailFormat, checkIsNotEmailFormat } from "./main.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("checkIsEmailFormat", async (t) => {
	await t.step("should return true for valid email addresses", () => {
		assertEquals(checkIsEmailFormat("example@example.com"), true);
		assertEquals(checkIsEmailFormat("user.name+tag+sorting@example.com"), true);
	});

	await t.step("should return false for invalid email addresses", () => {
		assertEquals(checkIsEmailFormat("invalid-email"), false);
		assertEquals(checkIsEmailFormat("example@.com"), false);
	});
});

Deno.test("checkIsNotEmailFormat", async (t) => {
	await t.step("should return true for invalid email addresses", () => {
		assertEquals(checkIsNotEmailFormat("invalid-email"), true);
		assertEquals(checkIsNotEmailFormat("example@.com"), true);
	});
    
	await t.step("should return false for valid email addresses", () => {
		assertEquals(checkIsNotEmailFormat("example@example.com"), false);
		assertEquals(
			checkIsNotEmailFormat("user.name+tag+sorting@example.com"),
			false
		);
	});
});
