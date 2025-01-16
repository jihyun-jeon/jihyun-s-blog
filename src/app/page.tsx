import { posts, tagList } from "@/components/shared/content";
import Tags from "../components/Tags";
import PostCard from "@/components/shared/PostCard";

export default function Home() {
  return (
    <>
      <div>
        <Tags tagList={tagList} />
        <div className="mx-auto max-w-4xl py-8">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
