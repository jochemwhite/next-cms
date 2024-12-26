import ModalButton from "@/components/buttons/modal-button";
import { CreateBlogPostForm } from "@/components/forms/new-post";
import { BlogPostTable } from "@/components/tables/blog-post-table";
import { Button } from "@/components/ui/button";

export default function BlogPostsPage() {
  return (
    <div className="container mx-auto py-10 w-full">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>
        <ModalButton variant="default" text="New Post" component={<CreateBlogPostForm />} />
      </div>
      <BlogPostTable />
    </div>
  );
}
