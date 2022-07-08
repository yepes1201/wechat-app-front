import io from "socket.io-client";

// const socket = io(process.env.REACT_APP_SOCKET_URL);
const socket = io("https://wechat-app-danielyepes.herokuapp.com");

export default socket;
