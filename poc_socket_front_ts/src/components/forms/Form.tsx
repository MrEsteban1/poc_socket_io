import { Box, Typography } from "@mui/material";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import FormStep from "./FormStep";
import { FormsContext } from "../../context/FormsContext";
import FormInfo from "./FormInfo";
import FormInput from "./FormInput";
interface Props {}
const Form = ({}: Props) => {
  const FORM = useContext(FormsContext);
  const [step, setStep] = useState(0);

  useEffect(() => {}, [FORM?.formActual]);
  return (
    <Box
      sx={{
        backgroundColor: "PowderBlue",
        height: "50vh",
        width: "70vh",
        padding: "10px",
        borderRadius: "0px 20px 20px 0px",
        overflow: "hidden",
      }}
    >
      <Box>
        <FormStep title={FORM?.formActual.title || " "}>
          {FORM?.formActual.flujo[step].info ? (
            <FormInfo info={FORM?.formActual.flujo[step].info} />
          ) : (
            <></>
          )}
          <p>{FORM?.formActual.flujo[step].valueType}</p>
          {FORM?.formActual.flujo[step] ? (
            <FormInput
              changeStep={setStep}
              type={FORM?.formActual.flujo[step].valueType}
            />
          ) : (
            <></>
          )}
        </FormStep>
      </Box>
    </Box>
  );
};

export default Form;
