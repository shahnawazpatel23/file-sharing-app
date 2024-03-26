import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'


const MobileNav = ({handleOnclick}) => {

  return (
    <div className='flex justify-end p-1 relative'>
        
        <AlignJustify className='md:hidden absolute left-0' onClick={()=>{handleOnclick()}}/>
        <div className="p-1"><UserButton /></div>
        
        
    </div>
  )
}

export default MobileNav