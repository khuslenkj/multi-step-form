import * as z from "zod";

export const Form1schema = z.object({
    firstName: z.string().trim().min(2, "Enter atleast 2 characters"),
    lastName: z.string().trim().min(2, "Enter atleast 2 characters"),
    email:
})