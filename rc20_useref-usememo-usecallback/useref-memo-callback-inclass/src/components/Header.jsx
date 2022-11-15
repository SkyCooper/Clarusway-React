import React from 'react'

const Header = ({count}) => {
  console.log("Render => Header Components")
  return (
    <div className='bg-warning text-center'>Header Componenti : {count}</div>
  )
}

export default Header