"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface TagListType {
  tagList: string[];
}

function Tags({ tagList }: TagListType) {
  const router = useRouter();

  const handleClick = (tag: string) => {
    router.push(`/category/${tag}`);
  };

  return (
    <div className="flex gap-3">
      <button
        className="border-green-400 border-2 px-2"
        onClick={() => router.push(`/`)}
      >
        전체
      </button>
      {tagList.map((tag) => (
        <button
          key={tag}
          className="border-green-400 border-2 px-2"
          onClick={() => handleClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default Tags;
