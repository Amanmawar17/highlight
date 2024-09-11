"use client"

import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";
import logo from "@/public/icons/logo.png"
import Github from "@/public/icons/github.svg"

export default function Navbar() {
  return (
    <nav className="backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-screen-2xl m-auto py-4 px-10">
            <div className="flex justify-start items-center gap-x-6">
                <Image src={logo} alt="img" width={40} height={40} className="rounded-lg"/>
                <ul className="flex gap-x-6 font-raleway text-lg font-medium">
                    <li>Docs</li>
                    <li>Blogs</li>
                    <li>Templates</li>
                </ul>
            </div>
            <div className="flex justify-end items-center gap-x-6 font-nunito font-medium">
              <DarkMode/>
              <Link href="login" className="inline-flex items-center border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded">
                <Github className="w-5 h-5 mr-3" /> Github
              </Link>
              <Link href="login" className="border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded">
                Login
              </Link>
            </div>
        </div>
    </nav>
  )
}
