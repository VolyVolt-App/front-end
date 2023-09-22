import React from 'react'

export const FbOutlinedIcon = ({isHover,setHover}) => {
  return (
    <svg
    onMouseOver={()=>setHover('fbIcon')}
    onMouseLeave={()=>setHover('')}
    width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Calque-1">
        <g id="fbicon">
        <path id="Vector" stroke={isHover==='fbIcon'?'#FFC000':"#2F2021"} d="M25.3119 10.9483C23.2788 10.7968 17.7227 10.5652 17.7227 14.8768C17.7227 17.5839 17.7227 20.7344 17.7227 21.8138C17.7227 30.2439 17.7227 35.6286 17.7227 35.6286"  stroke-width="5" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path id="Vector_2" stroke={isHover==='fbIcon'?'#FFC000':"#2F2021"} d="M11.2129 21.8135L25.3137 21.8443"  stroke-width="5" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path id="Vector_3" stroke={isHover==='fbIcon'?'#FFC000':"#2F2021"} d="M2 6.06771C2 3.85678 3.77466 2.06445 5.96385 2.06445H31.2672C33.4564 2.06445 35.2311 3.85678 35.2311 6.06771V31.9977C35.2311 34.2085 33.4564 36.0008 31.2672 36.0008H5.96385C3.77466 36.0008 2 34.2085 2 31.9977V6.06771Z"  stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
        </g>
        </g>
    </svg>
  )
}
