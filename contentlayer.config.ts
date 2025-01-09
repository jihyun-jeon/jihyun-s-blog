import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import * as ReactDOMServer from "react-dom/server";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

const mdxToHtml = async (mdxSource: string) => {
  const { code } = await bundleMDX({ source: mdxSource });
  const MDXLayout = getMDXComponent(code);
  // TODO add your own components here
  const element = MDXLayout({ components: {} })!;
  const html = ReactDOMServer.renderToString(element);
  return html;
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    thumbnail: { type: "string", required: false },
    description: { type: "string", required: true },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/post/${post._raw.flattenedPath}`,
    },
  },
  mdxHtml: {
    type: "string",
    resolve: async (doc: { body: { raw: string } }) => mdxToHtml(doc.body.raw),
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "material-theme-palenight",
        },
      ],
      rehypeHighlight,
    ],
  },
});
