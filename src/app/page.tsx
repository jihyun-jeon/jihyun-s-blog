// import { getAllPosts } from "@/lib/api";
import { PostType } from "@/type";
import Link from "next/link";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

export default function Home() {
  // const allPosts = getAllPosts();
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log("posts", posts);

  return (
    <>
      <div>
        <div className="mx-auto max-w-xl py-8">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
        {/* {allPosts.map((post: PostType) => (
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
        ))} */}
      </div>
    </>
  );
}
