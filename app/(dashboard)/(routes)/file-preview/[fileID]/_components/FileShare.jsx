"use client"

import SendEmail from '../../../../../../app/utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import { Copy } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const FileShare = ({file,onPasswordSave}) => {

  const [isPasswordEnable,setIsPasswordEnable]=useState(false)
  const [password,setPassword]=useState('')
  const handleCopyClick = () => {
    navigator.clipboard.writeText(file.shortUrl)
      .then(() => setIsCopied(true))
      .catch((error) => console.error('Failed to copy:', error));
      toast.info('Copied')
  };
  const savepassword = (e)=>{
    e.preventDefault()
    setPassword(e.target.value)
    console.log("Password saved");
    document.getElementById('button').innertext = "Saved"
  }
 
  const {user} = useUser()
  const [email,setEmail]=useState('')
  const [sending,setSending] = useState(false)

  const sendEmail = ()=>{
    
    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
      shortUrl: file.shortUrl,
      fileUrl:file.fileUrl

    }
    console.log(data);

    SendEmail(data).then((resp)=>{
      // console.log("resopnse of sending email",resp);
      console.log("file in fileshare is ",file);
    })
    setSending(true)
    setTimeout(()=>setSending(false),1000)
  }
 

  return file && (
    <div className='flex flex-col gap-2'>
      <div>
        <label className='text-[14px] text-gray-500 '>Short URL</label>
        <div className='flex gap-5 p-2 border rounded-md justify-between '>
          <input type='text' value={file.shortUrl} disabled
          className='text-gray-500 disbled:text-gray-400 bg-transparent outline-none w-full'/>
          <Copy className='text-gray-400 hover:text-gray-600'onClick={handleCopyClick}/>
        </div>

      </div>
      <div className='
      gap-3 flex mt-5'>
        <input type="checkbox" onChange={(e)=>setIsPasswordEnable(prev=>!prev)} />
        <label >Enable Password?</label>
      </div>

      {isPasswordEnable && 
      <div className='flex gap-3 items-center'>
        <div className="border rounded-md w-full p-2">
          <input type="password" placeholder='password' value={password} onChange={savepassword} 
          className='outline-none'/>
        </div>
          <button className='text-white bg-primary rounded-md p-2' id='button' onClick={()=>onPasswordSave(password)}>Save</button>
      </div>
      }

      <div>
      <label className='text-[14px] text-gray-500 '>Send File to Email</label>
      <div className='flex flex-col gap-3'>
        <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}
        className='text-gray-500  bg-transparent border rounded-md p-2 outline-none w-full'/>
        <button className='text-white bg-primary rounded-md p-2 disabled:bg-gray-700' disabled={!email} id='sendemail'
        onClick={()=>sendEmail()}>{ sending?"Sent":"Send Email"}</button>
      </div>
      </div>


    </div>
  )
}

export default FileShare