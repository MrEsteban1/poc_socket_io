import { List, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import { FormsContext } from '../../context/FormsContext'
import FormItem from './FormItem'

const FormList = () => {
    const FormsBots = useContext(FormsContext)
  return (
    <List sx={{overflowX:"hidden", maxHeight: "40vh"}}>
        {FormsBots?.forms && FormsBots.forms.map(item => <FormItem key={item.id} title={item.title} id={item.id} handleChange={FormsBots.changeForm}/>)}
    </List>
  )
}

export default FormList