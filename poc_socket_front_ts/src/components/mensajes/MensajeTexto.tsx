import { Box } from "@mui/material";
import React from "react";

interface Props {
  mensaje: string
}

export const MensajeText = ({mensaje}:Props) => {
  return <Box sx={{  maxWidth: "50vh", margin:"10px", textAlign:"left", color:"DarkSlateGray"}}>{mensaje}</Box>;
};
