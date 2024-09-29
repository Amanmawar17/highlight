"use client"

import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";
import logo from "@/public/icons/logo.png"
import Github from "@/public/icons/github.svg"
import { useEffect, useState } from "react";
import Menu from "@/public/icons/menu.svg"
import SideMenu from "./Menu"
import X from"@/public/icons/x.svg"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.id === "overlay") {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <nav className="backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-50 border-b-2 border-solid">
        <div className="flex justify-between items-center max-w-screen-2xl m-auto py-4 px-6 md:px-10">
            <div className="flex justify-start items-center gap-x-6">
                <Image src={logo} alt="img" width={100} height={100} className="w-10 h-10 rounded-sm"/>
                <ul className="hidden lg:flex gap-x-6 font-raleway text-lg font-medium">
                    <li>Showcase</li>
                    <li>Docs</li>
                    <li>Blogs</li>
                    <li>Templates</li>
                </ul>
            </div>
            <div className="hidden lg:flex justify-end items-center gap-x-6 font-nunito font-medium">
              <DarkMode/>
              <Link href="login" className="inline-flex items-center border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded">
                <Github className="w-5 h-5 mr-3" /> Github
              </Link>
              <Link href="login" className="border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded">
                Login
              </Link>
            </div>
            <button onClick={handleclick} className="lg:hidden transition-all delay-200 duration-700 ease-out">
                {isOpen ? <X className="w-4 h-4"/> : <Menu className='w-7 h-7'/>}
              </button>
            {isOpen && (
          <div
            id="overlay"
            className="fixed inset-0 z-40"
            onClick={handleOutsideClick}
          >
            <SideMenu closeSidebar={closeSidebar} />
          </div>
        )}
        </div>
    </nav>
  )
}
