"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'



const DeleteBlock = ({id}) => {
  const router = useRouter();
  const deleteTicket=async()=>{
    const res=await fetch(`http://localhost:3000/api/Tickets/${id}`,{
      method:"DELETE"
    });
    if(res.ok){
      router.refresh();
    }
  };

  return (
    <div>
      <FontAwesomeIcon icon={faTrash} className='text-red-700 hover:cursor-pointer hover:text-white' onClick={deleteTicket}/>
    </div>
  )
}

export default DeleteBlock
