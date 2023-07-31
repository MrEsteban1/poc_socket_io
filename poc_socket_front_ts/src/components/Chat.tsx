import React, { useEffect, useState } from "react";
import "./App.css";
import socket from "../services/socket";
import { Box, Button, List, ListItem, TextField } from "@mui/material";
import ChatMensaje from "./ChatMensaje";
import { mensaje } from "../interfaces/mensajes";
import { useNavigate } from "react-router-dom";

interface Props {
  usuario: string;
}

const Chat = ({ usuario }: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState<mensaje[]>([]);
  const Navigation = useNavigate();

  const enviarLogin = () => {
    Navigation("/");
  };

  const enviarMensaje = () => {
    socket.emit("chat_message", {
      id: socket.id,
      usuario: usuario,
      mensaje: nuevoMensaje,
      tipo: "archivo",
    });
  };

  useEffect(() => {
    usuario === "" && enviarLogin();
    socket.connect();
    socket.on("connect", () => setIsConnected(true));

    socket.on("primer_inicio", (data) => {
      console.log(data);
      setMensajes([...data]);
    });

    socket.on("chat_message", (data) => {
      console.log(data);
      setMensajes((mensajes) => [...mensajes, data]);
    });

    socket.on("disconnect", () => setIsConnected(false));

    return () => {
      socket.off("connect");
      socket.off("chat_message");
      socket.disconnect();
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
            maxHeight: "60vh",
            overflowY: "scroll",
            width: "60vw",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <List>
            {mensajes.map((e, i) => (
              <ListItem
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent:
                    usuario !== e.usuario ? "flex-start" : "flex-end",
                }}
              >
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
};

export default Chat;
