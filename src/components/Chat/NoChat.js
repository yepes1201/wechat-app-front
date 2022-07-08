import React from "react";

export const NoChat = () => {
  return (
    <div
      className="chat"
      style={{
        alignItems: "center",
        backgroundColor: "#52b788",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          color: "#fff",
          fontSize: "1.15rem",
          fontWeight: "300",
          opacity: "0.8",
        }}
      >
        No chat selected
      </p>
    </div>
  );
};
