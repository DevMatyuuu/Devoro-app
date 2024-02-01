'use client'

import Post from '@/components/Post'
import React from 'react'
import Feed from '@/components/Feed';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


export default function Home() {

  const {data: session } =  useSession()
  if(session) {
  return (
      <div className='flex flex-col gap-3 justify-center items-center w-[95%] mx-auto'>
        <Post />
        <hr className='h-0.3 bg-black/15 w-full'></hr>
        <Feed />
      </div>
  )
} else redirect('/login')
}



