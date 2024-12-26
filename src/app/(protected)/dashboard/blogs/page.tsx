import { BlogPostTable } from "@/components/tables/blog-post-table";
import { Button } from "@/components/ui/button";

export default function BlogPostsPage() {
  return (
    <div className="container mx-auto py-10 w-full">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>
        <Button variant="default">Create new post</Button>
      </div>
      <BlogPostTable />
    </div>
  );
}
