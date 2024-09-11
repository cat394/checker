# @checker/number

A TypeScript utility library providing a comprehensive set of functions to
validate, verify, and perform checks on numbers. This library includes functions
to determine divisibility, check number properties like evenness or primality,
and assess numeric ranges, among others. Designed with clean, descriptive
function names, it’s an essential toolkit for any TypeScript project dealing
with numeric validations.

## Installation

NPM:

```bash
npx jsr add @checker/number
```

PNPM:

```bash
pnpm dlx jsr add @checker/number
```

Deno:

```bash
deno add @checker/number
```

Yarn:

```bash
yarn dlx jsr add @checker/number
```

Bun:

```bash
bunx jsr add @checker/number
```

## Functions

### `check_is_cleanly_disible`

Checks if a given number is cleanly divisible by a divisor.

```ts
check_is_cleanly_disible(10, 2); // 10 % 2 = 0
check_is_cleanly_disible(10, 3); // 10 % 3 = 1
```

### `check_is_not_cleanly_disible`

Checks if a given number is not cleanly divisible by a divisor.

```ts
check_is_not_cleanly_disible(10, 3); // true, 10 % 3 = 1
check_is_not_cleanly_disible(10, 2); // false, 10 % 2 = 0
```

### `check_is_cube_root`

Checks if a given number is the cube root of a target number.

```ts
check_is_cube_root(3, 27); // true, 3 * 3 * 3 = 27
check_is_cube_root(2, 27); // false, 2 * 2 * 2 = 8 ≠ 27
```

### `check_is_not_cube_root`

Checks if a given number is not the cube root of a target number.

```ts
check_is_not_cube_root(2, 27); // true, 2 * 2 * 2 = 8 ≠ 27
check_is_not_cube_root(3, 27); // false, 3 * 3 * 3 = 27
```

### `check_is_divisor`

Checks if the given number is a divisor of the target number.

```ts
check_is_divisor(3, 9);
// true, 9 % 3 = 0 => 3 is a divisor of 9

check_is_divisor(2, 9);
// false, 9 % 2 = 1 => 2 is not a divisor of 9
```

### `check_is_not_divisor`

Checks if the given number is not a divisor of the target number.

```ts
check_is_not_divisor(2, 9); // true
check_is_not_divisor(3, 9); // false
```

### `check_is_even`

Checks if a given number is even.

```ts
check_is_even(4); // true
check_is_even(3); // false
```

### `check_is_not_even`

Checks if a given number is not even (odd).

```ts
check_is_not_even(3); // false
check_is_not_even(4); // true
```

### `check_is_fibonacci`

Checks if a given number is a Fibonacci number.

```ts
check_is_fibonacci(3); // true
check_is_fibonacci(5); // true

check_is_fibonacci(4); //false
check_is_fibonacci(6); // false
```

### `check_is_not_fibonacci`

Checks if a given number is not a Fibonacci number.

```ts
check_is_not_fibonacci(4); // true
check_is_not_fibonacci(6); // true

check_is_not_fibonacci(3); // false
check_is_not_fibonacci(5); // false
```

### `check_is_float`

Checks if the given number is a floating-point number.

```ts
check_is_float(1.2); // true

check_is_float(1); // false
check_is_float(1.0); // 1.0 % 1 = 0 => false
```

### `check_is_not_float`

Checks if the given number is not a floating-point number.

```ts
check_is_not_float(1); // true
check_is_not_float(1.0); // true

check_is_not_float(1.2); // false
```

### `check_is_geometric_sequence`

Checks if the given array of numbers forms a geometric sequence with the
specified ratio.

```ts
check_is_geometric_sequence([2, 4, 8], 2); // true
check_is_geometric_sequence([2, 4, 9], 2); // false
```

### `check_is_not_geometric_sequence`

Checks if the given array of numbers does not form a geometric sequence with the
specified ratio.

```ts
check_is_not_geometric_sequence([2, 4, 9], 2); // false
check_is_not_geometric_sequence([2, 4, 8], 2); // true
```

### `check_is_greater_than`

Checks if the given number is greater than a specified threshold.

```ts
check_is_greater_than(10, 5); // true, 10 is greater than 5
check_is_greater_than(10, 15); // false, 10 is not greater than 15
```

### `check_is_not_greater_than`

Checks if the given number is not greater than a specified threshold.

```ts
check_is_not_greater_than(10, 15); // true, 10 is not greater than 15
check_is_not_greater_than(10, 10); // false
check_is_not_greater_than(10, 5); // false, 10 is greater than 5
```

### `check_is_greater_than_or_equal`

Checks if a number is greater than or equal to a given threshold.

```ts
check_is_greater_than_or_equal(10, 10); // true, 10 is equal 10
check_is_greater_than_or_equal(10, 5); // true, 10 is greater than 5

check_is_greater_than_or_equal(10, 15); // false, 10 is not greater than 15
```

### `check_is_not_greater_than_or_equal`

Checks if a number is not greater than or equal to a given threshold.

```ts
check_is_not_greater_than_or_equal(10, 15); // true

check_is_not_greater_than_or_equal(10, 10); // false
check_is_not_greater_than_or_equal(10, 5); // false
```

### `check_is_infinity`

Checks if the given value is Infinity.

If you want to know if a string is Infinity, use the
`check_is_infinity_string()` function.

```ts
check_is_infinity(Infinity); // true
check_is_infinity(-Infinity); // true

check_is_infinity("hello"); // false
check_is_infinity(123); // false
```

### `check_is_not_infinity`

Checks if the given value is not Infinity.

```ts
check_is_not_infinity("hello"); // true
check_is_not_infinity(123); // true

check_is_not_infinity(Infinity); // false
check_is_not_infinity(-Infinity); // false
```

### `check_is_integer`

Checks if the given number is an integer.

```ts
check_is_integer(1); // true
check_is_integer(1.1); // false
```

### `check_is_not_integer`

Checks if the given number is not an integer.

```ts
check_is_not_integer(1.1); // true
check_is_not_integer(1); // false
```

### `check_is_less_than`

Checks if a number is less than a specified threshold.

```ts
check_is_less_than(5, 10); // true, 5 is less than 10
check_is_less_than(15, 10); // false, 15 is not less than 10
```

### `check_is_not_less_than`

Checks if a number is not less than a specified threshold.

```ts
check_is_not_less_than(15, 10); // true
check_is_not_less_than(5, 10); // false
```

### `check_is_less_than_or_equal`

Checks if the given number is less than or equal to the specified threshold.

```ts
check_is_less_than_or_equal(10, 10); // true
check_is_less_than_or_equal(15, 10); // true

check_is_less_than_or_equal(5, 10); // false
```

### `check_is_not_less_than_or_equal`

Checks if the given number is not less than or equal to the specified threshold.

```ts
check_is_not_less_than_or_equal(5, 10); // true

checkIsLessTHanOrEqual(10, 10); // true
check_is_not_less_than_or_equal(15, 5); // false
```

### `check_is_logarithm`

Checks if a given number matches the logarithm of a target with a specified
base.

```ts
check_is_logarithm(4, 2, 16); // log2(16) = 4
check_is_logarithm(4, 2, 8); // log2(8) = 3 ≠ 4
```

### `check_is_not_logarithm`

Checks if a given number does not match the logarithm of a target with a
specified base.

```ts
check_is_not_logarithm(4, 2, 8); // true
check_is_not_logarithm(4, 2, 16); // false
```

### `check_is_negative`

Checks if a given number is negative.

```ts
check_is_negative(-1); // true
check_is_negative(1); // false
```

### check_is_not_negative

Checks if a given number is not negative.

```ts
check_is_not_negative(1); // true
check_is_not_negative(-1); // true
```

### `check_is_number`

Checks if the given value is of type `number`.

```ts
check_is_number(1); // true
check_is_number("string"); // false
```

### `check_is_not_number`

Checks if the given value is not of type `number`.

```ts
check_is_not_number("string"); // true
check_is_not_number(1); // false
```

### `check_is_odd`

Checks if a given number is odd.

```ts
check_is_odd(3); // true
check_is_odd(-3); // true

check_is_odd(2); // false
check_is_odd(-2); // false
```

### `check_is_not_odd`

Checks if a given number is not odd.

```ts
check_is_not_odd(2); // true
check_is_not_odd(-2); // true

check_is_not_odd(3); // false
check_is_not_odd(-3); // false
```

### `check_is_perfect_number`

Checks if a given number is a perfect number.

```ts
check_is_perfect_number(28); // true, 1 + 2 + 4 + 7 + 14 = 28
check_is_perfect_number(12); // false, 1 + 2 + 3 + 4 + 6 = 16
```

### `check_is_not_perfect_number`

Checks if a given number is not a perfect number.

```ts
check_is_not_perfect_number(12); // true
check_is_not_perfect_number(28); // false
```

### `check_is_perfect_square`

Checks if a given number is a perfect square.

```ts
check_is_perfect_square(16); // true, 4 * 4 = 16
check_is_perfect_square(8); // false, 2 * 2 = 4 ≠ 8
```

### `check_is_not_perfect_square`

Checks if a given number is not a perfect square.

```ts
check_is_not_perfect_square(8); // true
check_is_not_perfect_square(16); // false
```

### `check_is_positive`

Checks if a given number is positive.

```ts
check_is_positive(1); // true

check_is_positive(0); // false
check_is_positive(-1); // false
```

### `check_is_not_positive`

Checks if a given number is not positive.

```ts
check_is_not_positive(0); // true
check_is_not_positive(-1); // true

check_is_not_positive(1); // false
```

### `check_is_power`

Checks if a given number is a power of a specified base.

```ts
check_is_power(8, 2); // true, 8 is 2^3, so it's a power of 2
check_is_power(10, 2); // false, 10 is not a power of 2
```

### `check_is_not_power`

Checks if a given number is not a power of a specified base.

```ts
check_is_not_power(10, 2); // true
check_is_not_power(8, 2); // false
```

### `check_is_prime`

Checks if a given number is a prime number.

```ts
check_is_prime(7); // true
check_is_prime(10); // false, 10 is divisible by 2 and 5
```

### `check_is_not_prime`

Checks if a given number is not a prime number.

```ts
check_is_not_prime(10); // true
check_is_not_prime(7); // false
```

### `check_is_square_root`

Checks if a given number is the square root of the target number.

```ts
check_is_square_root(3, 9); // true, 3 * 3 = 9
check_is_square_root(4, 20); // false, 4 * 4 =16
```

### `check_is_not_sequare_root`

Checks if a given number is not the square root of the target number.

```ts
check_is_not_sequare_root(4, 20); // true
check_is_not_sequare_root(3, 9); // false, 3 * 3 = 9
```

### `check_within_range`

Checks if a given number is within a specified range, inclusive.

```ts
check_within_range(5, 1, 10); // true, 5 is within the range [1, 10]
check_within_range(15, 1, 10); // false, 15 is not within the range [1, 10]
```

### `check_is_not_within_range`

Checks if a given number is not within a specified range.

```ts
check_is_not_within_range(15, 1, 10); //
check_is_not_within_range(5, 1, 10);
```

### `check_is_zero`

Checks if the given number is zero.

```ts
check_is_zero(0); // true
check_is_zero(5); // false
```

### `check_is_not_zero`

Checks if the given number is not zero.

```ts
check_is_not_zero(5); // true
check_is_not_zero(0); // false
```
