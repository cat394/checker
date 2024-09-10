import { assertEquals } from "../../deps.ts";
import {
	check_is_geometric_sequence,
	check_is_not_geometric_sequence,
} from "./main.ts";

Deno.test("checkIsGeometricSequence", async (t) => {
	await t.step("should return true for valid geometric sequences", () => {
		assertEquals(check_is_geometric_sequence([2, 4, 8, 16], 2), true); // ratio of 2
		assertEquals(check_is_geometric_sequence([3, 9, 27], 3), true); // ratio of 3
		assertEquals(check_is_geometric_sequence([5, 25, 125], 5), true); // ratio of 5
		assertEquals(check_is_geometric_sequence([1, 0.1, 0.01, 0.001], 0.1), true); // ratio of 0.1
	});

	await t.step("should return false for invalid geometric sequences", () => {
		assertEquals(check_is_geometric_sequence([2, 4, 9, 16], 2), false); // 9 does not fit the ratio of 2
		assertEquals(check_is_geometric_sequence([3, 9, 28], 3), false); // 28 does not fit the ratio of 3
		assertEquals(check_is_geometric_sequence([5, 20, 125], 5), false); // 20 does not fit the ratio of 5
		assertEquals(
			check_is_geometric_sequence([1, 0.2, 0.01, 0.001], 0.1),
			false
		); // 0.2 does not fit the ratio of 0.1
	});

	await t.step(
		"should return false for sequences with less than 2 numbers",
		() => {
			assertEquals(check_is_geometric_sequence([1], 2), false); // single element
			assertEquals(check_is_geometric_sequence([], 2), false); // empty array
		}
	);
});

Deno.test("checkIsNotGeometricSequence", async (t) => {
	await t.step("should return true for invalid geometric sequences", () => {
		assertEquals(check_is_not_geometric_sequence([2, 4, 9, 16], 2), true); // 9 does not fit the ratio of 2
		assertEquals(check_is_not_geometric_sequence([3, 9, 28], 3), true); // 28 does not fit the ratio of 3
		assertEquals(check_is_not_geometric_sequence([5, 20, 125], 5), true); // 20 does not fit the ratio of 5
		assertEquals(
			check_is_not_geometric_sequence([1, 0.2, 0.01, 0.001], 0.1),
			true
		); // 0.2 does not fit the ratio of 0.1
		assertEquals(check_is_not_geometric_sequence([1], 2), true); // single element
		assertEquals(check_is_not_geometric_sequence([], 2), true); // empty array
	});

	await t.step("should return false for valid geometric sequences", () => {
		assertEquals(check_is_not_geometric_sequence([2, 4, 8, 16], 2), false); // ratio of 2
		assertEquals(check_is_not_geometric_sequence([3, 9, 27], 3), false); // ratio of 3
		assertEquals(check_is_not_geometric_sequence([5, 25, 125], 5), false); // ratio of 5
		assertEquals(
			check_is_not_geometric_sequence([1, 0.1, 0.01, 0.001], 0.1),
			false
		); // ratio of 0.1
	});
});
