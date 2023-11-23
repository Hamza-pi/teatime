import React from 'react'

const PopUp = ({children}) => {
  return (
    <div className='bg-lightDark rounded-xl py-4'>
      {children}
    </div>
  )
}

export default PopUp