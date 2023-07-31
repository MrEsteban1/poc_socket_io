import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./App.css";

interface Props {
  setUsuario: Function;
  usuario: string;
}
const Login = ({ usuario, setUsuario }: Props) => {
  const Navigation = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsuario(e.target.value);
  };
  const handleClick = () => Navigation("/chat");
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
        <h5>{usuario}</h5>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "Gainsboro",
            minHeight: "70%",
            borderRadius: "15px",
            padding: "20px",
            width: "60%",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "10%" }}>
            Iniciar Sesion
          </Typography>
          <Typography>Nombre de Usuario:</Typography>
          <TextField
            sx={{ width: "80%", marginTop: "20px", marginBottom: "20px" }}
            onChange={handleChange}
          />
          <Button onClick={handleClick} variant="contained">
            Iniciar Sesion
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
