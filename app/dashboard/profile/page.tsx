'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/userProfileSchema";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { toast } from "sonner";



export default function Profile () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof userSchema>) => {
    try {
      const response = await axios.post<ApiResponse>('api/profile', data);
      toast.success('Profile is saved successfully');
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  )
}
