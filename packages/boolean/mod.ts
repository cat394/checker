import type { Falsy } from "./src/types.ts";
import {
	check_is_boolean,
	check_is_not_boolean,
} from "./src/checkBoolean/main.ts";
import { check_is_not_true, check_is_true } from "./src/checkTrue/main.ts";
import { check_is_false, check_is_not_false } from "./src/checkFalse/main.ts";
import {
	check_is_not_truthy,
	check_is_truthy,
} from "./src/checkTruthy/main.ts";
import { check_is_falsy, check_is_not_falsy } from "./src/checkFalsy/main.ts";

export {
	check_is_boolean,
	check_is_false,
	check_is_falsy,
	check_is_not_boolean,
	check_is_not_false,
	check_is_not_falsy,
	check_is_not_true,
	check_is_not_truthy,
	check_is_true,
	check_is_truthy,
	type Falsy,
};
