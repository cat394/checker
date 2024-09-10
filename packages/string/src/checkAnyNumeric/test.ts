import { assertEquals } from "../../deps.ts";
import { check_is_any_numeric, check_is_not_any_numeric } from "./main.ts";

Deno.test("check_is_any_numeric", async (t) => {
	await t.step("should return true for numeric strings", () => {
		assertEquals(check_is_any_numeric("123"), true); // plain integer
		assertEquals(check_is_any_numeric("0"), true); // zero
		assertEquals(check_is_any_numeric("-123"), true); // negative integer
		assertEquals(check_is_any_numeric("3.14"), true); // plain float
		assertEquals(check_is_any_numeric("-3.14"), true); // negative float
		assertEquals(check_is_any_numeric("1e5"), true); // exponential notation
		assertEquals(check_is_any_numeric("Infinity"), true); // Infinity as a numeric value
		assertEquals(check_is_any_numeric("0b101"), true); // binary notation
		assertEquals(check_is_any_numeric(""), true); // empty string evaluate 0
		assertEquals(check_is_any_numeric(" "), true); // space string evaluate 0
	});

	await t.step("should return false for non-numeric strings", () => {
		assertEquals(check_is_any_numeric("abc"), false); // alphabetic string
		assertEquals(check_is_any_numeric("123abc"), false); // alphanumeric string
		assertEquals(check_is_any_numeric("NaN"), false); // "NaN" as a string
	});
});

Deno.test("check_is_not_any_numeric", async (t) => {
	await t.step("should return true for non-numeric strings", () => {
		assertEquals(check_is_not_any_numeric("abc"), true); // alphabetic string
		assertEquals(check_is_not_any_numeric("123abc"), true); // alphanumeric string
		assertEquals(check_is_not_any_numeric("NaN"), true); // "NaN" as a string
	});

	await t.step("should return false for numeric strings", () => {
		assertEquals(check_is_not_any_numeric("123"), false); // plain integer
		assertEquals(check_is_not_any_numeric("0"), false); // zero
		assertEquals(check_is_not_any_numeric("-123"), false); // negative integer
		assertEquals(check_is_not_any_numeric("3.14"), false); // plain float
		assertEquals(check_is_not_any_numeric("-3.14"), false); // negative float
		assertEquals(check_is_not_any_numeric("1e5"), false); // exponential notation
		assertEquals(check_is_not_any_numeric("Infinity"), false); // Infinity as a numeric value
		assertEquals(check_is_not_any_numeric("0b101"), false); // binary notation
		assertEquals(check_is_not_any_numeric(""), false); // empty string evaluate 0
		assertEquals(check_is_not_any_numeric(" "), false); // space string evaluate 0
	});
});
