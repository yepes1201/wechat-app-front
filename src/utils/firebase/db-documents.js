import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const createUserDocument = async (userId) => {
  const docRef = await getDoc(doc(getFirestore(), "users", userId));
  if (!docRef.exists()) {
    await setDoc(doc(getFirestore(), "users", userId), {
      friends: [],
    });
  }
};

export const getUserDocument = async (userId) => {
  const docRef = await getDoc(doc(getFirestore(), "users", userId));
  return docRef.exists() && docRef.data();
};
