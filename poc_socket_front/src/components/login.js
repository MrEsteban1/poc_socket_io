import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Login = ({ setUsuario, usuario }) => {
  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: "CadetBlue",
          width: "70vh",
          borderRadius: "10px",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            backgroundColor: "red",
            width: "50%",
          }}
        >
          <Typography>Nombre de Usuario:</Typography>
          <TextField onChange={setUsuario} />
          <Button>Iniciar Sesion</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
