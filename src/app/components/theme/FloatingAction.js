import React from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const FloatingAction = () => {
  return (
    <div class="sticky bottom-2 text-end m-3">
    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium text-sm p-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-full">
        <p>
        <BsFillMoonFill/>
        {/* <BsFillSunFill/> */}
        </p>
        </button>
        </div>
  );
};

export default FloatingAction;
