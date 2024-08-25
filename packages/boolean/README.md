# @checker/boolean

A collection of Typescript utility functions for performing common boolean
checks. This package provides tools to help you manage boolean values,
truthiness, and falsiness in your code with ease.

## Functions

### `checkIsBoolean`

Checks if the given value is a boolean.

```ts
checkIsBoolean(true); // true
checkIsBoolean("string"); // false
```

### `checkIsNotBoolean`

Checks if the given value is not a boolean.

```ts
checkIsNotBoolean("string"); // true
checkIsNotBoolean(true); // false
```

### `checkIsFalse`

Checks if the given value is strictly `false`.

```ts
checkIsFalse(false); // true
checkIsFalse(0); // false
```

### `checkIsNotFalse`

Checks if the given value is not strictly `false`.

```ts
checkIsNotFalse(0); // true
checkIsNotFalse(false); // false
```

### `checkIsTruthy`

Checks if the given value is truthy.

```ts
checkIsTruthy(1); // true
checkIsTruthy(0); // false
```

### `checkIsNotTruthy`

Checks if the given value is not truthy (i.e., falsy).

```ts
checkIsNotTruthy(0); // true
checkIsNotTruthy(1); // false
```

### `checkIsFalsy`

Checks if the given value is falsy.

```ts
checkIsFalsy(0); // true
checkIsFalsy(1); // false
```

### `checkIsNotFalsy`

Checks if the given value is not falsy.

```ts
checkIsNotFalsy(1); // true
checkIsNotFalsy(0); // false
```

### `checkIsTrue`

Checks if the given value is strictly `true`.

```ts
checkIsTrue(true); // true
checkIsTrue(1); // false
```

### `checkIsNotTrue`

Checks if the given value is not strictly `true`.

```ts
checkIsNotTrue(0); // true
checkIsNotTrue(true); // false
```

## License

MIT License
