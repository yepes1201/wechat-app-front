import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes/AppRouter";

import "styles/styles.css";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
