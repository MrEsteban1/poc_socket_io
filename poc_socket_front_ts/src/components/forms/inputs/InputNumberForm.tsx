import { Alert, Box, Button, Input, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { FormsContext } from "../../../context/FormsContext";

const InputNumberForm = ({ }) => {
  const [valor, setValor] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const FORM = useContext(FormsContext)
  const step = FORM?.formActual.flujo[FORM.step]


  const handleChange = (valor: string) => {
    console.log(parseFloat(valor));
    const parseo = parseFloat(valor);
    !isNaN(parseo) ? setValor(parseo) : setError(true);
    !isNaN(parseo) && setError(false);
  };

  const handleClick = (id: string) => {
    console.log("nombre activado", FORM?.step)
    FORM?.saveVariables(step?.variableName || " ", valor || 0)

    FORM?.changeStep(id || " ")
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        // label={valor === 0 ? "Esciba un número" : "Esciba un número"} 
        variant="filled"
        color={error ? "error" : "success"}
        // type="number"
        onChange={(e) => handleChange(e.target.value)}
        helperText={error ? 'Debe ingresar un número.' : 'Escriba un número'}
        sx={{ 
          input: { color: error ? 'red' : 'white' },
        }}
        focused
      />

      <Button
        onClick={() => handleClick(step?.idDestino || " ")}
        variant='contained'
        sx={{
          width: '65%',
          marginTop: '10px',
          background: '#228439',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize: '12px',
          '&:hover': {
            backgroundColor: '#175726',
          },
        }}
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

export default InputNumberForm;
