export type PostType = {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  author: { name: string; picture: string };
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

/**
 * slug : md파일 제목
 * title: "Dynamic Routing and Static Generation"
 * date: "2020-03-16T05:35:07.322Z"
 * coverImage: "/assets/blog/dynamic-routing/cover.jpg" // 썸네일
 * author: { name: JJ Kasper , picture: "/assets/blog/authors/jj.jpeg"}
 * excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus." // 요약
 * ogImage: {url: "/assets/blog/dynamic-routing/cover.jpg"}
 * content : ...
 */
