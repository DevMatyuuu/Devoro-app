'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React  from 'react'
import { IoNotificationsOutline } from "react-icons/io5";


export default function Navbar() {
  
  const {data: session } =  useSession()
  if(session) {
    return (
      <div className='bg-gray-100 flex fixed xl:w-[700px] lg:w-[599px] md:w-[639px] w-[400px] py-6 px-5 border-b border-slate-400/25'>
          <div className='flex items-center justify-between w-full'>
              <IoNotificationsOutline size={32} className='text-purple-900'/>
              <span className='font-semibold text-lg text-slate-600/90'>Hi, Dev {session.user?.name?.split(' ')[0]}!</span>
          </div>
      </div>
    )
  }
}
