"use client"

import { useDarkMode } from 'usehooks-ts'
import Sun from "@/public/icons/sun.svg"
import Moon from "@/public/icons/moon.svg"
import { useEffect, useState } from 'react'

export default function DarkMode() {
  const { isDarkMode, toggle } = useDarkMode()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button onClick={toggle} className='flex justify-center items-center p-[6px] border-2 border-solid rounded hover:shadow-md'>
      {mounted && isDarkMode ? <Sun className="w-5 h-5 fill-orange" /> : <Moon className="w-5 h-5 stroke-orange fill-orange" />}
    </button>
  )
}
