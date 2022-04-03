import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRouter } from "routes/AppRouter";

import { ToastContainer, Slide } from "react-toastify";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase-config";

import { store } from "store/store";
import "styles/styles.css";
import "react-toastify/dist/ReactToastify.css";

// Initialize Firebase App
initializeApp(firebaseConfig);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer transition={Slide} theme="colored" />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
