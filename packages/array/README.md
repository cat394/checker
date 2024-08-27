# @checker/array

A TypeScript utility library providing a comprehensive set of functions to
validate, verify, and perform checks on array. This package provides simple and
effective tools to help you manage arrays and iteration logic with ease.

## Installation

NPM:

```bash
npx jsr add @checker/array
```

PNPM:

```bash
pnpm dlx jsr add @checker/array
```

Deno:

```bash
deno add @checker/array
```

Yarn:

```bash
yarn dlx jsr add @checker/array
```

Bun:

```bash
bunx jsr add @checker/array
```

## Functions

### `checkIsArray`

Checks if the given value is an array.

```ts
checkIsArray([1, 2, 3]); // true
checkIsArray(42); // false
```

### `checkIsNotArray`

Checks if the given value is not an array.

```ts
checkIsNotArray(42); // true
checkIsNotArray([1, 2, 3]); // false
```

### `checkIsEmptyArray`

Checks if the given array is empty.

```ts
checkIsEmptyArray([]); // true
checkIsEmptyArray([1, 2, 3]); // false
```

### `checkIsNotEmptyArray`

Checks if the given array is not empty.

```ts
checkIsNotEmptyArray([1, 2, 3]); // true
checkIsNotEmptyArray([]); // false
```

### `checkIsFirstIteration`

Checks if the given index corresponds to the first iteration.

```ts
checkIsFirstIteration(0); // true
checkIsFirstIteration(1); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (checkIsFirstIteration(index)) {
    return number + 1;
  }
  return number;
});
// => [2, 2, 3]
```

### `checkIsNotFirstIteration`

Checks if the given index does not correspond to the first iteration.

```ts
checkIsNotFirstIteration(1); // true
checkIsNotFirstIteration(0); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (checkIsNotFirstIteration(index)) {
    return number + 1;
  }
  return number;
});
// => [1, 3, 4]
```

### `checkArrayHasValue`

Checks if an array contains a specific value.

```ts
checkArrayHasValue([1, 2, 3], 2); // true
checkArrayHasValue([1, 2, 3], 4); // false
```

### `checkArrayDoesNotHaveValue`

Checks if an array does not contain a specific value.

```ts
checkArrayDoesNotHaveValue([1, 2, 3], 4); // true
checkArrayDoesNotHaveValue([1, 2, 3], 2); // false
```

### `checkIsLastIteration`

Checks if the given index is the last iteration in the array.

```ts
checkIsLastIteration(2, [10, 20, 30]); // true
checkIsLastIteration(1, [10, 20, 30]); // false
```

### `checkIsNotLastIteration`

Checks if the given index is not the last iteration in the array.

```ts
checkIsNotLastIteration(1, [10, 20, 30]); // true
checkIsNotLastIteration(2, [10, 20, 30]); // false
```

### `checkIsSpecificIteration`

Checks if the current iteration index matches a specific target index.

```ts
checkIsSpecificIteration(3, 3); // true
checkIsSpecificIteration(2, 3); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (checkIsSpecificIteration(index, 1)) {
    return number + 1;
  }
  return number;
});
// => [1, 3, 3]
```

### `checkIsNotSpecificIteration`

Checks if the current iteration index does not match a specific target index.

```ts
checkIsNotSpecificIteration(2, 3); // true
checkIsNotSpecificIteration(3, 3); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (checkIsSpecificIteration(index, 1)) {
    return number + 1;
  }
  return number;
});
// => [2, 2, 4]
```

## License

MIT License
