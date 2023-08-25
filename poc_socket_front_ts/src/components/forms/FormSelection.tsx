import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { FormsContext } from '../../context/FormsContext'
import FormList from './FormList'

interface Props {
    title: string
    value: string
}

const FormSelection = ({}) => {

  return (
    <Box sx={{backgroundColor:"SteelBlue", width: "20vh", height:"50vh", padding: "10px", borderRadius: "30x"}}>
      <Typography variant='h6' color={"DarkSlateGray"}>FORMS</Typography>
      <FormList/>
    </Box>
  )
}

export default FormSelection