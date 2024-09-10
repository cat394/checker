export const check_value_exists_in_object = <T extends object>(
	obj: T,
	value: T[keyof T]
): boolean => {
	return Object.values(obj).includes(value);
};

export const check_value_does_not_exist_in_object = <T extends object>(
	obj: T,
	value: T[keyof T]
): boolean => {
	return !check_value_exists_in_object(obj, value);
};
