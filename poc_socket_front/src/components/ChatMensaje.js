import { Box, Menu, Typography } from "@mui/material";
import React from "react";

const ChatMensaje = ({ mensaje, nombre }) => {
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
      <Typography variant="span">{mensaje}</Typography>
    </Box>
  );
};

export default ChatMensaje;
