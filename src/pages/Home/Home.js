import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Navbar,
  Sidebar,
  Chat,
  ProfileSettings,
  socket as Socket,
  Modal,
} from "components";

export const Home = () => {
  const modals = useSelector((state) => state.modals);

  useEffect(() => {
    Socket.emit("conectado", "Usuario conectado");

    return () => {
      Socket.emit("desconectado", "Usuario desconectado");
      Socket.off();
    };
  }, []);

  return (
    <div className="home animate__animated animate__fadeIn">
      <Navbar />
      <div className="home__flex">
        {modals.addFriend && <Modal />}
        <Sidebar />
        <Chat />
        <ProfileSettings />
      </div>
    </div>
  );
};
