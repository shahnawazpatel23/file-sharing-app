"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import check from '../../../../../public/check.svg'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react';

const UploadComplete = ({handleuploadcomplete}) => {
   const router = useRouter();   
 
    return (
    <div  className='flex flex-col items-center cursor-pointer mt-20 relative '>
        <X className='absolute top-0 right-0 mr-5 ' onClick={()=>{handleuploadcomplete()}} />
        <div className='text-center font-bold text-primary p-10 text-5xl '>Uploaded Successfully</div>
        <Image src={check} width={200} height={200} alt='upload completed'/>
        
    </div>
  )
}

export default UploadComplete