import { assertEquals } from "../../deps.ts";
import { check_is_frozen, check_is_not_frozen } from "./main.ts";

Deno.test("check_is_frozen", async (t) => {
	await t.step("should return true for frozen objects", () => {
		const frozenObj = Object.freeze({ key: "value" });
		assertEquals(check_is_frozen(frozenObj), true);
	});

	await t.step("should return false for non-frozen objects", () => {
		const obj = { key: "value" };
		assertEquals(check_is_frozen(obj), false);
	});

	await t.step("should return true for frozen empty objects", () => {
		const frozenEmptyObj = Object.freeze({});
		assertEquals(check_is_frozen(frozenEmptyObj), true); // Frozen empty object
	});
});

Deno.test("check_is_not_frozen", async (t) => {
	await t.step("should return true for non-frozen objects", () => {
		const obj = { key: "value" };
		assertEquals(check_is_not_frozen(obj), true);
	});

	await t.step("should return false for frozen objects", () => {
		const frozenObj = Object.freeze({ key: "value" });
		assertEquals(check_is_not_frozen(frozenObj), false);
	});

	await t.step("should return false for frozen empty objects", () => {
		const frozenEmptyObj = Object.freeze({});
		assertEquals(check_is_not_frozen(frozenEmptyObj), false); // Frozen empty object
	});
});
