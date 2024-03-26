import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='w-full h-2 rounded-xl mt-3 bg-gray-500 flex flex-col'>

        <div className={`h-2 rounded-xl bg-primary`}
        style={{width:`${progress}%`}}></div>
        

    </div>
  )
}

export default ProgressBar