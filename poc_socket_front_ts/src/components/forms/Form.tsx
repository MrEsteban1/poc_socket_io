import { Box, Typography } from '@mui/material'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import FormStep from './FormStep'
import { FormsContext } from '../../context/FormsContext'
import FormInfo from './FormInfo'
interface Props{
}
const Form = ({} : Props) => {
  const FORM = useContext(FormsContext)
  const [step, setStep] = useState(0)

  useEffect(()=>{},[FORM?.formActual])
  return (
    <Box sx={{backgroundColor: "PowderBlue", height: "50vh", width: "70vh", padding: "10px", borderRadius: "0px 20px 20px 0px", overflow: "hidden"}}>
        <Box>
            <FormStep title={FORM?.formActual.title || " "}>
              {FORM?.formActual.flujo[step] && <FormInfo info={FORM?.formActual.flujo[step].info}/>}  
              {/* {FORM?.formActual.flujo[step] && }   */}
            </FormStep>
            
        </Box>
    </Box>
  )
}

export default Form