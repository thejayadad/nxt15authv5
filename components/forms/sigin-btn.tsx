import { signIn } from '@/auth';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  return (
    <form
    className='w-full'
    action={async () => {
      "use server";
      await signIn("google");
    }}
>
<button className='flex w-full justify-center border rounded-lg p-2 space-x-2 items-center'>
    <p>LogIn With Google</p> <FcGoogle className='h-5 w-5' />
</button>
</form>
  )
}

export default SignIn