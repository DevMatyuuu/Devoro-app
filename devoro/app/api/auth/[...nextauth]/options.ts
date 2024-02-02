import type { NextAuthOptions, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { JWT } from 'next-auth/jwt';
import { v4 as uuidv4 } from 'uuid';

interface CustomSession extends Session {
  id?: string;
}

interface CustomJWT extends JWT {
    id?: string;
  }

export const options: NextAuthOptions = {
   providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
    })
   ],
   pages: {
    signIn: '/login'
   },
   session: {
    strategy: 'jwt'
   },
   callbacks: {
    async jwt({ token, account,}) {
      const customToken = token as CustomJWT;
      if (account) {
        customToken.id = uuidv4();
      }
      return customToken;
    },
    async session({ session, token}) {
      const customSession = session as CustomSession;
      const customToken = token as CustomJWT;
      if (customToken) {
        customSession.id = customToken.id;
      }
      return customSession;
    }
  },
  
};
