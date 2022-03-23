import validator from "validator";

export const isRegisterFormValid = (form) => {
  if (validator.isEmpty(form.name)) {
    return false;
  }

  if (!validator.isEmail(form.email)) {
    return false;
  }

  if (
    !validator.isStrongPassword(form.password) ||
    !validator.equals(form.password, form.password2)
  ) {
    return false;
  }

  return true;
};

export const isLoginFormValid = (form) => {
  if (validator.isEmpty(form.email) || validator.isEmpty(form.password)) {
    return false;
  }

  return true;
};
