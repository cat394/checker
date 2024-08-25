import { assertEquals } from "../../deps.ts";
import { checkIsBinary, checkIsNotBinary } from "./main.ts";

Deno.test("checkStringIsBinary", async (t) => {
  await t.step("should return true for binary strings", () => {
    assertEquals(checkIsBinary("0b101"), true); // simple binary
    assertEquals(checkIsBinary("0B1101"), true); // capital B
    assertEquals(checkIsBinary("0b0"), true); // single digit binary
    assertEquals(checkIsBinary("0b11111111"), true); // multiple digits binary
  });

  await t.step("should return false for non-binary strings", () => {
    assertEquals(checkIsBinary("101"), false); // missing binary prefix
    assertEquals(checkIsBinary("0b102"), false); // invalid binary digits
    assertEquals(checkIsBinary("0b"), false); // only prefix, no digits
    assertEquals(checkIsBinary("0b "), false); // space after prefix
    assertEquals(checkIsBinary(""), false); // empty string
    assertEquals(checkIsBinary("0bxyz"), false); // non-binary characters
  });
});

Deno.test("checkStringIsNotBinary", async (t) => {
  await t.step("should return true for non-binary strings", () => {
    assertEquals(checkIsNotBinary("101"), true); // missing binary prefix
    assertEquals(checkIsNotBinary("0b102"), true); // invalid binary digits
    assertEquals(checkIsNotBinary("0b"), true); // only prefix, no digits
    assertEquals(checkIsNotBinary("0b "), true); // space after prefix
    assertEquals(checkIsNotBinary(""), true); // empty string
    assertEquals(checkIsNotBinary("0bxyz"), true); // non-binary characters
  });

  await t.step("should return false for binary strings", () => {
    assertEquals(checkIsNotBinary("0b101"), false); // simple binary
    assertEquals(checkIsNotBinary("0B1101"), false); // capital B
    assertEquals(checkIsNotBinary("0b0"), false); // single digit binary
    assertEquals(checkIsNotBinary("0b11111111"), false); // multiple digits binary
  });
});
