import { Box } from '@mui/material'
import React, { useState } from 'react'
import MensajesChat from '../mensajes/MensajesChat'
import MensajeInput from '../mensajes/MensajeInput'

const MensajeChatsScreen = () => {
  const [nuevoMensaje, setNuevoMensaje] = useState("")
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        // width: "100%",
      }}>
        <MensajesChat/>
        <MensajeInput setMensaje={setNuevoMensaje}/>
      </Box>
  )
}

export default MensajeChatsScreen