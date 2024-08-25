# checker

This is a library of commonly used validation logic for Typescript.

Every function has an inverse, for example `checkIsString` and
`checkIsNotString`.

| **Data type** | **Library**                            |
| ------------- | -------------------------------------- |
| string        | [@checker/string](./packages/string)   |
| number        | [@checker/number](./packages/number)   |
| boolean       | [@checker/boolean](./packages/boolean) |
| nullish       | [@checker/nullish](./packages/nullish) |
| array         | [@checker/array](./packages/array)     |
| object        | [@checker/object](./packages/object)   |

Examples:

- **@checker/string**

  ```ts
  import { checkIsString } from "@checker/string";

  type Value = string | null;

  let value: Value = null;

  if (someCondition) {
    value = "hello";
  }

  if (checkIsString(value)) {
    value; // value is Hello and this type is string
  }
  ```

  ```ts
  import { checkIsIndexFound } from "@checker/string";

  const words = "hello world";

  const index = words.indexOf("hello");

  if (checkIsIndexFound(index)) {
    // When index is not -1
  }
  ```

  ```ts
  import { checkIsEmptyString } from "@checker/string";

  const value = "    ";
  const trimmed = value.trim();

  if (checkIsEmptyString(trimmed)) {
    // When value is empty string
  }
  ```

- **@checker/number**

  ```ts
  import { checkIsNumber, checkIsOdd } from "@checker/number";

  const array = ["a", 1, true, 2, 3, 4, 5];

  const odds = array.filter(checkIsNumber).filter(checkIsOdd);
  // odds = [1, 3, 5]
  ```

- **@checker/boolean**

  ```ts
  import { checkIsTruthy } from "@checker/boolean";

  const array = [null, undefined, 0, 1, , "", "hello", true];

  const filtered = array.filter(checkIsTruthy); // [1, 'hello', true]
  ```

- **@checker/nullish**

  ```ts
  import { checkIsNotNullish } from "@checker/nullish";

  const array = [null, undefined, 0, 1, '', 'hello' true];

  const filtered = array.filter(checkIsNotNullish); // [0, 1, '', 'hello', true]
  ```

- **@checker/array**

  Checks if the given index is the last iteration in the array.

  ```ts
  import { checkIsLastIteration } from "@checker/array";

  const array = [1, 2, 3];

  const mapped = array.map((item, index) => {
    if (checkIsLastIteration(index, array)) {
      return item + 1;
    }
    return item;
  });
  // mapped = [1, 2, 4]
  ```

- **@checker/object**

  Checks if the given index is not the last iteration in the array.

  ```ts
  import { checkIsEmptyObject } from "@checker/object";

  type Value = Partial<{ [key: string]: boolean }>;

  const value: Value = {};

  if (someCondition) {
    value["key"] = true;
  }

  if (checkIsEmptyObject(value)) {
    // When value is empty object
  }
  ```

  ```ts
  import { checkIsInstance } from "@checker/object";

  try {
    // some action
  } catch (err) {
    if (checkIsInstance(err, DatabaseError)) {
      // err is DatabaseError instance
    }
  }
  ```

## Licence

All library licence is MIT.
