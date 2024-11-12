import LoginForm from '@/components/forms/login-form'
import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation'
import React from 'react'

const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage