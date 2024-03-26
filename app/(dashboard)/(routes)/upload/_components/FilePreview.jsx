"use client"


import { FileCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FilePreview = ({file,remove}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className="flex">
        <Image src='/upload.gif' width={100} height={100} alt='upload giffy'/>
        {console.log(file)}
        <div className='flex flex-col p-2 text-left text-gray-600'>
            <h2>{file.name.split('.')[0]}</h2>
            <h2>{`${(file.size/1024/1024).toFixed(2)} MB `}</h2>
            <h2>{file?.type.split('/')[1]}</h2>
        </div> 
        </div>
        <button className='bg-red-400 text-white font-bold rounded-md p-2 px-5 mt-3 hover:bg-red-600'
        onClick={()=>remove()}>Remove</button>


    </div>
  )
}

export default FilePreview