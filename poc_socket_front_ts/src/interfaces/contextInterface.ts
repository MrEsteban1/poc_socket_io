import { VariableTipo } from "../context/FormsContext";
import { FormBot, Variable } from "./forms";

export interface FormContextInterface {
    forms: FormBot[],
    formActual: FormBot
    variables: Variable
    saveVariables: (nombreVariable: string, valor:VariableTipo  )=>void
    changeStep: (id:string)=>void
    changeForm: (id:string)=> void
    step: number
}