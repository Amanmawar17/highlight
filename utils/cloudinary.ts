import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(path: string) {
  return await cloudinary.uploader.upload(path);
}

export async function uploadImages(paths: string[]) {
  return await Promise.all(paths.map((path) => cloudinary.uploader.upload(path)));
}
