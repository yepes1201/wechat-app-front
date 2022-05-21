import { types } from "utils";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
  arrayUnion,
  updateDoc,
  setDoc,
  addDoc,
  where,
  query,
} from "firebase/firestore";

export const startActiveChat = (auth, user) => {
  return async (dispatch, getState) => {
    try {
      const q = query(
        collection(getFirestore(), "chats"),
        where("users", "array-contains", [auth.uid, user.uid])
      );
      const querySnapshots = await getDocs(q);
      let chat;
      if (querySnapshots.docs.length > 0) {
        // If chat exists, get the chat
        querySnapshots.forEach((doc) => {
          chat = doc.data();
        });
      } else {
        // If chat doesn't exist, create one
        chat = {
          users: [auth.uid, user.uid],
          messages: [],
        };
        await addDoc(collection(getFirestore(), "chats"), chat); // Add chat to firestore
      }
      dispatch(activeChat(chat, user)); // Set chat as active
    } catch (err) {
      console.log(err);
    }
  };
};

export const addMessageChat = (message) => {
  return async (dispatch, getState) => {
    try {
    } catch (err) {}
  };
};

const activeChat = (chat, friend) => {
  return {
    type: types.chatActive,
    payload: { content: chat, friend },
  };
};
