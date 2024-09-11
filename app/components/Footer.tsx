"use client"
import Link from "next/link"
import Image from "next/image"
import DarkMode from "./DarkMode";

import logo from "@/public/icons/logo.png"
import LinkedIn from "@/public/icons/linkedin.svg"
import Twitter from "@/public/icons/twitter.svg"
import Reddit from "@/public/icons/reddit.svg"
export default function Footer() {
  return (
    <footer className="p-6 sm:py-20 sm:px-10 border-t-2 border-solid">
      <div className="max-w-screen-2xl m-auto">
        <div className="grid place-content-start justify-items-start md:justify-items-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-col gap-y-10 gap-x-20">
          <div className="grid place-content-start gap-y-5">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                height={60}
                width={60}
                className="rounded-md"
              />
            </Link>
            <p>A platform your blogging hobbies to new hieght of monetization.</p>
            <p>&#169; All copyrights are reserved.</p>
            <ul className="flex items-center gap-x-3 sm:gap-x-6">
              <DarkMode />
              <li className="border-2 border-solid rounded-md p-[6px]">
                <Link href="/" className="">
                  <Reddit className="w-5 h-5" />
                </Link>
              </li>
              <li className="border-2 border-solid rounded-md p-[6px]">
                <Link
                  href="/"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </li>
              <li className="border-2 border-solid rounded-md p-[6px]">
                <Link
                  href="/"
                >
                  <LinkedIn className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl my-4 font-raleway font-semibold">Features</h1>
            <ul className="text-base font-nunito">
              <li className="">
                <Link
                  href="/"
                  className=""
                >
                  Analytics
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  API
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Collaboration
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Personalization
                </Link>
              </li>
            </ul>
            <h1 className="text-xl my-4 font-raleway font-semibold">Tools</h1>
            <ul className="text-base font-nunito">
              <li className="">
                <Link
                  href="/"
                  className=""
                >
                  Dashboard
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Writing Pad
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Node Package
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl my-4 font-raleway font-semibold">Open Source</h1>
            <ul className="text-base font-nunito">
              <li>
                <Link
                  href="/"
                  className=""
                >
                  Code of Conduct
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Licsense
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  ReadME
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=""
                >
                  Contribution
                </Link>
              </li>
            </ul>
            <h1 className="text-xl my-4 font-raleway font-semibold">Policies</h1>
            <ul className="text-base font-nunito">
              <li>
                <Link
                  href="/"
                  className=""
                >
                  Privacy
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Terms
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Report an abuse
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-xl my-4 font-raleway font-semibold">Product</h1>
            <ul className="text-base font-nunito">
              <li className=" ">
                <Link
                  href="/"
                  className=""
                >
                  Blogs
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Changelog
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Pricing
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Help Center
                </Link>
              </li>
            </ul>
            <h1 className="text-xl my-4 font-raleway font-semibold">Comparison</h1>
            <ul className="text-base font-nunito">
              <li className=" ">
                <Link
                  href="/"
                  className=""
                >
                  Wordpress
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Drupal
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className=""
                >
                  Jhoomla
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
