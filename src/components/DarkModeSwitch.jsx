'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
      }
      className="text-xl"
    >
      {currentTheme === 'dark' ? <MdLightMode className='hover:text-amber-500 text-slate-100' /> : <MdDarkMode  className='hover:text-amber-500'/>}
    </button>
  )
}

export default DarkModeSwitch
