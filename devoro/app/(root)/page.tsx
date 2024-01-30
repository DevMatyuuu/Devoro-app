import Post from '@/components/Post'
import React from 'react'
import dynamic from 'next/dynamic';


export default function Home() {
  return (
    <div>
      <div className='flex justify-center items-center w-[95%] mx-auto'>
        <Post />
      </div>
    </div>
  )
}
