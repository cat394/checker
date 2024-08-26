/**
 * Represents an empty object with no properties.
 */
export type EmptyObject = Record<PropertyKey, never>;

/**
 * Represents a constructor type.
 */
export type Constructor = new (...args: unknown[]) => unknown;
