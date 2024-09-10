import { assertEquals } from "../../deps.ts";
import {
	check_is_not_specific_iteration,
	check_is_specific_iteration,
} from "./main.ts";

Deno.test("check_is_specific_iteration", async (t) => {
	await t.step("should return true when index matches targetIndex", () => {
		assertEquals(check_is_specific_iteration(2, 2), true);
		assertEquals(check_is_specific_iteration(0, 0), true);
		assertEquals(check_is_specific_iteration(5, 5), true);
	});

	await t.step(
		"should return false when index does not match targetIndex",
		() => {
			assertEquals(check_is_specific_iteration(1, 2), false);
			assertEquals(check_is_specific_iteration(3, 2), false);
			assertEquals(check_is_specific_iteration(4, 0), false);
		}
	);
});

Deno.test("check_is_not_specific_iteration", async (t) => {
	await t.step(
		"should return true when index does not match targetIndex",
		() => {
			assertEquals(check_is_not_specific_iteration(1, 2), true);
			assertEquals(check_is_not_specific_iteration(3, 2), true);
			assertEquals(check_is_not_specific_iteration(4, 0), true);
		}
	);

	await t.step("should return false when index matches targetIndex", () => {
		assertEquals(check_is_not_specific_iteration(2, 2), false);
		assertEquals(check_is_not_specific_iteration(0, 0), false);
		assertEquals(check_is_not_specific_iteration(5, 5), false);
	});
});
