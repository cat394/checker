import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { check_does_not_have_suffix, check_has_suffix } from "./main.ts";

Deno.test("checkEndsWith", async (t) => {
	await t.step(
		"should return true for strings that end with the given suffix",
		() => {
			assertEquals(check_has_suffix("hello world", "world"), true);
			assertEquals(check_has_suffix("hello", "o"), true);
			assertEquals(check_has_suffix("typescript", "script"), true);
			assertEquals(check_has_suffix("openai", "ai"), true);
			assertEquals(check_has_suffix("end", "end"), true);
		}
	);

	await t.step(
		"should return false for strings that do not end with the given suffix",
		() => {
			assertEquals(check_has_suffix("hello world", "hello"), false);
			assertEquals(check_has_suffix("hello", "l"), false);
			assertEquals(check_has_suffix("typescript", "type"), false);
			assertEquals(check_has_suffix("openai", "open"), false);
			assertEquals(check_has_suffix("end", "start"), false);
		}
	);

	await t.step("should narrow string with suffix type", () => {
		const value: string = "";
		if (check_has_suffix(value, "suffix")) {
			assertType<IsExact<typeof value, `${string}suffix`>>(true);
		}
	});
});

Deno.test("checkNotEndWith", async (t) => {
	await t.step(
		"should return true for strings that do not end with the given suffix",
		() => {
			assertEquals(check_does_not_have_suffix("hello world", "hello"), true);
			assertEquals(check_does_not_have_suffix("hello", "l"), true);
			assertEquals(check_does_not_have_suffix("typescript", "type"), true);
			assertEquals(check_does_not_have_suffix("openai", "open"), true);
			assertEquals(check_does_not_have_suffix("end", "start"), true);
		}
	);

	await t.step(
		"should return false for strings that end with the given suffix",
		() => {
			assertEquals(check_does_not_have_suffix("hello world", "world"), false);
			assertEquals(check_does_not_have_suffix("hello", "o"), false);
			assertEquals(check_does_not_have_suffix("typescript", "script"), false);
			assertEquals(check_does_not_have_suffix("openai", "ai"), false);
			assertEquals(check_does_not_have_suffix("end", "end"), false);
		}
	);
});
