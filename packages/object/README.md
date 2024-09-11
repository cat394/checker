# @checker/object

A TypeScript utility library that provides a variety of functions for validating
and inspecting objects. This library includes utilities for deep equality
checks, verifying object properties like emptiness, sealed or frozen states, and
more. With clear and descriptive function names, this library is ideal for
developers looking to perform robust object validations in their TypeScript
projects.

## Installation

NPM:

```bash
npx jsr add @checker/object
```

PNPM:

```bash
pnpm dlx jsr add @checker/object
```

Deno:

```bash
deno add @checker/object
```

Yarn:

```bash
yarn dlx jsr add @checker/object
```

Bun:

```bash
bunx jsr add @checker/object
```

## Functions

### `check_is_deep_equal`

Checks if two objects are deeply equal.

```ts
check_is_deep_equal({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
check_is_deep_equal({ a: 1, b: 2 }, { a: 2, b: 3 }); // false
```

### `check_is_not_deep_equal`

```ts
check_is_not_deep_equal({ a: 1, b: 2 }, { a: 2, b: 3 }); // true
check_is_not_deep_equal({ a: 1, b: 2 }, { a: 1, b: 2 }); // false
```

### `check_is_empty_object`

Checks if a given object is an empty plain object.

```ts
check_is_empty_object({}); // true

check_is_empty_object(new Date()); // false
check_is_empty_object({ a: 1 }); // false
```

### `check_is_not_empty_object`

Checks if a given object is not an empty plain object.

```ts
check_is_not_empty_object(new Date()); // true
check_is_not_empty_object({ a: 1 }); // true

check_is_not_empty_object({}); // false
```

### `check_key_exists_in_object`

Checks if a given key exists in an object.

> [!NOTE]
> This function does not type guard, if you need type guarding please use the
> `key in object` syntax.

```ts
check_key_exists_in_object({ a: 1, b: 2 }, "a"); // true, The key 'a' exists in the object
check_key_exists_in_object({ a: 1, b: 2 }, "c"); // false
```

```ts
type Obj = { a: 1; b: 2 } | { c: 3; d: 4 };

const obj = {} as Obj;

if ("c" in obj) {
  obj; // obj type is { c: 3, d: 4 }
}

if (check_key_exists_in_object(obj, "c")) {
  obj; // obj type is Obj
}
```

### `check_key_does_not_exist_in_object`

Checks if a given key does not exist in an object.

```ts
check_key_does_not_exist_in_object({ a: 1, b: 2 }, "c"); // true
check_key_does_not_exist_in_object({ a: 1, b: 2 }, "a"); // false
```

### `check_is_frozen`

Checks if a given object is frozen.

```ts
check_is_frozen(Object.freeze({ a: 1 })); // true
check_is_frozen({ a: 1 }); // false
```

### `check_is_not_frozen`

Checks if a given object is not frozen.

```ts
check_is_not_frozen({ a: 1 }); // true
check_is_not_frozen(Object.freeze({ a: 1 })); // false
```

### `check_is_object`

Checks if a given value is an object.

```ts
check_is_object({ a: 1 }); // true

check_is_object(null); // false
check_is_object("string"); // false
```

### `check_is_not_object`

Checks if a given value is not an object.

```ts
check_is_not_object("string"); // true

check_is_not_object({ a: 1 }); // false
```

### `check_is_sealed`

Checks if a given object is sealed.

```ts
check_is_sealed(Object.seal({ a: 1 })); // true
check_is_sealed({ a: 1 }); // false
```

### `check_is_not_sealed`

Checks if a given object is not sealed.

```ts
check_is_not_sealed({ a: 1 }); // true
check_is_not_sealed(Object.seal({ a: 1 })); // false
```

### Licence

MIT
