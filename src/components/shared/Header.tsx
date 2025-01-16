"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeProvider from "../ThemeProvider";

type MenuItem = {
  name: string;
  href: string;
  activePattern: RegExp;
};

const MENU_ITMES: MenuItem[] = [
  { name: "Blog", href: "/", activePattern: /^(\/|\/category\/[^/]+)$/ },
  { name: "About", href: "/about", activePattern: /^\/about$/ },
];

function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full h-16  bg-gray-100 px-10 flex items-center justify-between dark:bg-slate-600 dark:text-white">
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
            className={
              pathname.match(item.activePattern) ? "text-cyan-200" : ""
            }
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}

        <ThemeProvider />
      </ul>
    </nav>
  );
}

export default Header;
