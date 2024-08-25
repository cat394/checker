import { checkIsNotObject, checkIsObject } from "./src/checkObject/main.ts";
import {
  checkIsEmptyObject,
  checkIsNotEmptyObject,
} from "./src/checkEmptyObject/main.ts";
import {
  checkKeyDoesNotExistInObject,
  checkKeyExistsInObject,
} from "./src/checkExistKey/main.ts";
import {
  checkValueDoesNotExistInObject,
  checkValueExistsInObject,
} from "./src/checkExistValue/main.ts";
import {
  checkIsDeepEqual,
  checkIsNotDeepEqual,
} from "./src/checkDeepEqual/main.ts";
import { checkIsFrozen, checkIsNotFrozen } from "./src/checkFrozen/main.ts";
import { checkIsNotSealed, checkIsSealed } from "./src/checkSealed/main.ts";
import {
  checkIsInstance,
  checkIsNotInstance,
} from "./src/checkInstance/main.ts";

export {
  checkIsDeepEqual,
  checkIsEmptyObject,
  checkIsFrozen,
  checkIsInstance,
  checkIsNotDeepEqual,
  checkIsNotEmptyObject,
  checkIsNotFrozen,
  checkIsNotInstance,
  checkIsNotObject,
  checkIsNotSealed,
  checkIsObject,
  checkIsSealed,
  checkKeyDoesNotExistInObject,
  checkKeyExistsInObject,
  checkValueDoesNotExistInObject,
  checkValueExistsInObject,
};
