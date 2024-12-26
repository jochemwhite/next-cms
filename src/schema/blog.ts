import { z } from "zod";

export const NewBlogPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title is too long"),
});







// create type for the form values
export type NewBlogPostType = z.infer<typeof NewBlogPostSchema>;