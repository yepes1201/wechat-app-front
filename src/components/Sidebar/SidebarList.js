import React from "react";
import { useSelector } from "react-redux";
import { FriendCard } from "components";
import { Loading } from "components";

export const SidebarList = () => {
  const { userData, ui } = useSelector((state) => state);
  const { loading } = ui;
  const { friends } = userData;

  if (loading) {
    return (
      <div className="sidebar__list">
        <Loading />
      </div>
    );
  } else {
    return (
      <div
        style={
          friends?.length === 0
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {}
        }
        className="sidebar__list"
      >
        <ul>
          {friends?.length !== 0 ? (
            friends?.map((friend) => {
              return (
                <li key={friend.uid}>
                  <FriendCard {...friend} />
                </li>
              );
            })
          ) : (
            <p className="nofriends-message">No friends yet</p>
          )}
        </ul>
      </div>
    );
  }
};
