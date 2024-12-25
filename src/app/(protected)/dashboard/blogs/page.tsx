import { BlogPostTable } from "@/components/tables/blog-post-table";

export default function BlogPostsPage() {
  return (
    <div className="container mx-auto py-10 w-full">
      <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>
      <BlogPostTable />
    </div>
  )
}

