"use client"

import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/icons/logo.png"
import Google from "@/public/icons/google.svg"
import Github from "@/public/icons/github.svg"





export default function Login() {
  return (
    <section className='h-screen grid place-content-center'>
      <div className='grid place-content-center gap-y-8'>
      <Image src={logo} alt="img" width={40} height={40} className="rounded-lg place-self-center"/>
        <p className='text-base font-raleway font-medium text-black text-center'>If you are a new user kindly, <Link href="signup" className='hover:border-b-2 border-solid border-orange'> Register</Link></p>
        <form className='grid justify-start gap-y-8'>
          <input type="email" placeholder='email' className='outline outline-1 p-2 w-80'/>
          <input type="password" placeholder='password' className='outline outline-1 p-2 w-80' />
        </form>
        <hr className=''/>
        <p className='text-center font-nunito'>Other Sign in option</p>
        <div className='flex justify-center items-center gap-x-8'>
          <button className='p-[6px] border-2 border-solid rounded hover:shadow-md'><Google className="w-7 h-7"/></button>
          <button className='p-[6px] border-2 border-solid rounded hover:shadow-md'><Github className="w-7 h-7"/></button>          
        </div>
      </div>
    </section>
  )
}
