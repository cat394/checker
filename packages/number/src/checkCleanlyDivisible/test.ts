import { assertEquals } from "../../deps.ts";
import {
	check_is_cleanly_disible,
	check_is_not_cleanly_disible,
} from "./main.ts";

Deno.test("check_is_cleanly_disible", async (t) => {
	await t.step(
		"should return true for numbers divisible by the divisor",
		() => {
			assertEquals(check_is_cleanly_disible(10, 2), true);
			assertEquals(check_is_cleanly_disible(15, 3), true);
			assertEquals(check_is_cleanly_disible(100, 10), true);
			assertEquals(check_is_cleanly_disible(0, 1), true); // Zero is divisible by any non-zero number
			assertEquals(check_is_cleanly_disible(-10, 5), true); // Negative number divisible
		}
	);

	await t.step(
		"should return false for numbers not divisible by the divisor",
		() => {
			assertEquals(check_is_cleanly_disible(10, 3), false);
			assertEquals(check_is_cleanly_disible(14, 5), false);
			assertEquals(check_is_cleanly_disible(100, 6), false);
			assertEquals(check_is_cleanly_disible(7, 2), false);
			assertEquals(check_is_cleanly_disible(-9, 4), false); // Negative number not divisible
		}
	);
});

Deno.test("check_is_not_cleanly_disible", async (t) => {
	await t.step(
		"should return true for numbers not divisible by the divisor",
		() => {
			assertEquals(check_is_not_cleanly_disible(10, 3), true);
			assertEquals(check_is_not_cleanly_disible(14, 5), true);
			assertEquals(check_is_not_cleanly_disible(100, 6), true);
			assertEquals(check_is_not_cleanly_disible(7, 2), true);
			assertEquals(check_is_not_cleanly_disible(-9, 4), true); // Negative number not divisible
		}
	);

	await t.step(
		"should return false for numbers divisible by the divisor",
		() => {
			assertEquals(check_is_not_cleanly_disible(10, 2), false);
			assertEquals(check_is_not_cleanly_disible(15, 3), false);
			assertEquals(check_is_not_cleanly_disible(100, 10), false);
			assertEquals(check_is_not_cleanly_disible(0, 1), false); // Zero is divisible by any non-zero number
			assertEquals(check_is_not_cleanly_disible(-10, 5), false); // Negative number divisible
		}
	);
});
