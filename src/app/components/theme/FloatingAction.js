'use client'
import React, { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const FloatingAction = () => {
  const [toggle, setToggle] = useState(false)
  // console.log(toggle)
  return (
    <div className="sticky bottom-2 text-end m-3">
    <button type="button" 
    onClick={() => setToggle((prev) => !prev)}
    className={`${toggle ? ' bg-gray-200 hover:bg-gray-300 text-black ' : 'bg-gray-800 hover:bg-gray-900 text-white '} focus:ring-gray-300 font-medium text-sm p-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full`}>
        <p>
          {toggle ? <BsFillSunFill/> : <BsFillMoonFill/>}
        </p>
        </button>
        </div>
  );
};

export default FloatingAction;
