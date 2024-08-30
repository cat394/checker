import { assertEquals } from "../../deps.ts";
import { checkIsURLFormat, checkIsNotURLFormat } from "./main.ts";

Deno.test("checkIsURLFormat", async (t) => {
	await t.step("should return true for valid URLs", () => {
		assertEquals(checkIsURLFormat("https://example.com"), true);
		assertEquals(checkIsURLFormat("ftp://example.com/resource"), true);
	});

	await t.step("should return false for invalid URLs", () => {
		assertEquals(checkIsURLFormat("invalid-url"), false);
		assertEquals(checkIsURLFormat("http://"), false);
	});
});

Deno.test("checkIsNotURLFormat", async (t) => {
	await t.step("should return true for invalid URLs", () => {
		assertEquals(checkIsNotURLFormat("invalid-url"), true);
		assertEquals(checkIsNotURLFormat("http://"), true);
	});

	await t.step("should return false for valid URLs", () => {
		assertEquals(checkIsNotURLFormat("https://example.com"), false);
		assertEquals(checkIsNotURLFormat("ftp://example.com/resource"), false);
	});
});
