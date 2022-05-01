import React from "react";

import {
  Navbar,
  Sidebar,
  Chat,
  ProfileSettings,
  socket as Socket,
} from "components";

export const Home = () => {
  Socket.emit("conectado", "Usuario conectado");
  return (
    <div className="home animate__animated animate__fadeIn">
      <Navbar />
      <div className="home__flex">
        <Sidebar />
        <Chat />
        <ProfileSettings />
      </div>
    </div>
  );
};
