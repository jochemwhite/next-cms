"use server";

import { createClient } from "@/lib/supabase/server";
import { NewBlogPostType } from "@/schema/blog";
import { redirect } from "next/navigation";

export async function createBlogPost({ title }: NewBlogPostType) {
  const supabase = await createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      status: 500,
      body: {
        error: userError.message,
      },
    };
  }

  if (!userData) {
    return {
      status: 401,
      body: {
        error: "Unauthorized",
      },
    };
  }

  const { data, error } = await supabase.from("blog_posts").insert({
    author: userData.user.id,
    title: title,
    slug: title.toLowerCase().replace(/ /g, "-"),
  }).select("slug").single();


  if (error) {
    return {
      status: 500,
      body: {
        error: error.message,
      },
    };
  }

  redirect("/dashboard/blogs/" + data.slug);

  return {
    status: 200,
    body: {
      data,
    },
  };
}
