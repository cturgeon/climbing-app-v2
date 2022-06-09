import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../prisma/db";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user?.role) {
        token.role = user.role;
      }
      return token;
    },
    async session(session, token) {
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
});
