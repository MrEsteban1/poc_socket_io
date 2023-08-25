import { ReactNode, createContext, useState } from "react";
import { FormBot } from "../interfaces/forms";
import { FormContextInterface } from "../interfaces/contextInterface";
import formBots from "../constants/formsbot";

export const FormsContext = createContext<FormContextInterface|null>(null)

type FormContextProvProps = {
    children: ReactNode
}

export const FormsProvider = ({children}:FormContextProvProps)=> {
    const [formBot,setFormBot] = useState<FormBot[]>(formBots)
    const [formActual, setFormActual] = useState<FormBot>(formBot[0])

    const changeForm = (id:string) => {
        const form = formBot.find(item => item.id === id)
        console.log(id)
        form && setFormActual(form)
    }

    return (<FormsContext.Provider value={{forms: formBot, formActual,changeForm}}>
        {children}
        </FormsContext.Provider>)
}