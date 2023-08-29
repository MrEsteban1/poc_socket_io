// import { FormType } from "../enum/Genelares"

export interface formsStep {
  id: string;
  valueType: FormType;
  variableName: string;
  background?: string;
  flow?: string;
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
