import { assertEquals } from "../../deps.ts";
import { checkIsFrozen, checkIsNotFrozen } from "./main.ts";

Deno.test("checkIsFrozen", async (t) => {
  await t.step("should return true for frozen objects", () => {
    const frozenObj = Object.freeze({ key: "value" });
    assertEquals(checkIsFrozen(frozenObj), true);
  });

  await t.step("should return false for non-frozen objects", () => {
    const obj = { key: "value" };
    assertEquals(checkIsFrozen(obj), false);
  });

  await t.step("should return true for frozen empty objects", () => {
    const frozenEmptyObj = Object.freeze({});
    assertEquals(checkIsFrozen(frozenEmptyObj), true); // Frozen empty object
  });
});

Deno.test("checkIsNotFrozen", async (t) => {
  await t.step("should return true for non-frozen objects", () => {
    const obj = { key: "value" };
    assertEquals(checkIsNotFrozen(obj), true);
  });

  await t.step("should return false for frozen objects", () => {
    const frozenObj = Object.freeze({ key: "value" });
    assertEquals(checkIsNotFrozen(frozenObj), false);
  });

  await t.step("should return false for frozen empty objects", () => {
    const frozenEmptyObj = Object.freeze({});
    assertEquals(checkIsNotFrozen(frozenEmptyObj), false); // Frozen empty object
  });
});
