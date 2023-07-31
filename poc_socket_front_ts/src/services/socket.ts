import { io } from "socket.io-client";

const URL = "http://localhost:8080";
//Declaramos el socket pero sin conexión automatica
const socket = io(URL, { autoConnect: false });

export default socket;
