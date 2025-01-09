import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="prose">
      <article className="mx-auto py-8">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>

        <MDXContent />
      </article>
    </div>
  );
};

export default PostLayout;
