import type { Metadata } from "next";
import "../css/globals.css";
import Header from "../components/shared/Header";

export const metadata: Metadata = {
  title: "blog",
  description: "jihyun blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <main>
          <Header />
          <div className="container mx-auto px-5 pt-16 mb-10">
            <h2>COMMON_LAYOUT!</h2>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
