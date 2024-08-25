import { assertEquals } from "../../deps.ts";
import {
	checkDoesNotHaveSpecialCharacter,
	checkHasSpecialCharacter,
} from "./main.ts";

Deno.test("checkHasSpecialCharacter", async (t) => {
	await t.step("should return true for strings with special characters", () => {
		assertEquals(checkHasSpecialCharacter("hello!"), true);
		assertEquals(checkHasSpecialCharacter("password#1"), true);
		assertEquals(checkHasSpecialCharacter("welcome@home"), true);
		assertEquals(checkHasSpecialCharacter("$100"), true);
		assertEquals(checkHasSpecialCharacter("what's up?"), true);
		assertEquals(checkHasSpecialCharacter("<tag>"), true);
	});

	await t.step(
		"should return false for strings without special characters",
		() => {
			assertEquals(checkHasSpecialCharacter("hello"), false);
			assertEquals(checkHasSpecialCharacter("password1"), false);
			assertEquals(checkHasSpecialCharacter("welcomehome"), false);
			assertEquals(checkHasSpecialCharacter("hello123"), false);
			assertEquals(checkHasSpecialCharacter("justText"), false);
		}
	);
});

Deno.test("checkNotHaveSpecialCharacter", async (t) => {
	await t.step(
		"should return true for strings without special characters",
		() => {
			assertEquals(checkDoesNotHaveSpecialCharacter("hello"), true);
			assertEquals(checkDoesNotHaveSpecialCharacter("password1"), true);
			assertEquals(checkDoesNotHaveSpecialCharacter("welcomehome"), true);
			assertEquals(checkDoesNotHaveSpecialCharacter("hello123"), true);
			assertEquals(checkDoesNotHaveSpecialCharacter("justText"), true);
		}
	);

	await t.step(
		"should return false for strings with special characters",
		() => {
			assertEquals(checkDoesNotHaveSpecialCharacter("hello!"), false);
			assertEquals(checkDoesNotHaveSpecialCharacter("password#1"), false);
			assertEquals(checkDoesNotHaveSpecialCharacter("welcome@home"), false);
			assertEquals(checkDoesNotHaveSpecialCharacter("$100"), false);
			assertEquals(checkDoesNotHaveSpecialCharacter("what's up?"), false);
			assertEquals(checkDoesNotHaveSpecialCharacter("<tag>"), false);
		}
	);
});
