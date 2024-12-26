"use client";

import { createBlogPost } from "@/actions/cms/blog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewBlogPostSchema, NewBlogPostType } from "@/schema/blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function CreateBlogPostForm() {
  const form = useForm<NewBlogPostType>({
    resolver: zodResolver(NewBlogPostSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: NewBlogPostType) {
    createBlogPost(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the blog post title" {...field} />
              </FormControl>
              <FormDescription>Slug: {form.watch("title").toLowerCase().replace(/ /g, "-")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Blog Post</Button>
      </form>
    </Form>
  );
}
