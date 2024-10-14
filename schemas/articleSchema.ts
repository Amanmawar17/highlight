import { z } from "zod";

export const articleSchema = z.object({
    title: z
        .string()
        .min(5, { message: "Title must be at least 5 characters long" })
        .max(100, { message: "Title must not exceed 100 characters" }),
    
    content: z
        .string()
        .min(20, { message: "Content must be at least 20 characters long" })
        .max(5000, { message: "Content must not exceed 5000 characters" }),
    
    featuredImg: z
        .string()
        .url({ message: "Featured image must be a valid URL" })
        .optional(), // This can be optional, depending on whether a featured image is required

    images: z
        .array(z.string().url({ message: "Each image must be a valid URL" }))
        .optional(), // Images can be optional
    
    authorId: z
        .string()
        .min(1, { message: "Author ID is required" }),
});