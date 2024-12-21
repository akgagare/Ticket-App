import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <span className='inline-block rounded-full px-2 py-1 text-md font-semibold text-white  bg-green-500 hover:bg-white hover:text-green-500'>
     {status}
    </span>
  )
}

export default StatusDisplay
