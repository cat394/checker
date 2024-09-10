import {
	check_is_not_object,
	check_is_object,
} from "./src/checkObject/main.ts";
import {
	check_is_empty_object,
	check_is_not_empty_object,
} from "./src/checkEmptyObject/main.ts";
import {
	check_key_does_not_exist_in_object,
	check_key_exists_in_object,
} from "./src/checkExistKey/main.ts";
import {
	check_value_does_not_exist_in_object,
	check_value_exists_in_object,
} from "./src/checkExistValue/main.ts";
import {
	check_is_deep_equal,
	check_is_not_deep_equal,
} from "./src/checkDeepEqual/main.ts";
import {
	check_is_frozen,
	check_is_not_frozen,
} from "./src/checkFrozen/main.ts";
import {
	check_is_not_sealed,
	check_is_sealed,
} from "./src/checkSealed/main.ts";
import {
	check_is_instace,
	check_is_not_instance,
} from "./src/checkInstance/main.ts";

export {
	check_is_deep_equal,
	check_is_empty_object,
	check_is_frozen,
	check_is_instace,
	check_is_not_deep_equal,
	check_is_not_empty_object,
	check_is_not_frozen,
	check_is_not_instance,
	check_is_not_object,
	check_is_not_sealed,
	check_is_object,
	check_is_sealed,
	check_key_does_not_exist_in_object,
	check_key_exists_in_object,
	check_value_does_not_exist_in_object,
	check_value_exists_in_object,
};
