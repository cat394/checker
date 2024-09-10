import { assertEquals } from "../../deps.ts";
import { check_is_divisor, check_is_not_divisor } from "./main.ts";

Deno.test("check_is_divisor", async (t) => {
	await t.step("should return true when num is a divisor of target", () => {
		assertEquals(check_is_divisor(1, 10), true);
		assertEquals(check_is_divisor(2, 10), true);
		assertEquals(check_is_divisor(5, 10), true);
		assertEquals(check_is_divisor(10, 100), true);
		assertEquals(check_is_divisor(-2, 10), true);
	});

	await t.step(
		"should return false when num is not a divisor of target",
		() => {
			assertEquals(check_is_divisor(3, 10), false);
			assertEquals(check_is_divisor(7, 10), false);
			assertEquals(check_is_divisor(11, 10), false);
			assertEquals(check_is_divisor(4, 10), false);
			assertEquals(check_is_divisor(-3, 10), false);
		}
	);
});

Deno.test("check_is_not_divisor", async (t) => {
	await t.step("should return true when num is not a divisor of target", () => {
		assertEquals(check_is_not_divisor(3, 10), true);
		assertEquals(check_is_not_divisor(7, 10), true);
		assertEquals(check_is_not_divisor(11, 10), true);
		assertEquals(check_is_not_divisor(4, 10), true);
		assertEquals(check_is_not_divisor(-3, 10), true);
	});

	await t.step("should return false when num is a divisor of target", () => {
		assertEquals(check_is_not_divisor(1, 10), false);
		assertEquals(check_is_not_divisor(2, 10), false);
		assertEquals(check_is_not_divisor(5, 10), false);
		assertEquals(check_is_not_divisor(10, 100), false);
		assertEquals(check_is_not_divisor(-2, 10), false);
	});
});
