import React from 'react'

export const TwitterIcon = ({isHover,setHover}) => {
  return (
    <svg
    onMouseOver={()=>setHover('twitterIcon')}
    onMouseLeave={()=>setHover('')}
    xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="none">
        <path fill={isHover==='twitterIcon'?'#6E9F00':"white"} d="M36 3.55855C34.6761 4.1599 33.2539 4.56621 31.7588 4.74987C33.3015 3.80363 34.4557 2.31435 35.0059 0.559934C33.5565 1.44244 31.9702 2.06362 30.316 2.39648C29.2036 1.17894 27.7302 0.371933 26.1245 0.100754C24.5189 -0.170425 22.8708 0.109396 21.4361 0.896774C20.0015 1.68415 18.8606 2.93503 18.1905 4.45521C17.5204 5.97539 17.3587 7.67981 17.7305 9.30386C14.7937 9.1527 11.9207 8.37022 9.29795 7.00721C6.67524 5.64419 4.36141 3.73109 2.50665 1.39207C1.87246 2.5135 1.5078 3.81371 1.5078 5.19844C1.50709 6.44501 1.80655 7.67249 2.37962 8.77196C2.95269 9.87144 3.78164 10.8089 4.79292 11.5012C3.6201 11.463 2.47315 11.1381 1.44755 10.5537V10.6512C1.44743 12.3996 2.0374 14.0941 3.11735 15.4474C4.1973 16.8006 5.70072 17.7291 7.3725 18.0754C6.28452 18.3773 5.14385 18.4217 4.03664 18.2054C4.50832 19.7098 5.4271 21.0253 6.66437 21.9678C7.90164 22.9103 9.39545 23.4326 10.9367 23.4615C8.32036 25.5669 5.08922 26.709 1.76306 26.7039C1.17386 26.7041 0.585165 26.6688 0 26.5983C3.37625 28.8236 7.30645 30.0046 11.3204 30C24.908 30 32.3359 18.4639 32.3359 8.45872C32.3359 8.13367 32.328 7.80537 32.3138 7.48031C33.7586 6.40922 35.0058 5.08288 35.9968 3.56342L36 3.55855Z" />
    </svg>
  )
}