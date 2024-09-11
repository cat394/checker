# @checker/boolean

A TypeScript utility library providing a comprehensive set of functions to
validate, verify, and perform checks on boolean. This package provides tools to
help you manage boolean values, truthiness, and falsiness in your code with
ease.

## Installation

NPM:

```bash
npx jsr add @checker/boolean
```

PNPM:

```bash
pnpm dlx jsr add @checker/boolean
```

Deno:

```bash
deno add @checker/boolean
```

Yarn:

```bash
yarn dlx jsr add @checker/boolean
```

Bun:

```bash
bunx jsr add @checker/boolean
```

## Functions

### `check_is_boolean`

Checks if the given value is a boolean.

```ts
check_is_boolean(true); // true
check_is_boolean("string"); // false
```

### `check_is_not_boolean`

Checks if the given value is not a boolean.

```ts
check_is_not_boolean("string"); // true
check_is_not_boolean(true); // false
```

### `check_is_false`

Checks if the given value is strictly `false`.

```ts
check_is_false(false); // true
check_is_false(0); // false
```

### `check_is_not_false`

Checks if the given value is not strictly `false`.

```ts
check_is_not_false(0); // true
check_is_not_false(false); // false
```

### `check_is_truthy`

Checks if the given value is truthy.

```ts
check_is_truthy(1); // true
check_is_truthy(0); // false
```

### `check_is_not_truthy`

Checks if the given value is not truthy (i.e., falsy).

```ts
check_is_not_truthy(0); // true
check_is_not_truthy(1); // false
```

### `check_is_falsy`

Checks if the given value is falsy.

```ts
check_is_falsy(0); // true
check_is_falsy(1); // false
```

### `check_is_not_falsy`

Checks if the given value is not falsy.

```ts
check_is_not_falsy(1); // true
check_is_not_falsy(0); // false
```

### `check_is_true`

Checks if the given value is strictly `true`.

```ts
check_is_true(true); // true
check_is_true(1); // false
```

### `check_is_not_true`

Checks if the given value is not strictly `true`.

```ts
check_is_not_true(0); // true
check_is_not_true(true); // false
```

## License

MIT License
