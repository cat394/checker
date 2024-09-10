import { assertEquals } from "../../deps.ts";
import {
	check_key_does_not_exist_in_object,
	check_key_exists_in_object,
} from "./main.ts";

Deno.test("check_key_exists_in_object", async (t) => {
	await t.step("should return true if object has the key", () => {
		assertEquals(check_key_exists_in_object({ key: "value" }, "key"), true);
		assertEquals(check_key_exists_in_object({ a: 1, b: 2 }, "b"), true);
	});

	await t.step("should return false if object does not have the key", () => {
		assertEquals(
			check_key_exists_in_object({ key: "value" }, "nonExistentKey"),
			false
		);
		assertEquals(check_key_exists_in_object({}, "anyKey"), false); // Empty object
	});

	await t.step("should return true for inherited keys", () => {
		const obj = Object.create({ inheritedKey: "value" });
		assertEquals(check_key_exists_in_object(obj, "inheritedKey"), true); // Inherited key
	});
});

Deno.test("check_key_does_not_exist_in_object", async (t) => {
	await t.step("should return true if object does not have the key", () => {
		assertEquals(
			check_key_does_not_exist_in_object({ key: "value" }, "nonExistentKey"),
			true
		);
		assertEquals(check_key_does_not_exist_in_object({}, "anyKey"), true); // Empty object
	});

	await t.step("should return false if object has the key", () => {
		assertEquals(
			check_key_does_not_exist_in_object({ key: "value" }, "key"),
			false
		);
		assertEquals(
			check_key_does_not_exist_in_object({ a: 1, b: 2 }, "a"),
			false
		);
	});

	await t.step("should return false for inherited keys", () => {
		const obj = Object.create({ inheritedKey: "value" });
		assertEquals(
			check_key_does_not_exist_in_object(obj, "inheritedKey"),
			false
		); // Inherited key
	});
});
