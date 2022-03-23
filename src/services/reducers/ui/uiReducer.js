import { types } from "utils";

// const initToast = {
//   open: false,
//   msg: "",
//   error: false,
// };

const initState = {
  loading: false,
  //   toast: initToast,
};

export const uiReducer = (state = initState, action) => {
  switch (action?.type) {
    case types.uiStartLoading:
      return { ...state, loading: true };

    case types.uiFinishLoading:
      return { ...state, loading: false };

    // case types.uiOpenToast:
    //   return { ...state, toast: action.payload };

    // case types.uiCloseToast:
    //   return { ...state, toast: initToast };

    default:
      return state;
  }
};
