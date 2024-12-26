"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeProvider from "../ThemeProvider";

type MenuItem = {
  name: string;
  href: string;
};

const MENU_ITMES: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "Project", href: "/project" },
  { name: "About", href: "/about" },
];

function Header() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-16 bg-gray-100 px-10 flex items-center justify-between dark:bg-slate-600 dark:text-white">
      <div className="flex justify-center align-middle">
        <Link href="/" className="mr-10">
          <h1>JIHYUN</h1>
        </Link>
      </div>

      <ul className="flex gap-3">
        {/* [TODO] Navigation 컴포넌트로 따로 분리. 여기서 */}
        {MENU_ITMES.map((item) => (
          <li
            key={item.href}
            className={pathname === item.href ? "text-cyan-200" : ""}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}

        <li>검색</li>
        <ThemeProvider />
      </ul>
    </nav>
  );
}

export default Header;
