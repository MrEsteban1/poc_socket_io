import { FormBot } from "./forms";

export interface FormContextInterface {
    forms: FormBot[],
    formActual: FormBot
    changeForm: (id:string)=> void
}