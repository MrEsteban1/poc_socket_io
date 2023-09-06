// import { FormType } from "../enum/Genelares"

import { VariableTipo } from "../context/FormsContext";

export interface formsStep {
  id: string;
  valueType: FormType;
  variableName: string;
  background?: string;
  idDestino?: string;
  info: formInfo;
}

export interface formInfo {
  title: string;
  text?: string;
  image?: string;
  url?: string;
}

export interface FormBot {
  flujo: formsStep[];
  title: string;
  id: string;
}

export enum FormType {
  texto = "numero",
  numero = "numero",
  opciones = "opciones",
  imagen = "imagen",
  file = "file",
  fecha = "fecha",
}

export interface Variable {
  [key:string]:VariableTipo
}
