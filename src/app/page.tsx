import BlogPostList from "@/app/components/BlogPostList";
import Header from "@/app/components/shared/Header";
import { getAllPosts } from "@/lib/api";

export default function Homepage() {
  // [TODO] const result = api
  const allPosts = getAllPosts();

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5 mb-10">
        <h2>Welcome!</h2>
        <BlogPostList allPosts={allPosts} />
      </div>
    </div>
  );
}
