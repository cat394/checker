import { assertEquals } from "../../deps.ts";
import { check_is_not_UUID_format, check_is_UUID_format } from "./main.ts";

Deno.test("checkIsUUIDFormat", async (t) => {
  await t.step("should return true for valid UUIDs", () => {
    assertEquals(
      check_is_UUID_format("123e4567-e89b-12d3-a456-426614174000"),
      true,
    );
    assertEquals(
      check_is_UUID_format("550e8400-e29b-41d4-a716-446655440000"),
      true,
    );

    // only numbers
    assertEquals(
      check_is_UUID_format("12345678-1234-1234-1234-123456789012"),
      true,
    );
  });

  await t.step("should return false for invalid UUIDs", () => {
    assertEquals(check_is_UUID_format("invalid-uuid"), false);

    // shortened UUID
    assertEquals(
      check_is_UUID_format("123e4567-e89b-12d3-a456-42661417400"),
      false,
    );
  });
});

Deno.test("checkIsNotUUIDFormat", async (t) => {
  await t.step("should return true for invalid UUIDs", () => {
    assertEquals(check_is_not_UUID_format("invalid-uuid"), true);
    assertEquals(
      check_is_not_UUID_format("123e4567-e89b-12d3-a456-42661417400"),
      true,
    );
  });

  await t.step("should return false for valid UUIDs", () => {
    assertEquals(
      check_is_not_UUID_format("123e4567-e89b-12d3-a456-426614174000"),
      false,
    );
    assertEquals(
      check_is_not_UUID_format("550e8400-e29b-41d4-a716-446655440000"),
      false,
    );

    assertEquals(
      check_is_not_UUID_format("12345678-1234-1234-1234-123456789012"),
      false,
    );
  });
});
