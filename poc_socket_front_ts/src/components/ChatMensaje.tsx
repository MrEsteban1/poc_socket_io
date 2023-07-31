import React from "react";
import { Box, Menu, Typography } from "@mui/material";

interface Props {
  mensaje: string;
  nombre: string;
}

const ChatMensaje = ({ mensaje, nombre }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "SteelBlue",
        color: "white",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6">{nombre}</Typography>
      <Typography>{mensaje}</Typography>
    </Box>
  );
};

export default ChatMensaje;
