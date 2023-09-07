import Form from './body/Form'
import { Box } from '@mui/material'
import FormSelection from './list/FormSelection'
import { FormsProvider } from '../../context/FormsContext'

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