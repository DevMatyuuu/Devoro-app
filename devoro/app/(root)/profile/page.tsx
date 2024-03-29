'use client'

import useFirestore from '@/firebase/useFirestore'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const { posts } = useFirestore()

  const router = useRouter()

  const {data: session} = useSession();
  const reversedPost = posts.toReversed()

  if(session){
    return (
      <div className='flex flex-col gap-3 w-[95%] mx-auto mt-28'>
        <h1 className='text-4xl font-bold'>Profile</h1>
        <div className='flex flex-col gap-8
        3 border border-black/10 rounded-lg px-5 py-10'>
          <div className='flex justify-center'>
            <img src={session.user?.image as string} alt='user-image' className='h-44 w-44 rounded-full shadow-2xl'/>
          </div>
          <div className='flex flex-col justify-start gap-y-6 w-full'>
            <div className='flex flex-col gap-2 mx-auto w-[60%]'>
              <span>Name:</span>
              <h2 className='py-4 px-4 rounded-lg w-full border border-black/10'>
                {session.user?.name}
              </h2>
            </div>
            <div className='flex flex-col gap-2 mx-auto w-[60%]'>
              <span>Email:</span>
              <span className='py-4 px-4 rounded-lg w-full border border-black/10'>
                {session.user?.email}
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {reversedPost.map((post) => (
            <div key={post.id}>
              <h1>{post.text}</h1>
            </div>
          ))}
        </div>
      </div>
    )
  } router.push('/login')
}
