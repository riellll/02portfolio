'use client'
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';


const FloatingAction = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

// console.log(resolvedTheme)
  return (
    <div className="text-end cursor-pointer">
    <button type="button" 
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    className={`focus:ring-gray-300 text-md text-gray-700 hover:text-gray-500 dark:text-gray-300 hover:dark:text-gray-100 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full`}>
        <p>
          {resolvedTheme === 'dark' ? <BsFillSunFill className="text-lg"/> : <BsFillMoonFill/>}
        </p>
        </button>
        </div>
  );
};

export default FloatingAction;
