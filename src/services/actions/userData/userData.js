import { toast } from "react-toastify";
import { errors, types, toastifyOptions, getUserDocument } from "utils";
import { startLoading, finishLoading } from "services";

// Set use data
export const setUserData = (uid) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const data = await getUserDocument(uid);
      dispatch(setData(data));
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
    } finally {
      dispatch(finishLoading());
    }
  };
};

const setData = (data) => {
  return {
    type: types.userDataSet,
    payload: data,
  };
};

export const setClearData = () => {
  return {
    type: types.userDataClear,
  };
};
