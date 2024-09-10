import { assertEquals } from "../../deps.ts";
import { check_is_not_sealed, check_is_sealed } from "./main.ts";

Deno.test("check_is_sealed", async (t) => {
	await t.step("should return true for sealed objects", () => {
		const sealedObj = Object.seal({ key: "value" });
		assertEquals(check_is_sealed(sealedObj), true);
	});

	await t.step("should return false for non-sealed objects", () => {
		const obj = { key: "value" };
		assertEquals(check_is_sealed(obj), false);
	});

	await t.step("should return true for sealed empty objects", () => {
		const sealedEmptyObj = Object.seal({});
		assertEquals(check_is_sealed(sealedEmptyObj), true); // Sealed empty object
	});
});

Deno.test("check_is_not_sealed", async (t) => {
	await t.step("should return true for non-sealed objects", () => {
		const obj = { key: "value" };
		assertEquals(check_is_not_sealed(obj), true);
	});

	await t.step("should return false for sealed objects", () => {
		const sealedObj = Object.seal({ key: "value" });
		assertEquals(check_is_not_sealed(sealedObj), false);
	});

	await t.step("should return false for sealed empty objects", () => {
		const sealedEmptyObj = Object.seal({});
		assertEquals(check_is_not_sealed(sealedEmptyObj), false); // Sealed empty object
	});
});
