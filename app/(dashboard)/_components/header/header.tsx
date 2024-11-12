import { getSession } from '@/lib/getSession';
import React from 'react'
import SignOut from './sign-out';
import SignIn from './sign-in';

const Header = async () => {
  const session = await getSession();
  const user = session?.user;
  return (
    <header className='w-full border-b p-4'>
        <nav className='mx-auto max-w-screen-lg w-full flex items-center justify-between'>
            <h2 className='text-xl font-bold leading-2 tracking-widest'> ClientTracker</h2>

            {user ? (
              <>
                <SignOut />
              </>
            ) :
              <>
                <SignIn />
              </>

          }
        </nav>
    </header>
  )
}

export default Header