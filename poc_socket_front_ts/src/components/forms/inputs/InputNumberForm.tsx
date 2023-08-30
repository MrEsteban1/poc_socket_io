import { Alert, Box, Button, Input, TextField } from "@mui/material";
import React, { useState,useContext } from "react";
import { FormsContext } from "../../../context/FormsContext";

const InputNumberForm = ({}) => {
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

  const handleClick = (id:string) => {
    console.log("nombre activado",FORM?.step)
    FORM?.saveVariables(step?.variableName||" ",valor || 0)
    
    FORM?.changeStep(id||" ")
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        onChange={(e) => handleChange(e.target.value)}
        sx={{ width: "50%", margin: "10px", backgroundColor: "white" }}
        label={valor === 0 ? "Esciba un número" : ""}
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
          Debe ingresar un número.
        </Alert>
      )}
    </Box>
  );
};

export default InputNumberForm;
