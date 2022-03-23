import { types } from "utils/types/types";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { returnUser } from "utils/firebase/returnUser";

// * Sync Dispatch
export const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

export const logout = () => {
  return { type: types.authLogout };
};

// * Async Dispatch

// * Register with email and password
export const registerEmailAndPassword = (email, name, password) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: name });
      const newUser = returnUser(user, name);
      dispatch(login(newUser));
    } catch (err) {
      console.log(err);
    }
  };
};

// * Login with email and password
export const startLoginEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const { user: firebaseUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = returnUser(firebaseUser);
      dispatch(login(user));
    } catch (err) {
      console.log(err);
    }
  };
};

// * Login using Google Account
export const startLoginGoogle = () => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const { user: firebaseUser } = await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );
      const user = returnUser(firebaseUser);
      dispatch(login(user));
    } catch (err) {
      console.log(err);
    }
  };
};

//* Logout
export const startLogout = () => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
};
