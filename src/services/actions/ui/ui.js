import { types } from "utils/types/types";

export const startLoading = () => {
  return { type: types.uiStartLoading };
};

export const finishLoading = () => {
  return { type: types.uiFinishLoading };
};

// export const openToast = (toast) => {
//   return { type: types.uiOpenToast, payload: toast };
// };

// export const closeToast = () => {
//   return { type: types.uiCloseToast };
// };
