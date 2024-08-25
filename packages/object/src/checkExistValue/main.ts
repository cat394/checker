export const checkValueExistsInObject = <T extends object>(
  obj: T,
  value: T[keyof T],
): boolean => {
  return Object.values(obj).includes(value);
};

export const checkValueDoesNotExistInObject = <T extends object>(
  obj: T,
  value: T[keyof T],
): boolean => {
  return !checkValueExistsInObject(obj, value);
};
