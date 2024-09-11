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

### `check_is_alphanumeric`

Checks if a given string is alphanumeric.

```ts
check_is_alphanumeric("abc123"); // true, The string contains only letters and numbers
check_is_alphanumeric("abc123!"); // false, The string contains a special character '!'
```

### `check_is_not_alphanumeric`

Checks if a given string is not alphanumeric.

```ts
check_is_not_alphanumeric("abc123!"); // true, The string contains a special character '!'
check_is_not_alphanumeric("abc123"); // false
```

### `check_is_any_numeric`

Checks if a given string is numeric.

```ts
check_is_any_numeric("123"); // true
check_is_any_numeric("3.14"); // true
check_is_any_numeric("Infinity"); // true
check_is_any_numeric(""); // true

check_is_any_numeric("abc"); // false
```

### `check_is_not_any_numeric`

Checks if a given string is not numeric.

```ts
check_is_not_any_numeric("abc"); // true

check_is_not_any_numeric("123"); // false
check_is_not_any_numeric("3.14"); // false
check_is_not_any_numeric("Infinity"); // false
check_is_not_any_numeric(""); // false
```

### `check_is_binary`

Checks if a given string represents a binary number.

```ts
check_is_binary("0b1010"); // true

check_is_binary("hello"); // false
check_is_binary("1010"); // false
```

### `check_is_email_format`

Checks if a given string is in email format.

```ts
check_is_email_format("example@test.com"); // true

check_is_email_format("invalid-email"); // false
check_is_email_format("example@.com"); // false
```

### `check_is_not_email_format`

Checks if a given string is not in email format.

```ts
check_is_not_email_format("invalid-email"); // true
check_is_not_email_format("example@.com"); // true

check_is_not_email_format("example@test.com"); // false
```

### `check_is_empty_string`

Checks if a given string is empty.

```ts
check_is_empty_string(""); // true

check_is_empty_string("hello"); // false
```

### `check_is_not_empty_string`

Checks if a given string is not empty.

```ts
check_is_not_empty_string("hello"); // true

check_is_not_empty_string(""); // false
```

### `check_is_enter_key`

Checks if a given string represents the "Enter" key.

This was created to check if the event.key of a DOM event is Enter.

```ts
check_is_enter_key("Enter"); // true

check_is_enter_key("enter"); // false
check_is_enter_key("invalid-key"); // false
```

```ts
inputElement.addEventListener("keydown", (event) => {
  if (check_is_enter_key(event.key)) {
    // When the Enter key is pressed
  }
});
```

### `check_is_not_enter_key`

Checks if a given string does not represent the "Enter" key.

```ts
check_is_not_enter_key("enter"); // true
check_is_not_enter_key("invalid-key"); // true

check_is_not_enter_key("Enter"); // false
```

### `check_is_exponential_notation`

Checks if a given string is in exponential notation format.

```ts
check_is_exponential_notation("1e5"); // true
check_is_exponential_notation("3.14E-10"); // true

check_is_exponential_notation("123"); // false
```

### `check_is_not_exponential_notation`

Checks if a given string is not in exponential notation format.

```ts
check_is_not_exponential_notation("123"); // true

check_is_not_exponential_notation("1e5"); // false
check_is_not_exponential_notation("3.14E-10"); // false
```

### `check_has_substring`

Checks if a given string has a specific substring.

```ts
check_has_substring("hello world", "world"); // true
check_has_substring("hello world", "planet"); // false
```

### `check_does_not_have_substring`

Checks if a given string does not have a specific substring.

```ts
check_does_not_have_substring("hello world", "planet"); // true
check_does_not_have_substring("hello world", "world"); // false
```

### `check_is_index_found`

Checks if a given string includes a specific substring.

```ts
const words = "hello world";
const index = words.indexOf("world");
check_is_index_found(index); // true

const anotherIndex = words.indexOf("planet");
check_is_index_found(anotherIndex); // false
```

### `check_is_not_index_found`

Checks if a given index is not found.

```ts
const words = "hello world";
const index = words.indexOf("planet");
check_is_not_index_found(index); // true

const anotherIndex = words.indexOf("world");
check_is_index_found(anotherIndex); // false
```

### `check_is_infinity_string`

Checks if a given string represents infinity.

```ts
check_is_infinity_string("Infinity"); // true
check_is_infinity_string("-Infinity"); // true

check_is_infinity_string("infinity"); // false, the string is not exactly "Infinity" or "-Infinity"
check_is_infinity_string("123"); // false
```

### `check_is_not_infinity_string`

Checks if a given string does not represent infinity.

```ts
check_is_not_infinity_string("infinity"); // true
check_is_not_infinity_string("123"); // true

check_is_not_infinity_string("Infinity"); // false
check_is_not_infinity_string("-Infinity"); // false
```

### `check_is_integer_or_decimal_string`

Checks if a given string is a numeric value.

The function checks if the string represents a valid numeric value, including
optional negative signs and decimal points. The string can represent an integer
or a floating-point number.

```ts
check_is_integer_or_decimal_string("123"); // true
check_is_integer_or_decimal_string("1.1"); // true

check_is_integer_or_decimal_string("123abc"); // false
check_is_integer_or_decimal_string("hello"); // false
```

### `check_is_not_integer_or_decimal_string`

Checks if a given string is not a numeric value.

```ts
check_is_not_integer_or_decimal_string("123abc"); // true
check_is_not_integer_or_decimal_string("hello"); // true

check_is_not_integer_or_decimal_string("123"); // false
check_is_not_integer_or_decimal_string("1.1"); // false
```

### `check_is_ISO8601_format`

Checks if a given string is in ISO 8601 format.

```ts
check_is_ISO8601_format("2023-08-30T10:30:00Z"); // true
check_is_ISO8601_format("2023-08-30T10:30:00+02:00"); // true

check_is_ISO8601_format("invalid-date"); // false
check_is_ISO8601_format("08/30/2023"); // false
```

### `check_is_not_ISO8601_format`

Checks if a given string is not in ISO 8601 format.

```ts
check_is_not_ISO8601_format("2023-08-30T10:30:00Z"); // true
check_is_not_ISO8601_format("2023-08-30T10:30:00+02:00"); // true

check_is_not_ISO8601_format("invalid-date"); // false
check_is_Inot_SO8601_format("08/30/2023"); // false
```

### `check_has_prefix`

Checks if a given string has a specific prefix.

```ts
check_has_prefix("hello world", "hello"); // true

check_has_prefix("hello world", "world"); // false
```

### `check_does_not_have_prefix`

Checks if a given string does not have a specific prefix.

```ts
check_does_not_have_prefix("hello world", "world"); // true

check_does_not_have_prefix("hello world", "hello"); // false
```

### `check_has_special_character`

Checks if a given string contains any special characters.

```ts
check_has_special_character("hello@world"); // true
check_has_special_character("password123!"); // true

check_has_special_character("hello world"); // false
check_has_special_character("123456"); // false
```

### `check_does_not_have_special_character`

Checks if a given string does not contain any special characters.

```ts
check_does_not_have_special_character("hello world"); // true
check_does_not_have_special_character("123456"); // true

check_does_not_have_special_character("hello@world"); // false
check_does_not_have_special_character("password123!"); // false
```

### `check_is_special_numeric`

Checks if a given string is a special numeric value.

```ts
check_is_special_numeric("1e5"); // true
check_is_special_numeric("0b1010"); // true
check_is_special_numeric("Infinity"); // true

check_is_special_numeric("123"); // false
check_is_special_numeric("hello"); // false
```

### `check_is_not_special_numeric`

Checks if a given string is not a special numeric value.

```ts
check_is_not_special_numeric("123"); // true
check_is_not_special_numeric("hello"); // true

check_is_not_special_numeric("1e5"); // false
check_is_not_special_numeric("0b1010"); // false
check_is_not_special_numeric("Infinity"); // false
```

### `check_is_string`

Checks if a given value is a string.

```ts
check_is_string("hello world"); // true

check_is_string(123); // false
check_is_string(true); // false
```

### `check_is_not_string`

Checks if a given value is not a string.

```ts
check_is_not_string(123); // true
check_is_not_string(true); // true

check_is_not_string("hello world"); // false
```

### `check_has_suffix`

Checks if a given string ends with a specific suffix.

```ts
check_has_suffix("hello world", "world"); // true
check_has_suffix("hello world", "hello"); // false
```

### `check_does_not_have_suffix`

Checks if a given string does not end with a specific suffix.

```ts
check_does_not_have_suffix("hello world", "hello"); // true
check_does_not_have_suffix("hello world", "world"); // false
```

### `check_is_URL_format`

Checks if a given string is in URL format.

```ts
check_is_URL_format("http://example.com"); // true
check_is_URL_format("https://example.com"); // true
check_is_URL_format("ftp://example.com"); // true

check_is_URL_format("invalid-url"); // false
check_is_URL_format("http://"); // false
```

### `check_is_not_URL_format`

Checks if a given string is not in URL format.

```ts
check_is_not_URL_format("invalid-url"); // true
check_is_not_URL_format("http://"); // true

check_is_not_URL_format("http://example.com"); // false
check_is_not_URL_format("https://example.com"); // false
check_is_not_URL_format("ftp://example.com"); // false
```

### `check_is_UUID_format`

Checks if a given string is in UUID format.

```ts
check_is_UUID_format("123e4567-e89b-12d3-a456-426614174000"); // true

check_is_UUID_format("invalid-uuid"); // false
check_is_UUID_format("123e4567-e89b-12d3-a456-426614"); // false, this string is short.
```

### `check_is_not_UUID_format`

Checks if a given string is not in UUID format.

```ts
check_is_not_UUID_format("invalid-uuid"); // true
check_is_not_UUID_format("123e4567-e89b-12d3-a456-42661417400"); // true

check_is_not_UUID_format("123e4567-e89b-12d3-a456-426614174000"); // false
```

### Licence

MIT
