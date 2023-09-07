import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  children: ReactElement | ReactElement[] | undefined;
  title: string;
}

const FormStep = ({ children, title }: Props) => {
  {
    /* TODO: Hacer los componentes para mostrar la info.   */
  }
  {
    /* TODO: Hacer los componentes para pedir el dato solicidato. */
  }

  return (
    <Box>
      <Typography 
        variant="h5"
        sx={{
          fontFamily: 'Poppins',
          fontWeight: '700',
          marginTop: '15px',  
        }}
      >{title}</Typography>
      {children}
    </Box>
  );
};

export default FormStep;
