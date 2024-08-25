import { assertEquals } from "../../deps.ts";
import { checkIsNotSealed, checkIsSealed } from "./main.ts";

Deno.test("checkIsSealed", async (t) => {
  await t.step("should return true for sealed objects", () => {
    const sealedObj = Object.seal({ key: "value" });
    assertEquals(checkIsSealed(sealedObj), true);
  });

  await t.step("should return false for non-sealed objects", () => {
    const obj = { key: "value" };
    assertEquals(checkIsSealed(obj), false);
  });

  await t.step("should return true for sealed empty objects", () => {
    const sealedEmptyObj = Object.seal({});
    assertEquals(checkIsSealed(sealedEmptyObj), true); // Sealed empty object
  });
});

Deno.test("checkIsNotSealed", async (t) => {
  await t.step("should return true for non-sealed objects", () => {
    const obj = { key: "value" };
    assertEquals(checkIsNotSealed(obj), true);
  });

  await t.step("should return false for sealed objects", () => {
    const sealedObj = Object.seal({ key: "value" });
    assertEquals(checkIsNotSealed(sealedObj), false);
  });

  await t.step("should return false for sealed empty objects", () => {
    const sealedEmptyObj = Object.seal({});
    assertEquals(checkIsNotSealed(sealedEmptyObj), false); // Sealed empty object
  });
});
