# @checker/object

A TypeScript utility library that provides a variety of functions for validating
and inspecting objects. This library includes utilities for deep equality
checks, verifying object properties like emptiness, sealed or frozen states, and
more. With clear and descriptive function names, this library is ideal for
developers looking to perform robust object validations in their TypeScript
projects.

## Functions

### `checkIsDeepEqual`

Checks if two objects are deeply equal.

```ts
checkIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
checkIsDeepEqual({ a: 1, b: 2 }, { a: 2, b: 3 }); // false
```

### `checkIsNotDeepEqual`

```ts
checkIsDeepEqual({ a: 1, b: 2 }, { a: 2, b: 3 }); // true
checkIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // false
```

### `checkIsEmptyObject`

Checks if a given object is an empty plain object.

```ts
checkIsEmptyObject({}); // true

checkIsEmptyObject(new Date()); // false
checkIsEmptyObject({ a: 1 }); // false
```

### `checkIsNotEmptyObject`

Checks if a given object is not an empty plain object.

```ts
checkIsNotEmptyObject(new Date()); // true
checkIsNotEmptyObject({ a: 1 }); // true

checkIsNotEmptyObject({}); // false
```

### `checkKeyExistsInObject`

Checks if a given key exists in an object.

> [!NOTE]
> This function does not type guard, if you need type guarding please use the
> `key in object` syntax.

```ts
checkKeyExistsInObject({ a: 1, b: 2 }, "a"); // true, The key 'a' exists in the object
checkKeyExistsInObject({ a: 1, b: 2 }, "c"); // false
```

```ts
type Obj = { a: 1; b: 2 } | { c: 3; d: 4 };

const obj = {} as Obj;

if ("c" in obj) {
  obj; // obj type is { c: 3, d: 4 }
}

if (checkKeyExistsInObject(obj, "c")) {
  obj; // obj type is Obj
}
```

### `checkKeyDoesNotExistInObject`

Checks if a given key does not exist in an object.

```ts
checkKeyDoesNotExistInObject({ a: 1, b: 2 }, "c"); // true
checkKeyDoesNotExistInObject({ a: 1, b: 2 }, "a"); // false
```

### `checkIsFrozen`

Checks if a given object is frozen.

```ts
checkIsFrozen(Object.freeze({ a: 1 })); // true
checkIsFrozen({ a: 1 }); // false
```

### `checkIsNotFrozen`

Checks if a given object is not frozen.

```ts
checkIsNotFrozen({ a: 1 }); // true
checkIsNotFrozen(Object.freeze({ a: 1 })); // false
```

### `checkIsObject`

Checks if a given value is an object.

```ts
checkIsObject({ a: 1 }); // true

checkIsObject(null); // false
checkIsObject("string"); // false
```

### `checkIsNotObject`

Checks if a given value is not an object.

```ts
checkIsNotObject("string"); // true

checkIsNotObject({ a: 1 }); // false
```

### `checkIsSealed`

Checks if a given object is sealed.

```ts
checkIsSealed(Object.seal({ a: 1 })); // true
checkIsSealed({ a: 1 }); // false
```

### `checkIsNotSealed`

Checks if a given object is not sealed.

```ts
checkIsNotSealed({ a: 1 }); // true
checkIsSealed(Object.seal({ a: 1 })); // false
```

### Licence

MIT
