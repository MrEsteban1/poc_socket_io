import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const InputTextForm = () => {
  const [valor, setValor] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  const handleChange = (valor: string) => {
    valor === "" || valor.length >= 38 ? setValor(valor) : setError(true);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        onChange={(e) => handleChange(e.target.value)}
        sx={{ width: "50%", margin: "10px", backgroundColor: "white" }}
        label={valor === "" ? "Escriba texto aquí" : ""}
      />
      <Button
        sx={{ width: "50%" }}
        variant="contained"
        disabled={error || typeof valor === "undefined"}
      >
        Siguiente
      </Button>

      {error && (
        <Alert sx={{ marginTop: "16px" }} severity="warning">
          Debe ingresar un número.
        </Alert>
      )}
    </Box>
  );
};

export default InputTextForm;
