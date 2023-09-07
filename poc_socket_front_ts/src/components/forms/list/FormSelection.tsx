import { Box, Divider, Typography } from '@mui/material'
import FormList from './FormList'

const FormSelection = () => {

  return (
    <Box className='formSelection'>
      <h3>Form Bots</h3>
      <Divider className='dividerSelection'/>
      <FormList/>
    </Box>
  )
}

export default FormSelection