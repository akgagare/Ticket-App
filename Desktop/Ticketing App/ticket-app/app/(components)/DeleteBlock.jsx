import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteBlock = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faTrash} className='text-red-700 hover:cursor-pointer hover:text-white'/>
    </div>
  )
}

export default DeleteBlock
