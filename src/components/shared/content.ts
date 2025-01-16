import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

export const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

const tags = posts.map((p) => p.category);
export const tagList = Array.from(new Set(tags)); // ['css','js','html']
