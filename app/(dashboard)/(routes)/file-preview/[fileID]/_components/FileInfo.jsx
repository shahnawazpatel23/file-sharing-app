"use client"

import { File } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const FileInfo = ({file}) => {

  const [fileType,setFiletype] = useState()
  useEffect(()=>{
    console.log("file is ",file);
    file&&setFiletype(file.fileType.split('/')[0]);
    console.log(fileType);

  },[file])



  return file && (
    <div className='text-center border flex justify-center
    m-4 flex-col items-center p-2 rounded border-blue-200'>
      <Image src={fileType=='image' ?file?.fileUrl :<File/>}
      width={200} height={200} 
      className='h-[200px] rounded-md object-contain'/>
      <div >
        <h2>{file.fileName}</h2>
        <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
        <h2 className='text-gray-400 text-[13px]'>{file.fileSize}</h2>
      </div>
    </div>
  )
}

export default FileInfo