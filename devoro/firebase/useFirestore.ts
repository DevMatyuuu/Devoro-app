'use client'

import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { usersCollection } from "./controller";

export default function useFirestore() {
    const [users, setUsers] = useState<user[]>([])

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
  
    return { users };
  
}





