import { assertEquals } from "../../deps.ts";
import {
	check_is_ISO8601_format,
	check_is_not_ISO8601_format,
} from "./main.ts";

Deno.test("check_is_ISO8601_format", async (t) => {
	await t.step("should return true for valid ISO 8601 strings", () => {
		assertEquals(check_is_ISO8601_format("2023-08-30T10:30:00Z"), true);
		assertEquals(check_is_ISO8601_format("2023-08-30T10:30:00+02:00"), true);
	});

	await t.step("should return false for invalid ISO 8601 strings", () => {
		assertEquals(check_is_ISO8601_format("08/30/2023"), false);
		assertEquals(check_is_ISO8601_format("2023-08-30 10:30:00"), false);
	});
});

Deno.test("check_is_not_ISO8601_format", async (t) => {
	await t.step("should return true for invalid ISO 8601 strings", () => {
		assertEquals(check_is_not_ISO8601_format("08/30/2023"), true);
		assertEquals(check_is_not_ISO8601_format("2023-08-30 10:30:00"), true);
	});

	await t.step("should return false for valid ISO 8601 strings", () => {
		assertEquals(check_is_not_ISO8601_format("2023-08-30T10:30:00Z"), false);
		assertEquals(
			check_is_not_ISO8601_format("2023-08-30T10:30:00+02:00"),
			false
		);
	});
});
