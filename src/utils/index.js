import { errors } from "./firebase/errors";
import { returnUser } from "./firebase/returnUser";
import { createUserDocument, getUserDocument } from "./firebase/db-documents";
import { toastifyOptions } from "./toastify/toast-options";
import { types } from "./types/types";
import { isLoginFormValid, isRegisterFormValid } from "./validations/auth";
import { isNotificationNotRepeat } from "./socket/sockete-add-repetition";

export {
  errors,
  returnUser,
  toastifyOptions,
  types,
  isLoginFormValid,
  isRegisterFormValid,
  createUserDocument,
  getUserDocument,
  isNotificationNotRepeat,
};
