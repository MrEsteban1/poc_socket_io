import React from 'react'
import { formInfo } from '../../interfaces/forms'

const FormInfo = ({info}: {info: formInfo}) => {
    
  return (
    <>
        {info.title && <h4>{info.title}</h4>}
        {info.text && <p>{info.text}</p>}
        {info.image && <span>{info.image}</span>}
    </>
  )
}

export default FormInfo