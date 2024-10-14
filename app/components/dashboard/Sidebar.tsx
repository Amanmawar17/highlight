import Link from "next/link";
import { SquarePen, BadgeInfo, ChartNoAxesCombined, LayoutDashboard, Code, Settings, CircleChevronRight   } from "lucide-react";
import DarkMode from "../DarkMode";

export default function Sidebar() {
  return (
    <aside className="pt-8 border-r-2 border-solid relative w-fit flex flex-col justify-between h-[calc(100vh-80px)]">
      <CircleChevronRight className="absolute top-4 -right-4 w-8 h-8" />
      <ul className="grid gap-y-8 mt-8 px-6">
        <li className="flex items-center gap-x-3">
          <LayoutDashboard className="w-6 h-6" /><Link href="/dashboard" className="text-2xl font-medium font-nunito">Dashboard</Link>
        </li>
        <li className="flex items-center gap-x-3">
          <SquarePen className="w-6 h-6" /><Link href="/dashboard/blogs" className="text-2xl font-medium font-nunito">Blogs</Link>
        </li>
        <li className="flex items-center gap-x-3">
          <Code className="w-6 h-6" /><Link href="/dashboard/api-keys" className="text-2xl font-medium font-nunito">Developer</Link>
        </li>
        <li className="flex items-center gap-x-3">
          <ChartNoAxesCombined className="w-6 h-6" /><Link href="/dashboard/analytics" className="text-2xl font-medium font-nunito">Analytics</Link>
        </li>
        <li className="flex items-center gap-x-3">
          <Settings className="w-6 h-6" /><Link href="/dashboard/settings" className="text-2xl font-medium font-nunito">Settings</Link>
        </li>
        <li className="flex items-center gap-x-3">
          <BadgeInfo className="w-6 h-6" /><Link href="/dashboard/help-center" className="text-2xl font-medium font-nunito">Help&Center</Link>
        </li>
      </ul>
      <div className="flex items-center gap-x-4 py-4 border-t-2 w-full px-4">
        <DarkMode /> <p className="text-xl font-medium font-nunito">Change Mode</p>
      </div>
    </aside>
  )
}
