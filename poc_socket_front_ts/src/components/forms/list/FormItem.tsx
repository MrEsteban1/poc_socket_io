import { Button } from '@mui/material'

interface Props {
  title: string,
  id: string
  handleChange: (id: string) => void
}
const FormItem = ({ title, id, handleChange }: Props) => {
  
  return (
    <Button
      onClick={() => handleChange(id)}
      variant='contained'
      sx={{
        width: '95%',
        marginTop: '10px',
        background: '#228439',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontSize: '12px',
        '&:hover': {
          backgroundColor: '#175726',
        },
      }}
    >
      {title}
    </Button>
  )
}

export default FormItem