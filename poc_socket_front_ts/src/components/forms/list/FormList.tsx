import { List } from '@mui/material'
import { useContext } from 'react'
import { FormsContext } from '../../../context/FormsContext'
import FormItem from './FormItem'

const FormList = () => {
    const FormsBots = useContext(FormsContext)
  return (
    <List className='listScroll'>
        {
          FormsBots?.forms && FormsBots.forms.map(item => 
            <FormItem 
              key={item.id} 
              title={item.title} 
              id={item.id} 
              handleChange={FormsBots.changeForm}
            />
          )
        }
    </List>
  )
}

export default FormList