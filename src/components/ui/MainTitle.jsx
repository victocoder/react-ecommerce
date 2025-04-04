import React from 'react'

const MainTitle = ({title,className}) => {
  return (

      <h1 className={`text-center text-2xl font-bold font-body text-blue-0 ${className}`}>{title}</h1>
  
  )
}

export default MainTitle
