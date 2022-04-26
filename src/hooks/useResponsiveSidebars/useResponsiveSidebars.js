import { useState } from "react";

export const useResponsiveSidebars = () => {
  const [friendsActive, setFriendsActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const handleResponsiveSidebars = (type) => {
    const [friends] = document.getElementsByClassName("sidebar");
    const [pSettings] = document.getElementsByClassName("profile-settings");

    switch (type) {
      case "friends":
        if (!friendsActive) {
          pSettings.classList.remove("profile-settings__responsive");
          friends.classList.add("sidebar__responsive");
          setProfileActive(false);
          setFriendsActive(true);
        } else {
          friends.classList.remove("sidebar__responsive");
          setFriendsActive(false);
        }

        break;
      case "profile":
        if (!profileActive) {
          friends.classList.remove("sidebar__responsive");
          setFriendsActive(false);
          pSettings.classList.add("profile-settings__responsive");
          setProfileActive(true);
        } else {
          pSettings.classList.remove("profile-settings__responsive");
          setProfileActive(false);
        }
        break;
      default:
        break;
    }
  };

  return { handleResponsiveSidebars };
};
