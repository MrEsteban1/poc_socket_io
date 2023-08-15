import { Button, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MensajeOpcion from './MensajeOpcion'

interface Opciones {
  label: string,
  value: string
}

const opciones: Opciones[] = [
]

const MensajeListaOpciones = () => {
  const [indice, setIndice ] = useState(0)
  const maxItems = 5
  for(let i = 1; i <= 20; i++ ){
    opciones.push({label:"Opcion"+i,value: "opcion"+i })
  }

  const cambiarIndice = ()=>{
    indice >= opciones.length ? setIndice(0): setIndice(indice+1) 
    }

  useEffect(()=>{},[])
  
  return (
    <List>
      {opciones.map((opcion) => {
        return <MensajeOpcion opciones={opcion} />
        }).slice(indice + maxItems*indice, indice + maxItems*indice + maxItems)}
        {opciones.length > maxItems && <ListItem><Button onClick={cambiarIndice}  > Mostrar más opciones... </Button></ListItem>}
    </List>
  )
}

export default MensajeListaOpciones