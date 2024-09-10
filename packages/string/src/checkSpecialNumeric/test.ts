import { assertEquals } from "../../deps.ts";
import {
	check_is_not_special_numeric,
	check_is_special_numeric,
} from "./main.ts";

Deno.test("check_is_special_numeric", async (t) => {
	await t.step("should return true for special numeric strings", () => {
		assertEquals(check_is_special_numeric("1e5"), true); // exponential notation
		assertEquals(check_is_special_numeric("0b101"), true); // binary notation
		assertEquals(check_is_special_numeric("Infinity"), true); // infinity
		assertEquals(check_is_special_numeric("-Infinity"), true); // negative infinity
	});

	await t.step("should return false for non-special numeric strings", () => {
		assertEquals(check_is_special_numeric("123"), false);
		assertEquals(check_is_special_numeric("3.14"), false);
		assertEquals(check_is_special_numeric("abc"), false);
		assertEquals(check_is_special_numeric("0x1F"), false); // hexadecimal is not considered special here
		assertEquals(check_is_special_numeric(" "), false);
		assertEquals(check_is_special_numeric(""), false);
	});
});

Deno.test("check_is_not_special_numeric", async (t) => {
	await t.step("should return true for non-special numeric strings", () => {
		assertEquals(check_is_not_special_numeric("123"), true);
		assertEquals(check_is_not_special_numeric("3.14"), true);
		assertEquals(check_is_not_special_numeric("abc"), true);
		assertEquals(check_is_not_special_numeric("0x1F"), true); // hexadecimal is not considered special here
		assertEquals(check_is_not_special_numeric(" "), true);
		assertEquals(check_is_not_special_numeric(""), true);
	});

	await t.step("should return false for special numeric strings", () => {
		assertEquals(check_is_not_special_numeric("1e5"), false); // exponential notation
		assertEquals(check_is_not_special_numeric("0b101"), false); // binary notation
		assertEquals(check_is_not_special_numeric("Infinity"), false); // infinity
		assertEquals(check_is_not_special_numeric("-Infinity"), false); // negative infinity
	});
});
