'use client'
import React from 'react'
import { FormWapper } from './form-wrapper'
import { SubmitButton } from './submit-button'
import { register } from '@/lib/action/user/register-user'



const RegisterForm = () => {
  return (
    <FormWapper
    titleLabel='Welcome, Register Below'
    backButtonLabel='Already have an account?'
    backButtonHref='/login'
    >
        <form
        action={register}
        >
        <div className='flex flex-col gap-1'>
            <span className="label-text">UserName</span>
            <input name='name' id='name' type="text" placeholder="Username..." className="input input-bordered w-full" />
             </div>
            <div className='flex flex-col gap-1'>
            <span className="label-text">Email</span>
            <input name='email' id='email' type="text" placeholder="Email..." className="input input-bordered w-full" />
             </div>
             <div className='flex flex-col gap-1'>
             <span className="label-text">Password</span>
            <input name='password' id='password' type="password" placeholder="Password..." className="input input-bordered w-full" />
                <SubmitButton label='Register' />
             </div>
        </form>
    </FormWapper>
  )
}

export default RegisterForm