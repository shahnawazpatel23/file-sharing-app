"use client";

import { EyeIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect,useState } from "react";

const FileItem = ({ file }) => {
  useEffect(() => {
    console.log("re ladle gedi laga sed mai", file);
  }, []);
  const [password,setPassword] = useState('');
  const router = useRouter()
  const handleOnClick = async ()=>{
    if(!file.password){
        router.push(file.fileUrl);
    }
    if(file.password === password){
        router.push(file.fileUrl)
        
    }
    if(file.password != password){
        document.createElement("h5").innerHTML= "Wrong password"    }
  }





  return file && (
    <div>
      <div className="p-5 rounded-md bg-white flex flex-col items-center shadow-md gap-3">
        <div className="text-center flex-col gap-3 items-center flex">
          <h2 className="text-[20px] text-gray-600">
            <strong className="text-primary ">{file.userName + " " }</strong>
             shared a file with you
          </h2>
          <Image
            src="/vision.gif"
            width={150}
            height={150}
            className="p-5 w-[150px] h-[150px] "
          />
          <h2 className="text-gray-500 text-[15px]">{`${file.fileName} 🗲 ${file.fileType} 🗲 ${(file.fileSize/1024/1024).toFixed(2)}MB`}</h2>

        </div>
        {file.password && <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400"
        placeholder="Enter password"/>}
        <button onClick={()=>{handleOnClick()}}  className="flex gap-2 p-2 bg-primary  text-white text-center rounded-md w-full hover:bg-blue-600 justify-center disabled:bg-gray-300"><EyeIcon className="h-6 w-4"/>See File </button>
      </div>
    </div>
  );
};

export default FileItem;
