import Image from "next/image";
import { Plus, BellRing } from "lucide-react";
import Avatar from "./Avatar";
import logo from "@/public/icons/logo.png"
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-solid">
      <div className="flex items-baseline gap-x-3">
        <Image src={logo} alt="img" width={100} height={100} className="w-10 h-10 rounded-sm" />
        <h1 className="font-nunito font-medium text-4xl">Highlights</h1>
      </div>
      <div className="flex items-center gap-x-5">
        <Link href="/dashboard/create-new-blog">
        <button className="border-2 border-solid hover:shadow-md px-3 py-1 text-base rounded flex gap-x-2 items-center font-medium">
          <Plus className='w-6 h-6' /> New Blog
        </button></Link>
        <BellRing className="w-6 h-6"/>
        <Avatar />
      </div>
    </header>
  )
}
