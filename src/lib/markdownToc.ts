import { readSync } from "to-vfile";
import { remark } from "remark";
import toc from "remark-toc";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export default async function markdownToc(markdownFile: string) {
  const fullPath = join(postsDirectory, `${markdownFile}.md`);

  const result = await remark().use(toc).process(readSync(fullPath));
  console.log("result", result);
  return result;
}
