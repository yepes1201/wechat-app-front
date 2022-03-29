import React from "react";

import { Navbar, Sidebar, Chat, ProfileSettings } from "components";

export const Home = () => {
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
