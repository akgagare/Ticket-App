import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='flex w-full bg-white rounded-full h-3'>
        <div className='bg-green-600 h-3 rounded-full' style={{width:`${progress}%`}}>

        </div>
    </div>
  )
}

export default ProgressBar
