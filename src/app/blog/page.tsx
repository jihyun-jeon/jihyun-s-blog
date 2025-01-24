import Image from "next/image";
import Link from "next/link";
import { posts } from "../../../posts";

export default function page() {
  return (
    <div className="max-w-[800px] mx-auto">
      {/* content */}
      <div className="flex flex-col gap-10">
        {posts.map((p, idx) => (
          <Link key={idx} href={`/blog/${p.slug}`}>
            <div className="w-full h-44 flex justify-between bg-slate-100">
              <div className="w-full flex-1 px-3">
                <div className="text-gray-500 flex justify-between text-base space-x-10 py-3">
                  {/* 날짜 */} <div>{p.date}</div>
                  {/* 카테고리 */}
                  <p className="text-sm bg-gray-100 dark:bg-gray-700/95 text-blue-700 dark:text-blue-500 font-semibold w-fit px-2 py-1 rounded-sm">
                    {p.category}
                  </p>
                </div>

                {/* 제목 */}
                <h2 className="text-xl font-bold  line-clamp-2 text-ellipsis">
                  {p.title}
                </h2>

                {/* 부제목 */}
                <p className=" line-clamp-2 text-ellipsis">{p.subTitle}</p>
              </div>
              {/* 이미지 */}
              {p?.thumbnail && (
                <div className="w-[200px] h-full border relative overflow-hidden">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    sizes="100vh"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
