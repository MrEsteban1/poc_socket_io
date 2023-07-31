const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const fetchLocalJSONData = require("./constants/chats");
const PORT = 8080;

app.use(express.static(__dirname));

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

const mensajes = [];

io.on("connection", async (socket) => {
  console.log("Se ha conectado un cliente ");
  io.emit("primer_inicio", mensajes);
  // socket.broadcast.emit("chat_message", {
  //   usuario: "INFO",
  //   mensaje: "Se ha conectado un nuevo usuario",
  // });

  console.log(
    "Desde el server: ",
    fetchLocalJSONData(__dirname + "\\" + "chats.json")
  );

  socket.on("chat_message", (data) => {
    console.log(data);
    mensajes.push(data);
    socket.broadcast.emit("chat_message", {
      usuario: "INFO",
      mensaje: "Se ha conectado un nuevo usuario",
    });
    io.emit("chat_message", data);
  });
});

server.listen(PORT, () =>
  console.log("Servidor escuchando en el puerto: " + PORT)
);
