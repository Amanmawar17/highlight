"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/icons/logo.png"
import GoogleAuthButton from "@/app/components/auth/GoogleAuthButton"
import GithubAuthButton from "@/app/components/auth/GithubAuthButton"
import { signUpSchema } from "@/schemas/signUpSchema";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    try {
      const response = await axios.post<ApiResponse>('api/sign-up', data);
      router.push(`/verifyemail/${data.fullName}`);
      toast.success('OTP is send succesfully');
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="h-screen grid place-content-center">
      <div className="grid place-content-center gap-y-6">
        <Image src={logo} alt="img" width={40} height={40} className="rounded-sm place-self-center" />
        <p className="text-base font-raleway font-medium text-black text-center">
          If you have an account, <Link href="login" className="border-b-2 border-solid border-orange">Login</Link>
        </p>
        <form className="grid justify-start gap-y-5" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" {...register("email", { required: true })} className="outline outline-1 p-2 w-80" />
          <input type="text" placeholder="Full name" {...register("fullName", { required: true })} className="outline outline-1 p-2 w-80" />
          <input type="tel" placeholder="Phone" {...register("phone", { required: true })} className="outline outline-1 p-2 w-80" />
          <input type="password" placeholder="Password" {...register("password", { required: true })} className="outline outline-1 p-2 w-80" />
          <button type="submit" className="bg-blue text-white text-xl font-nunito py-2 px-8 w-fit place-self-center rounded-sm">
            Submit
          </button>
        </form>
        <hr />
        <p className="text-center font-nunito">Other Sign in option</p>
        <div className="flex justify-center items-center gap-x-8">
          <GoogleAuthButton />
          <GithubAuthButton />
        </div>
      </div>
    </section>
  );
}
