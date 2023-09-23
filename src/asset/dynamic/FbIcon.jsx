import React from 'react'

export const FbIcon = ({isHover,setHover}) => {
  return (
<svg 
onMouseOver={()=>setHover('FbIcon')}
onMouseLeave={()=>setHover('')}
xmlns="http://www.w3.org/2000/svg" width="15" height="29" viewBox="0 0 15 29" fill="none">
<path fill={isHover==='FbIcon'?'#6E9F00':"white"} d="M9.74454 29V15.7933H14.187L14.8474 10.6224H9.74454V7.32876C9.74454 5.83663 10.1591 4.81503 12.2943 4.81503H15V0.204916C13.6835 0.0634237 12.3603 -0.00489535 11.0363 0.000272589C7.10958 0.000272589 4.41356 2.40443 4.41356 6.81796V10.6127H0V15.7836H4.4232V29H9.74454Z" />
</svg>
  )
}
