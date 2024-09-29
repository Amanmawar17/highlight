import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email().regex(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, {message: "provide a valid email."}),
    password: z.string().min(8, {message: 'password must be atleast eight characters'})
})