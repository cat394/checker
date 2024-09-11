# checker

This is a library of commonly used validation logic for Typescript.

Every function has an inverse, for example `check_is_string` and
`check_is_not_string`.

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
  import { check_is_string } from "@checker/string";

  type Value = string | null;

  let value: Value = null;

  if (someCondition) {
    value = "hello";
  }

  if (check_is_string(value)) {
    value; // value is Hello and this type is string
  }
  ```

  ```ts
  import { check_is_index_found } from "@checker/string";

  const words = "hello world";

  const index = words.indexOf("hello");

  if (check_is_index_found(index)) {
    // When index is not -1
  }
  ```

  ```ts
  import { check_is_empty_string } from "@checker/string";

  const value = "    ";
  const trimmed = value.trim();

  if (check_is_empty_string(trimmed)) {
    // When value is empty string
  }
  ```

- **@checker/number**

  ```ts
  import { check_is_number, check_is_odd } from "@checker/number";

  const array = ["a", 1, true, 2, 3, 4, 5];

  const odds = array.filter(check_is_number).filter(check_is_odd);
  // odds = [1, 3, 5]
  ```

- **@checker/boolean**

  ```ts
  import { check_is_truthy } from "@checker/boolean";

  const array = [null, undefined, 0, 1, , "", "hello", true];

  const filtered = array.filter(check_is_truthy); // [1, 'hello', true]
  ```

- **@checker/nullish**

  ```ts
  import { check_is_not_nullish } from "@checker/nullish";

  const array = [null, undefined, 0, 1, '', 'hello' true];

  const filtered = array.filter(check_is_not_nullish); // [0, 1, '', 'hello', true]
  ```

- **@checker/array**

  Checks if the given index is the last iteration in the array.

  ```ts
  import { check_is_last_iteration } from "@checker/array";

  const array = [1, 2, 3];

  const mapped = array.map((item, index) => {
    if (check_is_last_iteration(index, array)) {
      return item + 1;
    }
    return item;
  });
  // mapped = [1, 2, 4]
  ```

- **@checker/object**

  Checks if the given index is not the last iteration in the array.

  ```ts
  import { check_is_empty_object } from "@checker/object";

  type Value = Partial<{ [key: string]: boolean }>;

  const value: Value = {};

  if (someCondition) {
    value["key"] = true;
  }

  if (check_is_empty_object(value)) {
    // When value is empty object
  }
  ```

  ```ts
  import { check_is_instance } from "@checker/object";

  try {
    // some action
  } catch (err) {
    if (check_is_instance(err, DatabaseError)) {
      // err is DatabaseError instance
    }
  }
  ```

## Licence

All library licence is MIT.
