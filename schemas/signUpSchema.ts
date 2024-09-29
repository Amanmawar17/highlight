import { z } from "zod";

export const signUpSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full Name must be atleast 2 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Full Name must not contain special characters"),
    email: z.string().email().regex(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, { message: "provide a valid email." }),
    password: z.string().min(8, { message: 'password must be atleast eight characters' }),
    phone: z.string().min(10, { message: "kindly add your 10 digit phone number" })
})