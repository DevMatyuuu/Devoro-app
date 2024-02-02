import useFirestore from '@/firebase/useFirestore'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'


export default function Feed() {
  const { allPost } = useFirestore()

  const router = useRouter()

  const reversedPosts = allPost.toReversed()
  const {data: session} = useSession();

  if(session){
    return (
      <div>
        {reversedPosts.map((posts) => (
          <div key={posts.id}>
            <span>{posts.text}</span>
          </div>
        ))}
      </div>
    )
  } router.push('/login')
}
