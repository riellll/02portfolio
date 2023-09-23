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
    <div className="sticky bottom-2 text-end m-3">
    <button type="button" 
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    className={`${resolvedTheme === 'dark' ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-gray-800 hover:bg-gray-900 text-white'} focus:ring-gray-300 font-medium text-sm p-3 mr-2 mb-2 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full`}>
        <p>
          {resolvedTheme === 'dark' ? <BsFillSunFill/> : <BsFillMoonFill/>}
        </p>
        </button>
        </div>
  );
};

export default FloatingAction;
