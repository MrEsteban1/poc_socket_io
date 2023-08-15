import { ListItem, Button } from '@mui/material'
// import React from 'react'
interface Opciones {
    label: string,
    value: string
  }

interface Props {
    opciones: Opciones
}
const MensajeOpcion = ({opciones}:Props) => {
  return (
    <ListItem sx={{margin:"0", padding:"0",paddingLeft:"10px"}}><Button sx={{margin:"0"}} color="success">{opciones.label}</Button></ListItem>
  )
}

export default MensajeOpcion