import { z } from "zod";

// Define a Zod schema for user validation
export const userSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full Name must be at least 2 characters")
        .max(50, "Full Name must not exceed 50 characters")
        .regex(/^[a-zA-Z0-9_ ]+$/, "Full Name must not contain special characters (only letters, numbers, and underscores are allowed)"),
    
    email: z
        .string()
        .email("Provide a valid email address")
        .regex(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, { message: "Provide a valid email." }),
    
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(100, { message: "Password must not exceed 100 characters" }),
    
    phone: z
        .string()
        .regex(/^\d{10}$/, { message: "Kindly add a valid 10-digit phone number" }),
    
    expertise: z
        .string()
        .optional(), // Expertise is optional
});