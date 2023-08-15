import { Box } from '@mui/material';
import { ReactElement, createContext } from 'react';

export interface ProductCardProps {
  children?: ReactElement | ReactElement[] 
}

export interface MensajeContextProps {
  mensaje: string
}

export const ProductContext = createContext({} as MensajeContextProps);
const { Provider } = ProductContext;

export const MensajeCard = ({ children }: ProductCardProps ) => {

    return (
        <Provider value={{
            mensaje:"hola"
        }}>
            <Box sx={{backgroundColor: "PaleTurquoise", minHeight:"15vh",padding:"2px",  minWidth: "40vh",maxWidth:"60vh", borderRadius: "23px" }} >
                { children }
            </Box>
        </Provider>
    )
}