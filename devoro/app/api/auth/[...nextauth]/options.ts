import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const options: NextAuthOptions = {
   providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
   ],
   pages: {
    signIn: '/login'
   },
   session: {
    strategy: 'jwt'
   }
};