import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { FormsContext } from "../../../context/FormsContext";
import FormInfo from "./FormInfo";
import FormInput from "./FormInput";
import FormStep from "./FormStep";

interface Props {}

const Form = ({}: Props) => {
  const FORM = useContext(FormsContext);

  useEffect(() => {}, [FORM?.formActual,FORM?.step]);
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
          {FORM?.formActual.flujo[FORM.step].info ? (
            <FormInfo info={FORM?.formActual.flujo[FORM.step].info} />
          ) : (
            <></>
          )}
          <p>{FORM?.formActual.flujo[FORM.step].valueType}</p>
          {FORM?.formActual.flujo[FORM.step] ? (
            <FormInput
              // changeStep={}
              type={FORM?.formActual.flujo[FORM.step].valueType}
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