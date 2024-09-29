"use client"

import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import background from "@/public/img/background.png"
import StatsAnimation from "./components/animation/StatsAnimation";
import ContactForm from "./components/ContactForm";
import FeaturesStickyScroll from "./components/animation/FeaturesStickyScroll";



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-heroimg grid place-content-center overflow-hidden">
        <div className="relative z-10 grid place-content-center max-w-screen-2xl m-auto py-40">
          <Image src={background} alt="img" width={1980} height={1080} className="absolute top-0 -z-10 opacity-40 h-full" />
          <div className="grid place-content-center text-center gap-y-8 z-20 text-black w-screen px-3">
            <h1 className="font-raleway font-semibold text-6xl text-black">Fast, Reliable, Flexible</h1>
            <h2 className="font-nunito font-semibold text-5xl bg-gradient-to-r from-orange to-amber-400 bg-clip-text text-transparent py-2">Highlights</h2>
            <p className="text-lg font-nunito font-medium text-black">A platform your blogging hobbies to new height of monetization.</p>
            <div className="flex justify-center gap-x-5 font-raleway font-medium">
              <Link href="/" className="px-3 py-1 text-base border-2 border-solid rounded-md">Get Started</Link>
              <Link href="/" className="px-3 py-1 text-base border-2 border-solid rounded-md">Read Blogs</Link>
            </div>
          </div>
        </div>

        {/* What we do , Why we do */}
        <div className="py-20">
          <h3 className="text-2xl md:text-4xl font-semibold font-raleway text-center">Some Stats about our services</h3>
          <div className="w-full mt-10 bg-slate-100">
            <StatsAnimation />
          </div>
        </div>

        {/* Features */}
        <div className="py-20">
          <h3 className="text-2xl md:text-4xl font-semibold font-raleway text-center">Features</h3>
          <div>
            <FeaturesStickyScroll/>
          </div>
        </div>

        {/* contact form */}
        <div className="flex flex-col justify-center items-center gap-y-5 px-4 py-20">
          <div className="grid gap-y-4">
            <h3 className="text-3xl font-raleway font-semibold text-center">Share your Story and Experience</h3>
            <p className="text-xl font-nunito font-medium text-center text-wrap">We will feature your response as our valuable review in the review section.</p>
          </div>
          <ContactForm />
        </div>

      </main>
      <Footer />
    </>
  );
}
