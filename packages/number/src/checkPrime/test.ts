import { assertEquals } from "../../deps.ts";
import { check_is_prime, check_is_not_prime } from "./main.ts";

Deno.test("check_is_prime", async (t) => {
	await t.step("should return true for prime numbers", () => {
		assertEquals(check_is_prime(2), true); // 2 is a prime number
		assertEquals(check_is_prime(3), true); // 3 is a prime number
		assertEquals(check_is_prime(5), true); // 5 is a prime number
		assertEquals(check_is_prime(7), true); // 7 is a prime number
		assertEquals(check_is_prime(11), true); // 11 is a prime number
		assertEquals(check_is_prime(13), true); // 13 is a prime number
		assertEquals(check_is_prime(17), true); // 17 is a prime number
	});

	await t.step("should return false for non-prime numbers", () => {
		assertEquals(check_is_prime(1), false); // 1 is not a prime number
		assertEquals(check_is_prime(4), false); // 4 is divisible by 2
		assertEquals(check_is_prime(6), false); // 6 is divisible by 2 and 3
		assertEquals(check_is_prime(8), false); // 8 is divisible by 2
		assertEquals(check_is_prime(9), false); // 9 is divisible by 3
		assertEquals(check_is_prime(10), false); // 10 is divisible by 2 and 5
	});
});

Deno.test("check_is_not_prime", async (t) => {
	await t.step("should return true for non-prime numbers", () => {
		assertEquals(check_is_not_prime(1), true); // 1 is not a prime number
		assertEquals(check_is_not_prime(4), true); // 4 is divisible by 2
		assertEquals(check_is_not_prime(6), true); // 6 is divisible by 2 and 3
		assertEquals(check_is_not_prime(8), true); // 8 is divisible by 2
		assertEquals(check_is_not_prime(9), true); // 9 is divisible by 3
		assertEquals(check_is_not_prime(10), true); // 10 is divisible by 2 and 5
	});

	await t.step("should return false for prime numbers", () => {
		assertEquals(check_is_not_prime(2), false); // 2 is a prime number
		assertEquals(check_is_not_prime(3), false); // 3 is a prime number
		assertEquals(check_is_not_prime(5), false); // 5 is a prime number
		assertEquals(check_is_not_prime(7), false); // 7 is a prime number
		assertEquals(check_is_not_prime(11), false); // 11 is a prime number
		assertEquals(check_is_not_prime(13), false); // 13 is a prime number
		assertEquals(check_is_not_prime(17), false); // 17 is a prime number
	});
});
