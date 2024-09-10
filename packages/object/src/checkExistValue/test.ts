import { assertEquals } from "../../deps.ts";
import {
	check_value_does_not_exist_in_object,
	check_value_exists_in_object,
} from "./main.ts";

Deno.test("check_value_exists_in_object", async (t) => {
	await t.step("should return true if object has the value", () => {
		assertEquals(check_value_exists_in_object({ key: "value" }, "value"), true);
		assertEquals(check_value_exists_in_object({ a: 1, b: 2 }, 2), true);
	});

	await t.step("should return false if object does not have the value", () => {
		assertEquals(
			check_value_exists_in_object({ key: "value" }, "nonExistentValue"),
			false
		);
		assertEquals(check_value_exists_in_object({ a: 1, b: 2 }, 3), false);
	});

	await t.step("should handle objects with multiple identical values", () => {
		assertEquals(check_value_exists_in_object({ a: 1, b: 1 }, 1), true); // Multiple keys with the same value
	});
});

Deno.test("check_value_does_not_exist_in_object", async (t) => {
	await t.step("should return true if object does not have the value", () => {
		assertEquals(
			check_value_does_not_exist_in_object(
				{ key: "value" },
				"nonExistentValue"
			),
			true
		);
		assertEquals(check_value_does_not_exist_in_object({ a: 1, b: 2 }, 3), true);
	});

	await t.step("should return false if object has the value", () => {
		assertEquals(
			check_value_does_not_exist_in_object({ key: "value" }, "value"),
			false
		);
		assertEquals(
			check_value_does_not_exist_in_object({ a: 1, b: 2 }, 2),
			false
		);
	});

	await t.step("should handle objects with multiple identical values", () => {
		assertEquals(
			check_value_does_not_exist_in_object({ a: 1, b: 1 }, 1),
			false
		); // Multiple keys with the same value
	});
});
