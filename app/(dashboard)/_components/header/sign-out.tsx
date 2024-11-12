

import { signOut } from '@/auth';
import React from 'react'

const SignOut = async () => {
  return (
    <form
    action={async () => {
      "use server";
      await signOut();
    }}
  >
    <button type="submit">
      Logout
    </button>
  </form>
  )
}

export default SignOut