import Footer from "@/components/Footer";
import Header from "@/components/Headers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      {/* hero */}
      <div className="mb-20 px-5 md:px-0">
        <div className="h-[250px] md:h-[600px] rounded-md relative">
          <Image src={"/images/hero.png"} alt="hero image" sizes="100vh" fill />

          <div className="absolute -bottom-8 bg-white dark:bg-[#242535] p-6 ml-10 rounded-lg shadow-lg max-w-[80%] md:max-w-[40%]">
            <p className="text-xs bg-blue-700 w-fit py-1 px-2 text-white rounded-md mb-1">
              Technology
            </p>
            <h2 className="text-base md:text-3xl font-bold">
              The Impact of Technology on the Workplace: How Techology is
              Changing
            </h2>
            <p className="text-sm mt-4">Jason Francisco | August 20, 2022</p>
          </div>
        </div>
      </div>
      {/* content */}
      <Footer />
    </div>
  );
}
