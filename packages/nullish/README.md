# @checker/nullish

A TypeScript utility library providing a comprehensive set of functions to
validate, verify, and perform checks on nullish. This package provides tools to
help you manage `null`, `undefined`, and nullish values in your code with ease.

## Installation

NPM:

```bash
npx jsr add @checker/nullish
```

PNPM:

```bash
pnpm dlx jsr add @checker/nullish
```

Deno:

```bash
deno add @checker/nullish
```

Yarn:

```bash
yarn dlx jsr add @checker/nullish
```

Bun:

```bash
bunx jsr add @checker/nullish
```

## Functions

### `check_is_null`

Checks if the given value is strictly `null`.

```ts
check_is_null(null); // true
check_is_null(undefined); // false
```

### `check_is_not_null`

Checks if the given value is not strictly `null`.

```ts
check_is_not_null(undefined); // true
check_is_not_null(null); // false
```

### `check_is_undefined`

Checks if the given value is strictly `undefined`.

```ts
check_is_undefined(undefined); // true
check_is_undefined(null); // false
```

### `check_is_not_undefined`

Checks if the given value is not strictly `undefined`.

```ts
check_is_not_undefined(null); // true
check_is_not_undefined(undefined); // false
```

### `check_is_nullish`

Checks if the given value is nullish (either `null` or `undefined`).

```ts
check_is_nullish(null); // true
check_is_nullish(undefined); // true
check_is_nullish(0); // false
```

### `check_is_not_nullish`

Checks if the given value is not nullish (neither `null` nor `undefined`).

```ts
check_is_not_nullish(0); // true
check_is_not_nullish(null); // false
check_is_not_nullish(undefined); // false
```

## License

MIT License
