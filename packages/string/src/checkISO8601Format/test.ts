import { assertEquals } from "../../deps.ts";
import { checkIsISO8601Format, checkIsNotISO8601Format } from "./main.ts";

Deno.test("checkIsISO8601Format", async (t) => {
  await t.step("should return true for valid ISO 8601 strings", () => {
    assertEquals(checkIsISO8601Format("2023-08-30T10:30:00Z"), true);
    assertEquals(checkIsISO8601Format("2023-08-30T10:30:00+02:00"), true);
  });

  await t.step("should return false for invalid ISO 8601 strings", () => {
    assertEquals(checkIsISO8601Format("08/30/2023"), false);
    assertEquals(checkIsISO8601Format("2023-08-30 10:30:00"), false);
  });
});

Deno.test("checkIsNotISO8601Format", async (t) => {
  await t.step("should return true for invalid ISO 8601 strings", () => {
    assertEquals(checkIsNotISO8601Format("08/30/2023"), true);
    assertEquals(checkIsNotISO8601Format("2023-08-30 10:30:00"), true);
  });

  await t.step("should return false for valid ISO 8601 strings", () => {
    assertEquals(checkIsNotISO8601Format("2023-08-30T10:30:00Z"), false);
    assertEquals(checkIsNotISO8601Format("2023-08-30T10:30:00+02:00"), false);
  });
});
