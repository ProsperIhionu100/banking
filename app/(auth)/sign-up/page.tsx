import React from 'react'
import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp = async () => {
  // const user = await getLoggedInUser();

  // console.log(user);

  return (
    <section className='flex items-center justify-center'>
        <AuthForm type={"sign-up"}/>
    </section>
  )
}

export default SignUp