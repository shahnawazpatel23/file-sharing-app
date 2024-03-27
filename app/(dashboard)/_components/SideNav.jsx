"use client"
import { Upload,File } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SideNav = ({setClick}) => {
    const router = useRouter()
    const menuList = [
        {
            id:1,
            title:"Upload",
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            title:"Files",
            icon:File,
            path:'/files'
        },
    ]
    const [activeidx,setActiveidx]=useState(0);

    const handleItemClick = (path, index) => {
        router.push(path); 
        setActiveidx(index); 
        setClick(prev=>!prev);
    };

  return (
    <div className='md:w-64 shadow-sm border-r h-full w-64 bg-white'>
        <div className=' p-4 '>
            <Image src='/logo.svg' alt='logo' width={150} height={150} className=''/>
        </div>
        <div className='flex flex-col float-left  w-full'>
        {menuList.map((item,index)=>(
            <button key={index} className={`w-full flex gap-3 p-4 hover:bg-gray-100 text-gray-500 ${activeidx==index?'bg-gray-200 text-primary':null}`}
            onClick={()=>handleItemClick(item.path,index)}>
                <item.icon/>
                <h2>{item.title}</h2></button>
        ))}
        </div>
    </div>
  )
}

export default SideNav