'use client'

import { signOut } from "next-auth/react"
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="rounded flex gap-x-2 items-center ">
          <LogOut className='w-6 h-6' /> <p className="hover:underline text-base font-medium">Logout</p>
        </button>
    )
}
