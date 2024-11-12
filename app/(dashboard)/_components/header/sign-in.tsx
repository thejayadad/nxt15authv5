
import { signIn } from '@/auth';
import React from 'react'

const SignIn = () => {
  return (
    <form
    action={async () => {
      "use server";
      await signIn();
    }}
  >
    <button type="submit">
      LogIn
    </button>
  </form>
  )
}

export default SignIn