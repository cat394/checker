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

### `check_is_array`

Checks if the given value is an array.

```ts
check_is_array([1, 2, 3]); // true
check_is_array(42); // false
```

### `check_is_not_array`

Checks if the given value is not an array.

```ts
check_is_not_array(42); // true
check_is_not_array([1, 2, 3]); // false
```

### `check_is_empty`

Checks if the given array is empty.

```ts
check_is_empty([]); // true
check_is_empty([1, 2, 3]); // false
```

### `check_is_not_empty`

Checks if the given array is not empty.

```ts
check_is_not_empty([1, 2, 3]); // true
check_is_not_empty([]); // false
```

### `check_is_first_iteration`

Checks if the given index corresponds to the first iteration.

```ts
check_is_first_iteration(0); // true
check_is_first_iteration(1); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (check_is_first_iteration(index)) {
    return number + 1;
  }
  return number;
});
// => [2, 2, 3]
```

### `check_is_not_first_iteration`

Checks if the given index does not correspond to the first iteration.

```ts
check_is_not_first_iteration(1); // true
check_is_not_first_iteration(0); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (check_is_not_first_iteration(index)) {
    return number + 1;
  }
  return number;
});
// => [1, 3, 4]
```

### `check_array_has_value`

Checks if an array contains a specific value.

```ts
check_array_has_value([1, 2, 3], 2); // true
check_array_has_value([1, 2, 3], 4); // false
```

### `check_array_does_not_have_value`

Checks if an array does not contain a specific value.

```ts
check_array_does_not_have_value([1, 2, 3], 4); // true
check_array_does_not_have_value([1, 2, 3], 2); // false
```

### `check_is_last_iteration`

Checks if the given index is the last iteration in the array.

```ts
check_is_last_iteration(2, [10, 20, 30]); // true
check_is_last_iteration(1, [10, 20, 30]); // false
```

### `check_is_not_last_iteration`

Checks if the given index is not the last iteration in the array.

```ts
check_is_not_last_iteration(1, [10, 20, 30]); // true
check_is_not_last_iteration(2, [10, 20, 30]); // false
```

### `check_is_specific_iteration`

Checks if the current iteration index matches a specific target index.

```ts
check_is_specific_iteration(3, 3); // true
check_is_specific_iteration(2, 3); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (check_is_specific_iteration(index, 1)) {
    return number + 1;
  }
  return number;
});
// => [1, 3, 3]
```

### `check_is_not_specific_iteration`

Checks if the current iteration index does not match a specific target index.

```ts
check_is_not_specific_iteration(2, 3); // true
check_is_not_specific_iteration(3, 3); // false
```

```ts
const numbers = [1, 2, 3];

numbers.map((number, index) => {
  if (check_is_specific_iteration(index, 1)) {
    return number + 1;
  }
  return number;
});
// => [2, 2, 4]
```

## License

MIT License
