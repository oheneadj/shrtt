import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/user.model";
import bcrypt from "bcrypt";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) return null;

        const checkPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!checkPassword) return null;
        console.log(user);
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (token && user) {
        token.id = user._id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token, user }) {
      if (session && token) {
        session.id = token.id;
        session.name = token.name;
        session.email = token.email;
      }

      return session;
    },
  },
  secret: "secret",

  pages: {
    signIn: "/login",
    newUser: "/dashboard",
  },
  jwt: {
    secret: "secret",
    encrypt: true,
  },
});
