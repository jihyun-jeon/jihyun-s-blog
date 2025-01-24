"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Tags({ tagList }: { tagList: [string, number][] }) {
  const router = useRouter();

  const handleClick = (tag: string) => {
    const pathUrl = tag === "all" ? "" : tag;
    router.push(`/blog/${pathUrl}`);
  };

  return (
    <div className="overflow-x-scroll whitespace-nowrap">
      {tagList.map(([tag, count]) => (
        <button
          key={tag}
          className="border-gray-500 border-2 px-1 rounded-lg mr-2"
          onClick={() => handleClick(tag)}
        >
          {tag} ({count})
        </button>
      ))}
    </div>
  );
}

export default Tags;
