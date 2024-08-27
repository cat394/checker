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

### `checkIsNull`

Checks if the given value is strictly `null`.

```ts
checkIsNull(null); // true
checkIsNull(undefined); // false
```

### `checkIsNotNull`

Checks if the given value is not strictly `null`.

```ts
checkIsNotNull(undefined); // true
checkIsNotNull(null); // false
```

### `checkIsUndefined`

Checks if the given value is strictly `undefined`.

```ts
checkIsUndefined(undefined); // true
checkIsUndefined(null); // false
```

### `checkIsNotUndefined`

Checks if the given value is not strictly `undefined`.

```ts
checkIsNotUndefined(null); // true
checkIsNotUndefined(undefined); // false
```

### `checkIsNullish`

Checks if the given value is nullish (either `null` or `undefined`).

```ts
checkIsNullish(null); // true
checkIsNullish(undefined); // true
checkIsNullish(0); // false
```

### `checkIsNotNullish`

Checks if the given value is not nullish (neither `null` nor `undefined`).

```ts
checkIsNotNullish(0); // true
checkIsNotNullish(null); // false
checkIsNotNullish(undefined); // false
```

## License

MIT License
