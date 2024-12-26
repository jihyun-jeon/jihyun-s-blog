import React from "react";
import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "@/app/components/shared/markdown-styles.module.css";
import { getPostBySlug } from "@/lib/api";

async function page(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params; // {"slug":"dynamic-routing"}
  const post = await getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div>
      <div>
        {/* PostHeader */}
        <h1>{post.title}</h1>
        <br />
        <div>{post.date}</div>
        <br /> <br />
        <div>{post.coverImage}</div>
        <br />
        {/* PostBody */}
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div>목차</div>
    </div>
  );
}

export default page;
