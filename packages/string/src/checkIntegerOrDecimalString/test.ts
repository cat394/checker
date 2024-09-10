import { assertEquals } from "../../deps.ts";
import {
	check_is_integer_or_decimal_string,
	check_is_not_integer_or_decimal_string,
} from "./main.ts";

Deno.test("check_is_integer_or_decimal_string", async (t) => {
	await t.step("should return true for numeric strings", () => {
		assertEquals(check_is_integer_or_decimal_string("123"), true);
		assertEquals(check_is_integer_or_decimal_string("0"), true);
		assertEquals(check_is_integer_or_decimal_string("-123"), true);
		assertEquals(check_is_integer_or_decimal_string("3.14"), true);
		assertEquals(check_is_integer_or_decimal_string("-3.14"), true);
	});

	await t.step("should return false for non-numeric strings", () => {
		assertEquals(check_is_integer_or_decimal_string("abc"), false);
		assertEquals(check_is_integer_or_decimal_string("123abc"), false);
		assertEquals(check_is_integer_or_decimal_string(""), false);
		assertEquals(check_is_integer_or_decimal_string(" "), false);
		assertEquals(check_is_integer_or_decimal_string("NaN"), false);
		assertEquals(check_is_integer_or_decimal_string("Infinity"), false);
		assertEquals(check_is_integer_or_decimal_string("1e5"), false);
	});
});

Deno.test("check_is_not_integer_or_decimal_string", async (t) => {
	await t.step("should return true for non-numeric strings", () => {
		assertEquals(check_is_not_integer_or_decimal_string("abc"), true);
		assertEquals(check_is_not_integer_or_decimal_string("123abc"), true);
		assertEquals(check_is_not_integer_or_decimal_string(""), true);
		assertEquals(check_is_not_integer_or_decimal_string(" "), true);
		assertEquals(check_is_not_integer_or_decimal_string("NaN"), true);
		assertEquals(check_is_not_integer_or_decimal_string("Infinity"), true);
		assertEquals(check_is_not_integer_or_decimal_string("1e5"), true);
	});

	await t.step("should return false for numeric strings", () => {
		assertEquals(check_is_not_integer_or_decimal_string("123"), false);
		assertEquals(check_is_not_integer_or_decimal_string("0"), false);
		assertEquals(check_is_not_integer_or_decimal_string("-123"), false);
		assertEquals(check_is_not_integer_or_decimal_string("3.14"), false);
		assertEquals(check_is_not_integer_or_decimal_string("-3.14"), false);
	});
});
