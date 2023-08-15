import { Box } from '@mui/material'
import "./mensaje.css"

const MensajeFoto = () => {
  return (
    <Box sx={{marginLeft: "15px"}}>
       <Box sx={{backgroundColor:"LightSeaGreen", height: "15vh", width:"20vh",borderRadius:"15px", display:"flex",justifyContent:"center", alignItems:"center"}}>
            <img className='mensaje-imagen' src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="title" />
        </Box>
    </Box>  
  )
}

export default MensajeFoto