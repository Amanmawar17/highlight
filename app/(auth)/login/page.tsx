"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Image from 'next/image'
import Link from 'next/link'
import GoogleAuthButton from "@/app/components/auth/GoogleAuthButton"
import GithubAuthButton from "@/app/components/auth/GithubAuthButton"
import logo from "@/public/icons/logo.png"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn } from "next-auth/react";
import { z } from "zod";



export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        toast.error('Incorrect username or password')
      } else {
        toast.error(result.error)
      }
    }
    if (result?.url) {
      router.replace("/dashboard");
      toast.success('User Login Succesfully!')
    }
  };
  return (
    <section className='h-screen grid place-content-center'>
      <div className='grid place-content-center gap-y-8'>
      <Image src={logo} alt="img" width={40} height={40} className="rounded-sm place-self-center"/>
        <p className='text-base font-raleway font-medium text-black text-center'>If you are a new user kindly, <Link href="signup" className='border-b-2 border-solid border-orange'> Register</Link></p>
        <form onSubmit={handleSubmit(onSubmit)} className='grid justify-start gap-y-8'>
          <input type="email" placeholder='email' {...register("email", { required: true })} className='outline outline-1 p-2 w-80'/>
          <input type="password" placeholder='password' {...register("password", { required: true })} className='outline outline-1 p-2 w-80' />
          <button type='submit' className='bg-blue text-white text-xl font-nunito py-2 px-8 w-fit place-self-center rounded-sm' >Submit</button>
        </form>
        <hr className=''/>
        <p className='text-center font-nunito'>Other Sign in option</p>
        <div className='flex justify-center items-center gap-x-8'>
        <GoogleAuthButton/>       
        <GithubAuthButton/>        
        </div>
      </div>
    </section>
  )
}
