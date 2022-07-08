import { toast } from "react-toastify";
import {
  returnUser,
  errors,
  types,
  toastifyOptions,
  createUserDocument,
} from "utils";
import { startLoading, finishLoading, setUserData, setFriends } from "services";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";

// * Sync Dispatch

// Login
export const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

// Logout
export const logout = () => {
  return { type: types.authLogout };
};

// * Async Dispatch

// Register with email and password
export const registerEmailAndPassword = (email, name, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: name });
      const newUser = returnUser(user, name);

      // Validate user already exists in DB
      await createUserDocument(user.uid, newUser);

      // Set user data
      dispatch(setUserData(user.uid));

      dispatch(login(newUser));
      dispatch(finishLoading());
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
    } finally {
      dispatch(finishLoading());
    }
  };
};

// Login with email and password
export const startLoginEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      const { user: firebaseUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = returnUser(firebaseUser);

      // Set user data
      dispatch(setUserData(user.uid));

      // Get friendrequest from DB
      const docSnap = await getDoc(
        doc(getFirestore(), "friendsrequest", user.uid)
      );
      if (docSnap.exists()) {
        dispatch(setFriends(docSnap.data().friends));
      }

      dispatch(login(user));
      dispatch(finishLoading());
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
    } finally {
      dispatch(finishLoading());
    }
  };
};

// Login using Google Account
export const startLoginGoogle = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      const { user: firebaseUser } = await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );
      let user = returnUser(firebaseUser);

      // Create user document if not exists
      await createUserDocument(user.uid, user);

      // Set user data
      dispatch(setUserData(user.uid));

      // Get friendrequest from DB
      const docSnap = await getDoc(
        doc(getFirestore(), "friendsrequest", user.uid)
      );
      if (docSnap.exists()) {
        dispatch(setFriends(docSnap.data().friends));
      }

      dispatch(login(user));
      dispatch(finishLoading());
    } catch (err) {
      toast.error(errors[err.code], toastifyOptions);
    } finally {
      dispatch(finishLoading());
    }
  };
};

// Logout
export const startLogout = () => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(logout());
    } catch (err) {
      console.log(err.code);
    }
  };
};
