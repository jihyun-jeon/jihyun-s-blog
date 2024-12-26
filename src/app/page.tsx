import { getAllPosts } from "@/lib/api";
import { Post } from "@/type";
import Link from "next/link";

export default function Home() {
  const allPosts = getAllPosts();
  return (
    <>
      <div>
        {allPosts.map((post: Post) => (
          <div key={post.slug} className="flex border-b-4 mb-10">
            <div>
              <div>
                <Link href={`/posts/${post.slug}`}>title : {post.title}</Link>
              </div>
              <div>excerpt : {post.excerpt}</div>
              <div>date : {post.date}</div>
            </div>
            <div>
              <div>coverImage : {post.coverImage}</div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
