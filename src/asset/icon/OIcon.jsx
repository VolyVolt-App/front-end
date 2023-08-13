import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'
import { ReactComponent as OcIconn } from './o2.svg'

//viewBox="0 0 24 24"

export const OIconn = (props) => {
  return (
    <SvgIcon component={OcIconn}  {...props} />
  )
}
