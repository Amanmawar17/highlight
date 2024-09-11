import Link from "next/link";
import Github from "@/public/icons/github.svg"
import DarkMode from "./DarkMode";


interface MenuProps {
  closeSidebar: () => void;
}

export default function Sidebar({ closeSidebar }: MenuProps) {
  return (
    <div
      className="fixed top-20 z-50 bg-white w-full h-screen shadow-lg transform transition-transform delay-150 duration-500 ease-in-out translate-y-0"
    >
      <ul className="p-4 text-foreground font-raleway font-medium grid gap-y-4">
        <li onClick={closeSidebar}>
          <Link href="/" className="text-base">
            Showcase
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link href="/" className="text-base">
            Docs
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link href="/" className="text-base">
            Blogs
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link href="/" className="text-base">
            Templates
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link href="/" className="text-base">
            Pricing
          </Link>
        </li>
      </ul>
      <hr className="text-slate-400 my-2" />
      <div className="flex flex-col gap-y-6 font-nunito font-medium p-4">
        <Link href="login" className="inline-flex items-center border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded w-fit">
          <Github className="w-5 h-5 mr-3" /> Github
        </Link>
        <Link href="login" className="border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded w-fit">
          Login
        </Link>
        <DarkMode />
      </div>
    </div>
  );
};

