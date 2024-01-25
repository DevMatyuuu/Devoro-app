import React  from 'react'
import { IoNotificationsOutline } from "react-icons/io5";


export default function Navbar() {
  

  return (
    <div className='bg-gray-100 flex fixed xl:w-[700px] lg:w-[599px] md:w-[639px] w-[400px] py-6 px-5 border-b border-slate-400/25'>
        <div className='flex items-center justify-between w-full'>
            <IoNotificationsOutline size={32} className='text-purple-900'/>
            <span className='font-semibold text-lg text-slate-600/90'>Hi, Dev Mel!</span>
        </div>
    </div>
  )
}
