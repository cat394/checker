import { assertEquals } from "../../deps.ts";
import {
	check_is_less_than_or_equal,
	check_is_not_less_than_or_equal,
} from "./main.ts";

Deno.test("check_is_less_than_or_equal", async (t) => {
	await t.step(
		"should return true when num is less than or equal to threshold",
		() => {
			assertEquals(check_is_less_than_or_equal(1, 2), true);
			assertEquals(check_is_less_than_or_equal(2, 2), true); // equal values
			assertEquals(check_is_less_than_or_equal(-1, 0), true);
			assertEquals(check_is_less_than_or_equal(0, 0), true); // equal values
			assertEquals(check_is_less_than_or_equal(-100, -50), true);
		}
	);

	await t.step("should return false when num is greater than threshold", () => {
		assertEquals(check_is_less_than_or_equal(3, 2), false);
		assertEquals(check_is_less_than_or_equal(100, 50), false);
		assertEquals(check_is_less_than_or_equal(0, -1), false);
	});
});

Deno.test("check_is_not_less_than_or_equal", async (t) => {
	await t.step("should return true when num is greater than threshold", () => {
		assertEquals(check_is_not_less_than_or_equal(3, 2), true);
		assertEquals(check_is_not_less_than_or_equal(100, 50), true);
		assertEquals(check_is_not_less_than_or_equal(0, -1), true);
	});

	await t.step(
		"should return false when num is less than or equal to threshold",
		() => {
			assertEquals(check_is_not_less_than_or_equal(1, 2), false);
			assertEquals(check_is_not_less_than_or_equal(2, 2), false); // equal values
			assertEquals(check_is_not_less_than_or_equal(-1, 0), false);
			assertEquals(check_is_not_less_than_or_equal(0, 0), false); // equal values
			assertEquals(check_is_not_less_than_or_equal(-100, -50), false);
		}
	);
});
