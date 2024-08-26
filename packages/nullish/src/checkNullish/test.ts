import { assertEquals, assertType, type IsExact } from "../../deps.ts";
import { checkIsNotNullish, checkIsNullish } from "./main.ts";

Deno.test("checkIsNullish", async (t) => {
	await t.step("should return true for nullish values", () => {
		assertEquals(checkIsNullish(null), true);
		assertEquals(checkIsNullish(undefined), true);
	});

	await t.step("should return false for non-nullish values", () => {
		assertEquals(checkIsNullish("string"), false);
		assertEquals(checkIsNullish(123), false);
		assertEquals(checkIsNullish([]), false);
		assertEquals(checkIsNullish({}), false);
	});

	await t.step("should narrow nullish types", () => {
		type Value = string | null | undefined;
		const value = {} as Value;
		if (checkIsNullish(value)) {
			assertType<IsExact<typeof value, null | undefined>>(true);
		}
	});
});

Deno.test("checkIsNotNullish", async (t) => {
	await t.step("should return true for non-nullish values", () => {
		assertEquals(checkIsNotNullish("string"), true);
		assertEquals(checkIsNotNullish(123), true);
		assertEquals(checkIsNotNullish([]), true);
		assertEquals(checkIsNotNullish({}), true);
	});

	await t.step("should return false for nullish values", () => {
		assertEquals(checkIsNotNullish(null), false);
		assertEquals(checkIsNotNullish(undefined), false);
	});

  await t.step("should exclude nullish types", () => {
    type Value = string | null | undefined;
    const value = {} as Value;
    if (checkIsNotNullish(value)) {
      assertType<IsExact<typeof value, string>>(true);
    }
  })
});
