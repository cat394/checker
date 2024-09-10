import { assertEquals } from "../../deps.ts";
import { check_is_not_URL_format, check_is_URL_format } from "./main.ts";

Deno.test("check_is_URL_format", async (t) => {
	await t.step("should return true for valid URLs", () => {
		assertEquals(check_is_URL_format("https://example.com"), true);
		assertEquals(check_is_URL_format("ftp://example.com/resource"), true);
	});

	await t.step("should return false for invalid URLs", () => {
		assertEquals(check_is_URL_format("invalid-url"), false);
		assertEquals(check_is_URL_format("http://"), false);
	});
});

Deno.test("check_is_not_URL_format", async (t) => {
	await t.step("should return true for invalid URLs", () => {
		assertEquals(check_is_not_URL_format("invalid-url"), true);
		assertEquals(check_is_not_URL_format("http://"), true);
	});

	await t.step("should return false for valid URLs", () => {
		assertEquals(check_is_not_URL_format("https://example.com"), false);
		assertEquals(check_is_not_URL_format("ftp://example.com/resource"), false);
	});
});
