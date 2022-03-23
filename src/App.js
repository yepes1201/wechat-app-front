import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRouter } from "routes/AppRouter";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/firebase-config";

import { store } from "store/store";
import "styles/styles.css";

// Initialize Firebase App
initializeApp(firebaseConfig);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
