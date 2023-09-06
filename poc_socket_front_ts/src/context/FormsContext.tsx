import { ReactNode, createContext, useState } from "react";
import { FormBot, Variable } from "../interfaces/forms";
import { FormContextInterface } from "../interfaces/contextInterface";
import formBots from "../constants/formsbot";

export const FormsContext = createContext<FormContextInterface|null>(null)

type FormContextProvProps = {
    children: ReactNode
}

export type VariableTipo = string | number| boolean | Date

export const FormsProvider = ({children}:FormContextProvProps)=> {
    const [formBot,setFormBot] = useState<FormBot[]>(formBots)
    const [formActual, setFormActual] = useState<FormBot>(formBot[0])
    const [step,setStep] = useState(0)
    const [values,setValues] = useState<Variable>({})

    const changeForm = (id:string) => {
        const form = formBot.find(item => item.id === id)
        console.log(id)
        form && setFormActual(form)
    }

    const saveValue = (nombreVariable:string, valor: VariableTipo) => {
        let newValues = values
        newValues[nombreVariable] = valor
        setValues(newValues)
    } 

    const changeStep = (id:string)=>{
        const index = formActual.flujo.findIndex(bot => id ===bot.id)
        console.log(index,  formActual.flujo)
         setStep(index)
    }

    return (<FormsContext.Provider value={{forms: formBot, formActual,changeForm,step, changeStep ,variables: values, saveVariables:saveValue}}>
        {children}
        </FormsContext.Provider>)
}