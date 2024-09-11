"use client"

import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import background from "@/public/img/background.png"



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-heroimg grid place-content-center max-w-screen-2xl m-auto overflow-hidden">
        <div className="relative z-10 h-[90vh] grid place-content-center">
          <Image src={background} alt="img" width={1980} height={1080} className="absolute top-0 -z-10 opacity-40 h-full" />
          <div className="grid place-content-center text-center gap-y-8 z-20 text-black w-screen">
            <h1 className="font-raleway font-semibold text-6xl text-black">Fast . Reliable . Flexible</h1>
            <h2 className="font-nunito font-semibold text-5xl bg-gradient-to-r from-orange to-amber-400 bg-clip-text text-transparent py-2">Highlights</h2>
            <p className="text-lg font-nunito font-medium text-black">A platform your blogging hobbies to new hieght of monetization.</p>
            <div className="flex justify-center gap-x-5 font-raleway font-medium">
              <Link href="/" className="px-3 py-1 text-base border-2 border-solid rounded-md">Get Started</Link>
              <Link href="/" className="px-3 py-1 text-base border-2 border-solid rounded-md">Read Blogs</Link>
            </div>
          </div>
        </div>

        {/* What we do , Why we do */}
        <div className="py-20">
          <h3 className="text-4xl font-semibold font-raleway text-center">What we do</h3>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
