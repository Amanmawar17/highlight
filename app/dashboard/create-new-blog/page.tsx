'use client'

import TextEditor from "@/app/components/dashboard/TextEditor"
import { articleSchema } from "@/schemas/articleSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import Preview from "@/app/components/dashboard/Preview";

export default function CreateNewBlog() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null); // State for the image
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      authorId: "",
      title: "",
      featuredImg: "",
      content: "",
      images: [],
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); // Set the selected image file
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post<{ url: string }>("api/create-new-blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.url; // Return the URL of the uploaded image
    } catch (error) {
      throw new Error("Image upload failed");
      toast.error('')
    }
  };

  const onSubmit = async (data: z.infer<typeof articleSchema>) => {
    try {
      let imageUrl = "";
      if (imageFile) {
        // If there's an image, upload it first
        imageUrl = await uploadImage(imageFile);
      }

      // Add the image URL to the form data
      const blogData = {
        ...data,
        featuredImg: imageUrl,
      };

      // Submit the blog data with the image URL
      const response = await axios.post<ApiResponse>('/api/create-new-blog', blogData);
      router.push(`/blogs`);
      toast.success('New blog has been created');
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-raleway font-semibold">Create your blog here!</h1>
          <div className="flex items-center gap-x-4">
            <Preview/>
            {/* Submit Button */}
            <button type="submit" className="bg-blue text-white text-xl font-nunito py-2 px-8 w-fit place-self-center rounded-sm">Publish</button>
          </div>
        </div>
        {/* Image Upload */}
        <label htmlFor="featuredImg" className="grid gap-y-3 text-xl font-medium font-raleway">Banner Image
          <input
            type="file"
            id="featuredImg"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>

        {/* Title Input */}
        <label htmlFor="title" className="grid gap-y-3 text-xl font-medium font-raleway">Title
          <input
            type="text"
            id="title"
            className="cursor-text rounded border p-5 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </label>

        {/* Content Editor */}
        <TextEditor
          {...register("content", { required: true })}
          onChange={(value) => setValue("content", value)}
        />
        {errors.content && <p className="text-red-500">Content is required</p>}

      </form>
    </div>
  );
}
