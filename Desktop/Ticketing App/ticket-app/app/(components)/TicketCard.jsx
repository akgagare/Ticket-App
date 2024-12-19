import React from 'react'
import DeleteBlock from './DeleteBlock'
import Priority_Display from './Priority_Display'
import ProgressBar from './ProgressBar'
import StatusDisplay from './StatusDisplay'
const TicketCard = () => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-2 mb-2' >
      
      <div className='flex mb-3'>
        <Priority_Display/>
        <div className='ml-auto'>
            <DeleteBlock/>
        </div>
      </div>
      <h4 className='font-bold text-3xl'>Ticket Title</h4>
      <hr className='h-px border-0 bg-page mb-2'></hr>
      <p className='text-white'>This is the description of the ticket </p>
      <div className='flex-grow'></div>
      <div className='flex-grow'></div>
      <div className='flex mt-2'>
        <div className='flex flex-col'>
            <p className='text-xs'>08/12/2024          09:45 PM        </p>
            <ProgressBar/>
        </div>
        <div className='flex ml-auto'>
             <StatusDisplay/>
        </div>
        

      </div>
     

    </div>
  )
}

export default TicketCard
