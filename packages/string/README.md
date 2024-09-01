# @checker/string

A TypeScript utility library offering a comprehensive collection of functions
for validating and manipulating strings. This library includes functions to
check for alphanumeric content, numeric values, special characters, prefixes,
suffixes, and more. Designed for developers who need reliable and descriptive
utilities to handle various string operations in their TypeScript projects.

## Installation

NPM:

```bash
npx jsr add @checker/string
```

PNPM:

```bash
pnpm dlx jsr add @checker/string
```

Deno:

```bash
deno add @checker/string
```

Yarn:

```bash
yarn dlx jsr add @checker/string
```

Bun:

```bash
bunx jsr add @checker/string
```

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

### `checkIsEmailFormat`

Checks if a given string is in email format.

```ts
checkIsEmailFormat("example@test.com"); // true

checkIsEmailFormat("invalid-email"); // false
checkIsEmailFormat("example@.com"); // false
```

### `checkIsNotEmailFormat`

Checks if a given string is not in email format.

```ts
checkIsNotEmailFormat("invalid-email"); // true
checkIsNotEmailFormat("example@.com"); // true

checkIsNotEmailFormat("example@test.com"); // false
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

### `checkIsEnterKey`

Checks if a given string represents the "Enter" key.

This was created to check if the event.key of a DOM event is Enter.

```ts
checkIsEnterKey("Enter"); // true

checkIsEnterKey("enter"); // false
checkIsEnterKey("invalid-key"); // false
```

```ts
inputElement.addEventListener("keydown", (event) => {
  if (checkIsEnterKey(event.key)) {
    // When the Enter key is pressed
  }
});
```

### `checkIsNotEnterKey`

Checks if a given string does not represent the "Enter" key.

```ts
checkIsEnterKey("enter"); // true
checkIsEnterKey("invalid-key"); // true

checkIsEnterKey("Enter"); // false
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

### `checkHasSubstring`

Checks if a given string has a specific substring.

```ts
checkHasSubstring("hello world", "world"); // true
checkHasSubstring("hello world", "planet"); // false
```

### `checkDoesNotHaveSubstring`

Checks if a given string does not have a specific substring.

```ts
checkDoesNotHaveSubstring("hello world", "planet"); // true
checkDoesNotHaveSubstring("hello world", "world"); // false
```

### `checkIsIndexFound`

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

### `checkIsInfinityString`

Checks if a given string represents infinity.

```ts
checkIsInfinityString("Infinity"); // true
checkIsInfinityString("-Infinity"); // true

checkIsInfinityString("infinity"); // false, the string is not exactly "Infinity" or "-Infinity"
checkIsInfinityString("123"); // false
```

### `checkIsNotInfinityString`

Checks if a given string does not represent infinity.

```ts
checkIsInfinityString("infinity"); // true
checkIsInfinityString("123"); // true

checkIsInfinityString("Infinity"); // false
checkIsInfinityString("-Infinity"); // false
```

### `checkIsIntegerOrDecimalString`

Checks if a given string is a numeric value.

The function checks if the string represents a valid numeric value, including
optional negative signs and decimal points. The string can represent an integer
or a floating-point number.

```ts
checkIsIntegerOrDecimalString("123"); // true
checkIsIntegerOrDecimalString("1.1"); // true

checkIsIntegerOrDecimalString("123abc"); // false
checkIsIntegerOrDecimalString("hello"); // false
```

### `checkIsNotIntegerOrDecimalString`

Checks if a given string is not a numeric value.

```ts
checkIsNotIntegerOrDecimalString("123abc"); // true
checkIsNotIntegerOrDecimalString("hello"); // true

checkIsNotIntegerOrDecimalString("123"); // false
checkIsNotIntegerOrDecimalString("1.1"); // false
```

### `checkIsISO8601Format`

Checks if a given string is in ISO 8601 format.

```ts
checkIsISO8601Format("2023-08-30T10:30:00Z"); // true
checkIsISO8601Format("2023-08-30T10:30:00+02:00"); // true

checkIsISO8601Format("invalid-date"); // false
checkIsISO8601Format("08/30/2023"); // false
```

### `checkHasPrefix`

Checks if a given string has a specific prefix.

```ts
checkHasPrefix("hello world", "hello"); // true

checkHasPrefix("hello world", "world"); // false
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

### `checkIsURLFormat`

Checks if a given string is in URL format.

```ts
checkIsURLFormat("http://example.com"); // true
checkIsURLFormat("https://example.com"); // true
checkIsURLFormat("ftp://example.com"); // true

checkIsURLFormat("invalid-url"); // false
checkIsURLFormat("http://"); // false
```

### `checkIsNotURLFormat`

Checks if a given string is not in URL format.

```ts
checkIsNotURLFormat("invalid-url"); // true
checkIsNotURLFormat("http://"); // true

checkIsNotURLFormat("http://example.com"); // false
checkIsNotURLFormat("https://example.com"); // false
checkIsNotURLFormat("ftp://example.com"); // false
```

### `checkIsUUIDFormat`

Checks if a given string is in UUID format.

```ts
checkIsUUIDFormat("123e4567-e89b-12d3-a456-426614174000"); // true

checkIsUUIDFormat("invalid-uuid"); // false
checkIsUUIDFormat("123e4567-e89b-12d3-a456-426614"); // false, this string is short.
```

### `checkIsNotUUIDFormat`

Checks if a given string is not in UUID format.

```ts
checkIsUUIDFormat("invalid-uuid"); // true
checkIsUUIDFormat("123e4567-e89b-12d3-a456-42661417400"); // true

checkIsUUIDFormat("123e4567-e89b-12d3-a456-426614174000"); // false
```

### Licence

MIT
