# @checker/string

A TypeScript utility library offering a comprehensive collection of functions
for validating and manipulating strings. This library includes functions to
check for alphanumeric content, numeric values, special characters, prefixes,
suffixes, and more. Designed for developers who need reliable and descriptive
utilities to handle various string operations in their TypeScript projects.

## Functions

### `checkIsAlphanumeric`

Checks if a given string is alphanumeric.

```ts
checkIsAlphanumeric("abc123"); // true, The string contains only letters and numbers
checkIsAlphanumeric("abc123!"); // false, The string contains a special character '!'
```

### `checkIsNotAlphanumeric`

Checks if a given string is not alphanumeric.

```ts
checkIsNotAlphanumeric("abc123!"); // true, The string contains a special character '!'
checkIsNotAlphanumeric("abc123"); // false
```

### `checkIsAnyNumeric`

Checks if a given string is numeric.

```ts
checkIsAnyNumeric("123"); // true
checkIsAnyNumeric("3.14"); // true
checkIsAnyNumeric("Infinity"); // true
checkIsAnyNumeric(""); // true

checkIsAnyNumeric("abc"); // false
```

### `checkIsNotAnyNumeric`

Checks if a given string is not numeric.

```ts
checkIsAnyNumeric("abc"); // true

checkIsAnyNumeric("123"); // false
checkIsAnyNumeric("3.14"); // false
checkIsAnyNumeric("Infinity"); // false
checkIsAnyNumeric(""); // false
```

### `checkIsBinary`

Checks if a given string represents a binary number.

```ts
checkIsBinary("0b1010"); // true

checkIsBinary("hello"); // false
checkIsBinary("1010"); // false
```

### `checkIsEmptyString`

Checks if a given string is empty.

```ts
checkIsEmptyString(""); // true

checkIsEmptyString("hello"); // false
```

### `checkIsNotEmptyString`

Checks if a given string is not empty.

```ts
checkIsNotEmptyString("hello"); // true

checkIsNotEmptyString(""); // false
```

### `checkIsExponentialNotation`

Checks if a given string is in exponential notation format.

```ts
checkIsExponentialNotation("1e5"); // true
checkIsExponentialNotation("3.14E-10"); // true

checkIsExponentialNotation("123"); // false
```

### `checkIsNotExponentialNotation`

Checks if a given string is not in exponential notation format.

```ts
checkIsNotExponentialNotation("123"); // true

checkIsNotExponentialNotation("1e5"); // false
checkIsNotExponentialNotation("3.14E-10"); // false
```

### `checkIncludesSubstring`

Checks if a given string includes a specific substring.

```ts
checkIncludesSubstring("hello world", "world"); // true
checkIncludesSubstring("hello world", "planet"); // false
```

### `checkDoesNotIncludeSubstring`

Checks if a given string does not include a specific substring.

```ts
checkDoesNotIncludeSubstring("hello world", "planet"); // true
checkDoesNotIncludeSubstring("hello world", "world"); // false
```

### `checkIncludesSubstring`

Checks if a given string includes a specific substring.

```ts
const words = "hello world";
const index = words.indexOf("world");
checkIsIndexFound(index); // true

const anotherIndex = words.indexOf("planet");
checkIsIndexFound(anotherIndex); // false
```

### `checkIsIndexNotFound`

Checks if a given index is not found.

```ts
const words = "hello world";
const index = words.indexOf("planet");
checkIsIndexNotFound(index); // true

const anotherIndex = words.indexOf("world");
checkIsIndexFound(anotherIndex); // false
```

### `checkStringIsInfinity`

Checks if a given string represents infinity.

```ts
checkStringIsInfinity("Infinity"); // true
checkStringIsInfinity("-Infinity"); // true

checkStringIsInfinity("infinity"); // false, the string is not exactly "Infinity" or "-Infinity"
checkStringIsInfinity("123"); // false
```

### `checkStringIsNotInfinity`

Checks if a given string does not represent infinity.

```ts
checkStringIsInfinity("infinity"); // true
checkStringIsInfinity("123"); // true

checkStringIsInfinity("Infinity"); // false
checkStringIsInfinity("-Infinity"); // false
```

### `checkIsIntegerOrDecimalString`

Checks if a given string is a numeric value.

The function checks if the string represents a valid numeric value, including
optional negative signs and decimal points. The string can represent an integer
or a floating-point number.

```ts
checkIsIntegerOrDecimal("123"); // true
checkIsIntegerOrDecimal("1.1"); // true

checkIsNotNumeric("123abc"); // false
checkIsNotNumeric("hello"); // false
```

### `checkIsNotIntegerOrDecimalString`

Checks if a given string is not a numeric value.

```ts
checkIsNotNumeric("123abc"); // true
checkIsNotNumeric("hello"); // true

checkIsIntegerOrDecimal("123"); // false
checkIsIntegerOrDecimal("1.1"); // false
```

### `checkHasPrefix`

Checks if a given string has a specific prefix.

```ts
checkHasPrefix("hello world", "hello"); // true

heckHasPrefix("hello world", "world"); // false
```

### `checkDoesNotHavePrefix`

Checks if a given string does not have a specific prefix.

```ts
checkDoesNotHavePrefix("hello world", "world"); // true

checkDoesNotHavePrefix("hello world", "hello"); // false
```

### `checkHasSpecialCharacter`

Checks if a given string contains any special characters.

```ts
checkHasSpecialCharacter("hello@world"); // true
checkHasSpecialCharacter("password123!"); // true

checkHasSpecialCharacter("hello world"); // false
checkHasSpecialCharacter("123456"); // false
```

### `checkDoesNotHaveSpecialCharacter`

Checks if a given string does not contain any special characters.

```ts
checkDoesNotHasSpecialCharacter("hello world"); // true
checkDoesNotHasSpecialCharacter("123456"); // true

checkDoesNotHaveSpecialCharacter("hello@world"); // false
checkDoesNotHaveSpecialCharacter("password123!"); // false
```

### `checkIsSpecialNumeric`

Checks if a given string is a special numeric value.

```ts
checkIsSpecialNumeric("1e5"); // true
checkIsSpecialNumeric("0b1010"); // true
checkIsSpecialNumeric("Infinity"); // true

checkIsSpecialNumeric("123"); // false
checkIsSpecialNumeric("hello"); // false
```

### `checkIsNotSpecialNumeric`

Checks if a given string is not a special numeric value.

```ts
checkIsNotSpecialNumeric("123"); // true
checkIsNotSpecialNumeric("hello"); // true

checkIsNotSpecialNumeric("1e5"); // false
checkIsNotSpecialNumeric("0b1010"); // false
checkIsNotSpecialNumeric("Infinity"); // false
```

### `checkIsString`

Checks if a given value is a string.

```ts
checkIsString("hello world"); // true

checkIsString(123); // false
checkIsString(true); // false
```

### `checkIsNotString`

Checks if a given value is not a string.

```ts
checkIsNotString(123); // true
checkIsNotString(true); // true

checkIsNotString("hello world"); // false
```

### `checkHasSuffix`

Checks if a given string ends with a specific suffix.

```ts
checkHasSuffix("hello world", "world"); // true
checkHasSuffix("hello world", "hello"); // false
```

### `checkDoesNotHaveSuffix`

Checks if a given string does not end with a specific suffix.

```ts
checkDoesNotHaveSuffix("hello world", "hello"); // true
checkDoesNotHaveSuffix("hello world", "world"); // false
```

### Licence

MIT
