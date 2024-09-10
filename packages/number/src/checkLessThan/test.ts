import { assertEquals } from "../../deps.ts";
import { check_is_less_than, check_is_not_less_than } from "./main.ts";

Deno.test("check_is_less_than", async (t) => {
	await t.step("should return true when num is less than threshold", () => {
		assertEquals(check_is_less_than(1, 5), true);
		assertEquals(check_is_less_than(-1, 0), true);
		assertEquals(check_is_less_than(3.14, 10), true);
		assertEquals(check_is_less_than(-10, -5), true);
	});

	await t.step(
		"should return false when num is not less than threshold",
		() => {
			assertEquals(check_is_less_than(5, 1), false);
			assertEquals(check_is_less_than(0, 0), false); // equal values
			assertEquals(check_is_less_than(10, 3.14), false);
			assertEquals(check_is_less_than(-5, -10), false);
		}
	);
});

Deno.test("check_is_not_less_than", async (t) => {
	await t.step("should return true when num is not less than threshold", () => {
		assertEquals(check_is_not_less_than(5, 1), true);
		assertEquals(check_is_not_less_than(0, 0), true); // equal values
		assertEquals(check_is_not_less_than(10, 3.14), true);
		assertEquals(check_is_not_less_than(-5, -10), true);
	});

	await t.step("should return false when num is less than threshold", () => {
		assertEquals(check_is_not_less_than(1, 5), false);
		assertEquals(check_is_not_less_than(-1, 0), false);
		assertEquals(check_is_not_less_than(3.14, 10), false);
		assertEquals(check_is_not_less_than(-10, -5), false);
	});
});
