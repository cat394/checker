import { assertEquals } from "../../deps.ts";
import { check_is_not_positive, check_is_positive } from "./main.ts";

Deno.test("check_is_positive", async (t) => {
	await t.step("should return true for positive numbers", () => {
		assertEquals(check_is_positive(1), true);
		assertEquals(check_is_positive(3.14), true);
	});

	await t.step("should return false for non-positive numbers", () => {
		assertEquals(check_is_positive(0), false);
		assertEquals(check_is_positive(-1), false);
	});
});

Deno.test("check_is_not_positive", async (t) => {
	await t.step("should return true for non-positive numbers", () => {
		assertEquals(check_is_not_positive(0), true);
		assertEquals(check_is_not_positive(-1), true);
	});

	await t.step("should return false for positive numbers", () => {
		assertEquals(check_is_not_positive(1), false);
		assertEquals(check_is_not_positive(3.14), false);
	});
});
