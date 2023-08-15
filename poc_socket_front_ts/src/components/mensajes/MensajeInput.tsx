import { Box, TextField,Button } from '@mui/material'
import React from 'react'
interface Props {
    setMensaje : Function
}
const MensajeInput = ({setMensaje}:Props) => {
  return (
    <Box sx={{ backgroundColor: "MediumAquamarine" }}>
        <TextField
        onChange={(e) => setMensaje(e.target.value)}
        sx={{ width: "80%", margin: "10px", backgroundColor: "white" }}
        label="Mensaje"
        />
        <Button sx={{margin:"20px", marginLeft: "0px"}} variant="contained">
          Enviar
        </Button>
    </Box>
  )
}

export default MensajeInput