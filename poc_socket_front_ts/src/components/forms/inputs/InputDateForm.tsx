import React, { useContext, useState } from 'react'
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Alert, Box, Button } from '@mui/material';
import { FormsContext } from '../../../context/FormsContext';


const InputDateForm = () => {
  const fecha = new Date()
  const FORM = useContext(FormsContext)
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(fecha.toDateString()));
  const [error, setError] = useState<boolean>(false);
  const step = FORM?.formActual.flujo[FORM.step]

  const handleClick = (id:string) => {
    FORM?.saveVariables(step?.variableName||" ", value?.toDate() || fecha)
    FORM?.changeStep(id||" ")
  }

  return (
    <Box 
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        sx={{backgroundColor:"white"}}
        value={value}
        onChange={(newValue)=>{setValue(newValue)}}
        format='DD-MM-YYYY' />
    
        <Button 
          onClick={()=> handleClick(step?.idDestino || " ")}
          sx={{width:"50%", margin: "10px"}}
          variant='contained'
          disabled={!value?.isValid() }
        >
          Siguiente
        </Button>
        {!value?.isValid() &&  <Alert sx={{ marginTop: "16px" }} severity="warning">
          Debe ingresar una fecha valida.
        </Alert>}
      </LocalizationProvider>
    </Box>
  )
}

export default InputDateForm