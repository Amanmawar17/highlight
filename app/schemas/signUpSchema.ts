import { z } from "zod";

export const fullnameValidation = z
    .string()
    .min(2, "Full Name must be atleast 2 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Full Name must not contain special characters")

export const signUpSchema = z.object({
    fullName: fullnameValidation,
    email: z.string().email({message: 'Invalid Email'}),
    password: z.string().min(6, {message: 'password must be atleast characters'})
})