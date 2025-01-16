import Tags from "@/components/Tags";
import PostCard from "@/components/shared/PostCard";
import { posts, tagList } from "@/components/shared/content";

async function CategoryPage(props) {
  const { tag } = await props.params;

  const filteredPosts = posts.filter((p) => p.category === tag);

  return (
    <>
      <Tags tagList={tagList} />
      <div className="mx-auto max-w-4xl py-8">
        {filteredPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
