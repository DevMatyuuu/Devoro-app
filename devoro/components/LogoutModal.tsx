'use client'

import React from 'react'
import useModalStore from '@/store/modalStore'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function LogoutModal() {
const [isOpen, setClose] = useModalStore((state) => [state.isOpen, state.setClose])

  return (
    <>
    {isOpen ? <div>
        <div className='w-[400px] h-40 rounded-xl border border-black/10 py-8 bg-yellow-100/5 shadow-2xl'>
            <div className='flex flex-col justify-center gap-8 items-center font-semibold'>
                <h2>Are you sure you want to logout?</h2>
                <div className='flex items-center gap-7'>
                    <button className='bg-red-500 hover:bg-red-800 text-white py-1.5 px-5 rounded-lg' onClick={setClose}>Cancel</button>
                    <Link href='/login'><button className='text-purple-500 font-bold' onClick={() => signOut()}>Logout</button></Link>
                </div>
            </div>
        </div>
    </div> : ''}
    </>
  )
}

