const http = require("http");
const server = http.createServer();
const PORT = 8080;

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Se ha conectado un cliente ");

  // socket.broadcast.emit("chat_message", {
  //   usuario: "INFO",
  //   mensaje: "Se ha conectado un nuevo usuario",
  // });

  socket.on("chat_message", (data) => {
    console.log(data);
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
