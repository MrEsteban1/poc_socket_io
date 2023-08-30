import { useEffect } from "react";
import { FormType } from "../../enum/Genelares";
import InputDateForm from "./inputs/InputDateForm";
import InputNumberForm from "./inputs/InputNumberForm";
import InputTextForm from "./inputs/InputTextForm";

interface Props {
  type: string;
  // changeStep: (step: number) => void;
}

const FormInput = ({ type }: Props) => {
  const inputs: { [key: string]: JSX.Element } = {
    texto: <InputTextForm />,
    numero: <InputNumberForm />,
    fecha: <InputDateForm />,
  };

  useEffect(() => {}, [type]);
  return <>{inputs[type]}</>;
};

export default FormInput;
