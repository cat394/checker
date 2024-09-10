import { assertEquals } from "../../deps.ts";
import {
	check_is_first_iteration,
	check_is_not_first_iteration,
} from "./main.ts";

Deno.test("check_is_first_iteration", async (t) => {
	await t.step("should return true for the first iteration", () => {
		assertEquals(check_is_first_iteration(0), true);
	});

	await t.step("should return false for non-first iterations", () => {
		assertEquals(check_is_first_iteration(1), false);
		assertEquals(check_is_first_iteration(10), false);
	});
});

Deno.test("check_is_not_first_iteration", async (t) => {
	await t.step("should return true for non-first iterations", () => {
		assertEquals(check_is_not_first_iteration(1), true);
		assertEquals(check_is_not_first_iteration(10), true);
	});

	await t.step("should return false for the first iteration", () => {
		assertEquals(check_is_not_first_iteration(0), false);
	});
});
