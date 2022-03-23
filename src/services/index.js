import { authReducer } from "./reducers/auth/authReducer";
import { uiReducer } from "./reducers/ui/uiReducer";
import { startLoading, finishLoading } from "./actions/ui/ui";
import {
  registerEmailAndPassword,
  startLoginEmailAndPassword,
  startLoginGoogle,
  startLogout,
  login,
  logout,
} from "./actions/auth/auth";

export {
  registerEmailAndPassword,
  startLoginEmailAndPassword,
  startLoginGoogle,
  startLogout,
  login,
  logout,
  startLoading,
  finishLoading,
  authReducer,
  uiReducer,
};
