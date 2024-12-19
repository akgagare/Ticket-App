import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Priority_Display = () => {
  return (
    <div className='flex justify-start align-baseline gap-2 '>
      <FontAwesomeIcon icon={faFire} className='text-red-400'/>
      <FontAwesomeIcon icon={faFire} className='text-red-400'/>
      <FontAwesomeIcon icon={faFire} className='text-red-400'/>
      <FontAwesomeIcon icon={faFire} className='text-red-400'/>
      <FontAwesomeIcon icon={faFire} className='text-red-400'/>
    </div>
  )
}

export default Priority_Display
