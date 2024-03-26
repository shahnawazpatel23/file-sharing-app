"use client";

import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import MobileNav from "./_components/MobileNav";




const layout = ({ children }) => {

  const [click,setClick]=useState(false)
  const handleOnclick=()=>{
    
      setClick(!click)
      console.log(click)
  }
  return (
    <div className="relative">
       
      
      <div className={` md:flex h-full md:w-64  flex-col fixed inset-y-0 z-50  duration-600 ${click?'block':'hidden'}  `}>
        <SideNav />
      </div> 
      <div className={` ${click?'ml-64':''} `}>        
        <MobileNav handleOnclick={handleOnclick} />
        
      </div>
      <div className={` md:ml-64 ${click?'absolute':''} `}>{children}</div>
      
      
    </div>
  );
};

export default layout;
