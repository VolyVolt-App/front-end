import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const MuiSelect = (props) => {
    const {label,name, options}= props

    return (
        <FormControl {...props}>

          <InputLabel id={name}>{label}</InputLabel>
            <Select labelId={name} label={label} {...props}>
                {options.map((item,index)=>(
                    <MenuItem key={index} value={item}>{item}</MenuItem>
                ))}
            </Select>
          </FormControl>
    )
}

export const FormSelect = (props) => {
    const {control} = useFormContext()
    const {name,label} = props
  return (
    <Controller
    render={({field})=>(
        <MuiSelect {...props} {...field}/>
    )}
    control={control}
    name={name}/>
  )
}
/*
<FormControl color='yellowVoly'>

          <InputLabel id="connuvoly">Comment avez-vous connu VolyVolt?</InputLabel>
            <Select labelId="connuvoly" label='Comment avez-vous connu VolyVolt?' color='yellowVoly'>
              <MenuItem value={'Mouteur de recherche'}>Mouteur de recherche</MenuItem>
              <MenuItem value={'Recommandation'}>Recommandation</MenuItem>
              <MenuItem value={'Linkin'}>Linkin</MenuItem>
              <MenuItem value={'Facebook'}>Facebook</MenuItem>
              <MenuItem value={'Evenement'}>Evenement</MenuItem>
              <MenuItem value={'Autre'}>Autre</MenuItem>
            </Select>
          </FormControl>


*/