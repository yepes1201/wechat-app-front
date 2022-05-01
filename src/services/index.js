import { authReducer } from "./reducers/auth/authReducer";
import { uiReducer } from "./reducers/ui/uiReducer";
import { userDataReducer } from "./reducers/userData/userDataReducer";
import { modalsReducers } from "./reducers/modals/modalsReducers";
import { notificationsReducer } from "./reducers/notifications/notificationsReducer";
import { startLoading, finishLoading } from "./actions/ui/ui";
import {
  registerEmailAndPassword,
  startLoginEmailAndPassword,
  startLoginGoogle,
  startLogout,
  login,
  logout,
} from "./actions/auth/auth";
import { setUserData, setClearData } from "./actions/userData/userData";
import { openAddFriend, closeAddFriend } from "./actions/modals/modals";
import {
  startAddFriend,
  setFriends,
  addFriend,
  clearNotifications,
} from "./actions/notifications/notifications";

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
  userDataReducer,
  setUserData,
  setClearData,
  modalsReducers,
  openAddFriend,
  closeAddFriend,
  notificationsReducer,
  startAddFriend,
  setFriends,
  addFriend,
  clearNotifications,
};
