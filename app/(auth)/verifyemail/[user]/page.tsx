"use client";
import { toast } from 'sonner'
import Image from 'next/image'
import { verifyOTPSchema } from "@/schemas/verifyOTPSchema";
import { ApiResponse } from "@/types/ApiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import logo from "@/public/icons/logo.png";


export default function VerifyAccount() {
  const params = useParams<{ user: string }>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof verifyOTPSchema>>({
    resolver: zodResolver(verifyOTPSchema),
    defaultValues: {
      code: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof verifyOTPSchema>) => {
    try {
      console.log(data);
      const response = await axios.post<ApiResponse>('../api/verify-otp', {
        fullName: params.user,
        code: data.code,
      });
      console.log(response)
      toast.success('User Verified Succesfully!')
      router.push(`/login`);
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="h-screen grid place-content-center">
      <div className="grid place-content-center gap-y-6">
        <div className='grid place-content-start gap-y-3'>
          <Image src={logo} alt="img" width={40} height={40} className="rounded-sm place-self-center" />
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Verify Your account
          </h1>
          <p className="mb-4">
            Enter the verification code sent to your email.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid justify-start gap-y-5">
          <input type="number" placeholder="Verification code" {...register("code", { required: true })} className="outline outline-1 p-2 w-80 font-sans" />
          <button type="submit" className="bg-blue text-white text-xl font-nunito py-2 px-8 w-fit place-self-center rounded-sm">Submit</button>
        </form>
      </div>
    </section>
  );
};

