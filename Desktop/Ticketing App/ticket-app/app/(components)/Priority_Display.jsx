import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Priority_Display = ({priority}) => {
  return (
    <div className='flex justify-start align-baseline gap-2 '>
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 0 ? "text-red-600" : "text-gray-950"}`}/>
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 1 ? "text-red-600" : "text-gray-950"}`}/>
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 2 ? "text-red-600" : "text-gray-950"}`}/>
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 3 ? "text-red-600" : "text-gray-950"}`}/>
      <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 4 ? "text-red-600" : "text-gray-950"}`}/>
    </div>
  )
}

export default Priority_Display
