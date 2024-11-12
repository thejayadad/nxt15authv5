
##CREATE APP
- clean up homePage & global
- add the package.json update
- daisyui

##CARD
- components folder
- login & register page
- formwrapper component
- form header
- back button
- social login
- submit button

##MARKETING PAGE


##MODELS
- models folder
- npm i mongoose


##AUTHJS SETUP
- follow the docs


##MONGODB DATABASE SETUP
- follow the process


##REGISTER USER
- lib folder
- add the action
- update the form


##LOGIN USER
- auth.ts update
- import crendtials
- providers update then credentials with email and password
- add all info up to the callback

```
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcrypt-ts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      //authorize

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectDB()
        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }
        const userData = {
          name: user.name,
          email: user.email,
          id: user._id,
        };
        return userData;

      }
    })
  ],
  pages: {
    signIn: "/login",
  },
})

```
- Login Function
- update the form then test it out


##GOOGLE LOGIN
