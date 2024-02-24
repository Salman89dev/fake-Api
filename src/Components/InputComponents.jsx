import { TextField } from '@mui/material'
import React from 'react'

const InputComponents = (props) => {
    const {placeholder,type,id,required } =props
  return (
    <div>
      <TextField fullWidth style={{marginBottom:20}} placeholder={placeholder} required={required} id={id} type={type} />
    </div>
  )
}

export default InputComponents
