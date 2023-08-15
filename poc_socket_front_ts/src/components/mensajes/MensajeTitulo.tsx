import { Box, Typography } from "@mui/material";
import React from "react";
interface Props {
  titulo?: string  
}
const MensajeTitulo = ({titulo = "Desconocido"}:Props) => {
  return <Box sx={{width:"90%",marginLeft:"15px",marginTop:"10px", textAlign:"left", color: "DarkCyan"}}>
    <Typography variant="h6">{titulo}</Typography> 
    </Box>;
};

export default MensajeTitulo;
