import Link from "next/link";
import { compareDesc, format } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="mb-8 flex">
      <div>
        <img src={post.thumbnail} />
      </div>
      <div>
        <h2 className="mb-1 text-xl">
          <Link
            href={post.url}
            className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
          >
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(post.date, "yyyy-MM-dd")} / {post.category}
        </time>

        <div>{post.description}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log("posts", posts);

  return (
    <>
      <div>
        <div className="mx-auto max-w-4xl py-8">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
