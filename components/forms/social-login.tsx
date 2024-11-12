import React from 'react'
import { FcGoogle} from "react-icons/fc"
const SocialLogin = () => {
  return (
    <div className='flex items-center w-full gap-x-2 p-2'>
        <button className='flex w-full justify-center bg-neutral/20 rounded-lg p-2 space-x-2 items-center'>
            <p>LogIn With Google</p> <FcGoogle className='h-5 w-5' />
        </button>
    </div>
  )
}

export default SocialLogin