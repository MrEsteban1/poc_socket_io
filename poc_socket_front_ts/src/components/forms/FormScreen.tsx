import React, { useContext } from 'react'
import Form from './Form'
import FormInfo from './FormInfo'
import { Box } from '@mui/material'
import FormSelection from './FormSelection'
import { FormsContext, FormsProvider } from '../../context/FormsContext'
import { FormBot } from '../../interfaces/forms'

const FormScreen = () => {
  return (
    <>
      <FormsProvider>
        <Box sx={{display: 'flex'}} >
          <FormSelection/>
          <Form />
        </Box>
      </FormsProvider>
    </>
    
  )
}

export default FormScreen