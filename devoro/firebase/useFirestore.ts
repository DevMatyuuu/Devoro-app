'use client'

import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { postsCollection, specificPost, usersCollection } from "./controller";

export default function useFirestore() {
    const [users, setUsers] = useState<user[]>([])
    const [allPost, setAllPost] = useState<post[]>([])
    const [posts, setPosts] = useState<post[]>([])

    useEffect(
      () => {
      const unsubscribe = onSnapshot(usersCollection, (snapshot: QuerySnapshot<DocumentData>) => {
       setUsers( 
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
          
        })
       );
    });
    return () => unsubscribe();
  },
      []
    );

    useEffect(
      () => {
      const unsubscribe = onSnapshot(postsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
       setAllPost( 
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
          
        })
       );
    });
    return () => unsubscribe();
  },
      []
    );
  
    useEffect(
      () => {
      const unsubscribe = onSnapshot(specificPost, (snapshot: QuerySnapshot<DocumentData>) => {
       setPosts( 
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
          
        })
       );
    });
    return () => unsubscribe();
  },
      []
    );
  
    return { users, posts, allPost };
  
}





