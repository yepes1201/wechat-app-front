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
        where("users", "array-contains", auth.uid)
      );
      const querySnapshots = await getDocs(q);
      let chat;
      if (querySnapshots.docs.length > 0) {
        // If chat exists, get the chat
        querySnapshots.forEach((doc) => {
          const data = doc.data();
          if (data.users.includes(user.uid)) {
            chat = { ...data, id: doc.id };
          }
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

export const startSendMessage = (message) => {
  return async (dispatch, getState) => {
    try {
      const { auth, chat } = getState();
      const { content } = chat;
      const { messages } = content;
      const newMessages = [...messages, message];
      const newChat = {
        ...chat,
        content: {
          ...content,
          messages: newMessages,
        },
      };
      dispatch(addMessageLocal(newChat));
    } catch (err) {
      console.log(err);
    }
  };
};

const addMessageLocal = (chat) => {
  return {
    type: types.chatAddMessage,
    payload: chat,
  };
};

const activeChat = (chat, friend) => {
  return {
    type: types.chatActive,
    payload: { content: chat, friend },
  };
};
