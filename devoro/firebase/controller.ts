import { getSession } from "next-auth/react";
import { db } from "./firebase";
import { collection, orderBy, query, where } from 'firebase/firestore'
import { Session } from "next-auth";

interface CustomSession extends Session {
    id?: string;
  }

const session = getSession() as unknown as {
    id: string; data: CustomSession | null }

export const usersCollection = collection(db, "users");

export const postsCollection = collection(db, 'posts');

//query
export const specificPost = query(postsCollection, where ('userId', "==", '156d77a5-7f75-4a1a-93bd-369d6e77ca3c'),orderBy('timestamp'))
