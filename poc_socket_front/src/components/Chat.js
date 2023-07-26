import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
import { Box, Button, List, ListItem, TextField } from "@mui/material";
import ChatMensaje from "./ChatMensaje";

const socket = io("http://localhost:8080");

function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const enviarMensaje = () => {
    socket.emit("chat_message", {
      usuario: socket.id,
      mensaje: nuevoMensaje,
    });
  };

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));

    socket.on("chat_message", (data) => {
      console.log(data);
      setMensajes((mensajes) => [...mensajes, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, []);

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // width: "100%",
        }}
      >
        <h4>{isConnected ? "CONECTADO" : "DESCONECTADO"}</h4>
        <Box
          sx={{
            backgroundColor: "LightGray",
            minHeight: "60vh",
            width: "60vw",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <List>
            {mensajes.map((e, i) => (
              <ListItem sx={{ marginBottom: "10px" }}>
                <ChatMensaje
                  key={i * 203}
                  mensaje={e.mensaje}
                  nombre={e.usuario}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ backgroundColor: "MediumAquamarine" }}>
          <TextField
            onChange={(e) => setNuevoMensaje(e.target.value)}
            sx={{ width: "80%", margin: "10px", backgroundColor: "white" }}
            label="Mensaje"
          />
        </Box>

        <Button variant="contained" onClick={enviarMensaje}>
          Enviar
        </Button>
      </Box>
    </div>
  );
}
export default Chat;
