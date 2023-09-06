import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { FormsContext } from "../../../context/FormsContext";


interface Props {
  onButtonSelection : (value:string)=> void
}

const InputTextForm = () => {
  //Valor que se va autilizar para el input de texto
  const [valor, setValor] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const FORM = useContext(FormsContext)
  
  const step = FORM?.formActual.flujo[FORM.step]

  const handleChange = (valor: string) => {
    valor === "" || valor.length >= 38 ? setValor(valor) : setError(true);
  };

  const handleClick = (id:string) => {
    console.log("nombre activado",FORM?.step)
    FORM?.saveVariables(step?.variableName||" ",valor || "")
    
    FORM?.changeStep(id||" ")
  }

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
        onClick={()=> handleClick(step?.idDestino || " ")}
        sx={{ width: "50%" }}
        variant="contained"
        disabled={error || typeof valor === "undefined"}
      >
        Siguiente
      </Button>

      {error && (
        <Alert sx={{ marginTop: "16px" }} severity="warning">
          Ingrese el texto.
        </Alert>
      )}
    </Box>
  );
};

export default InputTextForm;
