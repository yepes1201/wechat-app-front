import { errors } from "./firebase/errors";
import { returnUser } from "./firebase/returnUser";
import {
  createUserDocument,
  getUserDocument,
  createChat,
} from "./firebase/db-documents";
import { toastifyOptions } from "./toastify/toast-options";
import { types } from "./types/types";
import { isLoginFormValid, isRegisterFormValid } from "./validations/auth";
import { isNotificationRepeat } from "./socket/sockete-add-repetition";

export {
  errors,
  returnUser,
  toastifyOptions,
  types,
  isLoginFormValid,
  isRegisterFormValid,
  createUserDocument,
  getUserDocument,
  createChat,
  isNotificationRepeat,
};
