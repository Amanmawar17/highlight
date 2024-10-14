"use client"

import { useDarkMode } from 'usehooks-ts'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkMode() {
  const { isDarkMode, toggle } = useDarkMode()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button onClick={toggle} className='flex justify-center items-center p-[6px] border-2 border-solid rounded hover:shadow-md w-fit'>
      {mounted && isDarkMode ? <Sun className="w-5 h-5 fill-orange stroke-orange" /> : <Moon className="w-5 h-5 stroke-orange fill-orange" />}
    </button>
  )
}
