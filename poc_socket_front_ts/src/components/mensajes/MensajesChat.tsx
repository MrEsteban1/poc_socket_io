import React from 'react'
import { Box } from '@mui/material'
import DialogComponentPatter from '../views/DialogComponentPatter'


const MensajesChat = () => {
  return (
    <Box sx={{backgroundColor: "LightGray",
            minHeight: "60vh",
            maxHeight: "60vh",
            padding:"10px",     
            overflowY: "scroll",
            width: "60vw",
            borderRadius: "20px 20px 0px 0px",}}>
            <DialogComponentPatter />
        </Box>
  )
}

export default MensajesChat