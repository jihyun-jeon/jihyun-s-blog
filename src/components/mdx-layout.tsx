import SyntaxHighlighter from "./SyntaxHighlighter";
import Thumbnail from "./Thumbnail";
import Script from "next/script";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";
  console.log("children", children);

  return (
    <div>
      <div className="px-5 md:px-0 max-w-4xl mx-auto prose dark:prose-invert">
        <Thumbnail />
        {isProduction ? (
          <SyntaxHighlighter>{children}</SyntaxHighlighter>
        ) : (
          <div>{children}</div>
        )}
        <div className="giscus"></div>
      </div>
      <Script
        src="https://giscus.app/client.js"
        data-repo="jihyun-jeon/jihyun-s-blog"
        data-repo-id="R_kgDONijPBw"
        data-category="General"
        data-category-id="DIC_kwDONijPB84CmT8K"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        crossOrigin="anonymous"
        async
      ></Script>
    </div>
  );
}
