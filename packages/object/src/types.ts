export type EmptyObject = Record<PropertyKey, never>;
export type InstancedClass = new (...args: unknown[]) => unknown;
