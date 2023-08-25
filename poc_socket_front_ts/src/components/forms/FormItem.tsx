import { Button, ListItem, ListItemButton, Typography } from '@mui/material'
import React from 'react'

interface Props {
    title: string,
    id:string
    handleChange: (id:string)=> void  
}
const FormItem = ({title, id,handleChange}:Props) => {
  
  return (
    <ListItemButton >
        <Typography onClick={() => handleChange(id)} color={'white'} margin={0}>{title}</Typography>
    </ListItemButton>
    
  )
}

export default FormItem