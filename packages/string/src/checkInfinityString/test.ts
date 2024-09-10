import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import {
	check_is_infinity_string,
	check_is_not_infinity_string,
} from "./main.ts";

Deno.test("checkIsInfinityString", async (t) => {
	await t.step(
		'should return true for "Infinity" or "-Infinity" strings',
		() => {
			assertEquals(check_is_infinity_string("Infinity"), true);
			assertEquals(check_is_infinity_string("-Infinity"), true);
		}
	);

	await t.step("should return false for non-Infinity strings", () => {
		assertEquals(check_is_infinity_string("abc"), false);
		assertEquals(check_is_infinity_string("123"), false);
		assertEquals(check_is_infinity_string("NaN"), false);
		assertEquals(check_is_infinity_string("1e5"), false);
		assertEquals(check_is_infinity_string(""), false);
		assertEquals(check_is_infinity_string(" "), false);
		assertEquals(check_is_infinity_string("  Infinity  "), false); // with spaces
		assertEquals(check_is_infinity_string("  -Infinity  "), false); // with spaces
	});

	await t.step("should narrow 'Infinity' or '-Infinity", () => {
		const value: string = "";
		if (check_is_infinity_string(value)) {
			assertType<IsExact<typeof value, "Infinity" | "-Infinity">>(true);
		}
	});
});

Deno.test("checkIsNotInfinityString", async (t) => {
	await t.step(
		'should return true for strings that are not "Infinity" or "-Infinity"',
		() => {
			assertEquals(check_is_not_infinity_string("abc"), true);
			assertEquals(check_is_not_infinity_string("123"), true);
			assertEquals(check_is_not_infinity_string("NaN"), true);
			assertEquals(check_is_not_infinity_string("1e5"), true);
			assertEquals(check_is_not_infinity_string(""), true);
			assertEquals(check_is_not_infinity_string(" "), true);
			assertEquals(check_is_not_infinity_string("  Infinity  "), true); // with spaces
			assertEquals(check_is_not_infinity_string("  -Infinity  "), true); // with spaces
		}
	);

	await t.step(
		'should return false for "Infinity" or "-Infinity" strings',
		() => {
			assertEquals(check_is_not_infinity_string("Infinity"), false);
			assertEquals(check_is_not_infinity_string("-Infinity"), false);
		}
	);
});
