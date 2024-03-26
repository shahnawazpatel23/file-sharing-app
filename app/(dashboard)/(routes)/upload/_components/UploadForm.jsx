"use client"
import React, { useState } from 'react'

import { toast } from 'react-toastify';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';


const UploadForm = ({handleUpload,progress}) => {
  const [file,setFile]=useState(null);

  const onFileSelect = (file) =>{
    if(file && file.size>5000000){
      return toast.error("File size greater than 2MB!!!")
    }
    console.log("upload form ke andr ki file",file);
    setFile(file);

    
      
  }


  return (
    <div className='text-center'>
    <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-500 dark:hover:bg-gray-700 dark:bg-slate-500 hover:bg-gray-700 dark:border-gray-800 dark:hover:border-gray-500 ">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-300 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinejoin="round"  strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="text-xl mb-2  text-gray-400 dark:text-gray-300"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-400 dark:text-gray-300">SVG, PNG, JPG or GIF (MAX 5MB)</p>
            </div>
            <input id="dropzone-file" 
            type="file"
             className="hidden" 
             onChange={(e)=>onFileSelect(e.target.files[0])}/>
        </label>
    </div> 
    {file&&<FilePreview file={file} remove={()=>setFile(null)}/>}
    
    {progress>0?<ProgressBar progress={progress}/>:<button 
    disabled={!file || progress}
    onClick={()=>handleUpload(file)}
    className='text-white w-[25%] bg-primary rounded-md  text-center p-2 px-3 font-bold mt-7 hover:bg-blue-600 disabled:bg-blue-300' 
    >Upload</button>} 
    
    </div>
  )
}

export default UploadForm