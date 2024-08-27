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

### `checkIsCleanlyDivisible`

Checks if a given number is cleanly divisible by a divisor.

```ts
checkIsCleanDisible(10, 2); // 10 % 2 = 0
checkIsCleanDivible(10, 3); // 10 % 3 = 1
```

### `checkIsNotCleanlyDivisible`

Checks if a given number is not cleanly divisible by a divisor.

```ts
checkIsNotCleanDisible(10, 3); // true, 10 % 3 = 1
checkIsNotCleanDisible(10, 2); // false, 10 % 2 = 0
```

### `checkIsCubeRoot`

Checks if a given number is the cube root of a target number.

```ts
checkIsCubeRoot(3, 27); // true, 3 * 3 * 3 = 27
checkIsCubeRoot(2, 27); // false, 2 * 2 * 2 = 8 ≠ 27
```

### `checkIsNotCubeRoot`

Checks if a given number is not the cube root of a target number.

```ts
checkIsNotCubeRoot(2, 27); // true, 2 * 2 * 2 = 8 ≠ 27
checkIsNotCubeRoot(3, 27); // false, 3 * 3 * 3 = 27
```

### `checkIsDivisor`

Checks if the given number is a divisor of the target number.

```ts
checkIsDivisor(3, 9);
// true, 9 % 3 = 0 => 3 is a divisor of 9

checkIsDivisor(2, 9);
// false, 9 % 2 = 1 => 2 is not a divisor of 9
```

### `checkIsNotDivisor`

Checks if the given number is not a divisor of the target number.

```ts
checkIsNotDivisor(2, 9); // true
checkIsNotDivisor(3, 9); // false
```

### `checkIsEven`

Checks if a given number is even.

```ts
checkIsEven(4); // true
checkIsEven(3); // false
```

### `checkIsNotEven`

Checks if a given number is not even (odd).

```ts
checkIsNotEven(3); // false
checkIsNotEven(4); // true
```

### `checkIsFibonacci`

Checks if a given number is a Fibonacci number.

```ts
checkIsFibonacci(3); // true
checkIsFibonacci(5); // true

checkIsFibonacci(4); //false
checkIsFibonacci(6); // false
```

### `checkIsNotFibonacci`

Checks if a given number is not a Fibonacci number.

```ts
checkIsNotFibonacci(4); // true
checkIsNotFibonacci(6); // true

checkIsNotFibonacci(3); // false
checkIsNotFibonacci(5); // false
```

### `checkIsFloat`

Checks if the given number is a floating-point number.

```ts
checkIsFloat(1.2); // true

checkIsFloat(1); // false
checkIsFloat(1.0); // 1.0 % 1 = 0 => false
```

### `checkIsNotFloat`

Checks if the given number is not a floating-point number.

```ts
checkIsNotFloat(1); // true
checkIsNotFloat(1.0); // true

checkIsNotFloat(1.2); // false
```

### `checkIsGeometricSequence`

Checks if the given array of numbers forms a geometric sequence with the
specified ratio.

```ts
checkIsGeometricSequence([2, 4, 8], 2); // true
checkIsGeometricSequence([2, 4, 9], 2); // false
```

### `checkIsNotGeometricSequence`

Checks if the given array of numbers does not form a geometric sequence with the
specified ratio.

```ts
checkIsNotGeometricSequence([2, 4, 9], 2); // false
checkIsNotGeometricSequence([2, 4, 8], 2); // true
```

### `checkIsGreaterThan`

Checks if the given number is greater than a specified threshold.

```ts
checkIsGreaterThan(10, 5); // true, 10 is greater than 5
checkIsGreaterThan(10, 15); // false, 10 is not greater than 15
```

### `checkIsNotGreaterThan`

Checks if the given number is not greater than a specified threshold.

```ts
checkIsGreaterThan(10, 15); // true, 10 is not greater than 15
checkIsGreterThan(10, 10); // false
checkIsGreaterThan(10, 5); // false, 10 is greater than 5
```

### `checkIsGreaterThanOrEqual`

Checks if a number is greater than or equal to a given threshold.

```ts
checkIsGreaterThanOrEqual(10, 10); // true, 10 is equal 10
checkIsGreaterThanOrEqual(10, 5); // true, 10 is greater than 5

checkIsGreaterThanOrEqual(10, 15); // false, 10 is not greater than 15
```

### `checkIsNotGreaterThanOrEqual`

Checks if a number is not greater than or equal to a given threshold.

```ts
checkIsNotGreaterThanOrEqual(10, 15); // true

checkIsNotGreaterThanOrEqual(10, 10); // false
checkIsGreaterThanOrEqual(10, 5); // false
```

### `checkIsInfiniy`

Checks if the given value is Infinity.

If you want to know if a string is Infinity, use the `checkIsInifinityString()`
function.

```ts
checkIsInfinity(Infinity); // true
checkIsInfinity(-Infinity); // true

checkIsInfinity("hello"); // false
checkIsInifinity(123); // false
```

### `checkIsNotInfinity`

Checks if the given value is not Infinity.

```ts
checkIsNotInfinity("hello"); // true
checkIsNotInifinity(123); // true

checkIsNotInfinity(Infinity); // false
checkIsNotInfinity(-Infinity); // false
```

### `checkIsInterger`

Checks if the given number is an integer.

```ts
checkIsInteger(1); // true
checkIsInteger(1.1); // false
```

### `checkIsNotInteger`

Checks if the given number is not an integer.

```ts
checkIsNotInteger(1.1); // true
checkIsNotInteger(1); // false
```

### `checkIsLessThan`

Checks if a number is less than a specified threshold.

```ts
checkIsLessThan(5, 10); // true, 5 is less than 10
checkIsLessThan(15, 10); // false, 15 is not less than 10
```

### `checkIsNotLessThan`

Checks if a number is not less than a specified threshold.

```ts
checkIsNotLessThan(15, 10); // true
checkIsNotLessThan(5, 10); // false
```

### `checkIsLessThanOrEqual`

Checks if the given number is less than or equal to the specified threshold.

```ts
checkIsLessTHanOrEqual(10, 10); // true
checkIsLessThanOrEqual(15, 10); // true

checkIsLessThanOrEqual(5, 10); // false
```

### `checkIsNotLessThanOrEqual`

Checks if the given number is not less than or equal to the specified threshold.

```ts
checkIsNotLessThanOrEqual(5, 10); // true

checkIsLessTHanOrEqual(10, 10); // true
checkIsNotLessThanOrEqual(15, 5); // false
```

### `checkIsLogarithm`

Checks if a given number matches the logarithm of a target with a specified
base.

```ts
checkIsLogarithm(4, 2, 16); // log2(16) = 4
checkIsLogarithm(4, 2, 8); // log2(8) = 3 ≠ 4
```

### `checkIsNotLogarithm`

Checks if a given number does not match the logarithm of a target with a
specified base.

```ts
checkIsNotLogarithm(4, 2, 8); // true
checkIsNotLogarithm(4, 2, 16); // false
```

### `checkIsNegative`

Checks if a given number is negative.

```ts
checkIsNegative(-1); // true
checkIsNegative(1); // false
```

### `checkIsNotNegative`

Checks if a given number is not negative.

```ts
checkIsNotNegative(1); // true
checkIsNegative(-1); // true
```

### `checkIsNumber`

Checks if the given value is of type `number`.

```ts
checkIsNumber(1); // true
checkIsNumber("string"); // false
```

### `checkIsNotNumber`

Checks if the given value is not of type `number`.

```ts
checkIsNotNumber("string"); // true
checkIsNotNumber(1); // false
```

### `checkIsOdd`

Checks if a given number is odd.

```ts
checkIsOdd(3); // true
checkIsOdd(-3); // true

checkIsOdd(2); // false
checkIsOdd(-2); // false
```

### `checkIsNotOdd`

Checks if a given number is not odd.

```ts
checkIsNotOdd(2); // true
checkIsNotOdd(-2); // true

checkIsOdd(3); // false
checkIsOdd(-3); // false
```

### `checkIsPerfectNumber`

Checks if a given number is a perfect number.

```ts
checkIsPerfectNumber(28); // true, 1 + 2 + 4 + 7 + 14 = 28
checkIsPerfectNumber(12); // false, 1 + 2 + 3 + 4 + 6 = 16
```

### `checkIsNotPerfectNumber`

Checks if a given number is not a perfect number.

```ts
checkIsPerfectNumber(12); // true
checkIsPerfectNumber(28); // false
```

### `checkIsPerfectSquare`

Checks if a given number is a perfect square.

```ts
checkIsPerfectSquare(16); // true, 4 * 4 = 16
checkIsPerfectSquare(8); // false, 2 * 2 = 4 ≠ 8
```

### `checkIsNotPerfectSquare`

Checks if a given number is not a perfect square.

```ts
checkIsNotPerfectSquare(8); // true
checkIsNotPerfectSquare(16); // false
```

### `checkIsPositive`

Checks if a given number is positive.

```ts
checkIsPositive(1); // true

checkIsPositive(0); // false
checkIsPositive(-1); // false
```

### `checkIsNotPositive`

Checks if a given number is not positive.

```ts
checkIsNotPositive(0); // true
checkIsNotPositive(-1); // true

checkIsNotPositive(1); // false
```

### `checkIsPower`

Checks if a given number is a power of a specified base.

```ts
checkIsPowerOf(8, 2); // true, 8 is 2^3, so it's a power of 2
checkIsPower(10, 2); // false, 10 is not a power of 2
```

### `checkIsNotPower`

Checks if a given number is not a power of a specified base.

```ts
checkIsNotPower(10, 2); // true
checkIsNotPower(8, 2); // false
```

### `checkIsPrime`

Checks if a given number is a prime number.

```ts
checkIsPrime(7); // true
checkisPrime(10); // false, 10 is divisible by 2 and 5
```

### `checkIsNotPrime`

Checks if a given number is not a prime number.

```ts
checkIsNotPrime(10); // true
checkIsNotPrime(7); // false
```

### `checkIsSquareRoot`

Checks if a given number is the square root of the target number.

```ts
checkIsSquareRootOf(3, 9); // true, 3 * 3 = 9
checkIsSquareRootOf(4, 20); // false, 4 * 4 =16
```

### `checkIsNotSquareRoot`

Checks if a given number is not the square root of the target number.

```ts
checkIsNotSquareRootOf(4, 20); // true
checkIsNotSquareRootOf(3, 9); // false, 3 * 3 = 9
```

### `checkIsWithinRange`

Checks if a given number is within a specified range, inclusive.

```ts
checkIsWithinRange(5, 1, 10); // true, 5 is within the range [1, 10]
checkIsWithinRange(15, 1, 10); // false, 15 is not within the range [1, 10]
```

### `checkIsNotWithinRange`

Checks if a given number is not within a specified range.

```ts
checkIsNotWithinRange(15, 1, 10); //
checkIsNotWithinRange(5, 1, 10);
```

### `checkIsZero`

Checks if the given number is zero.

```ts
checkIsZero(0); // true
checkIsZero(5); // false
```

### `checkIsNotZero`

Checks if the given number is not zero.

```ts
checkIsNotZero(5); // true
checkIsNotZero(0); // false
```
