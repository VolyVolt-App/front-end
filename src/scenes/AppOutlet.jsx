import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppOutlet = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
