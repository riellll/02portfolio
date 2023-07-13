import { HiOutlineMailOpen } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="grid grid-cols-2 bg-white h-full gap-4 content-start justify-items-start mt-10 lg:px-32 md:px-16  sm:px-10">
        <div>
          <h1 className="font-bold">Location</h1>
          <span className="grid grid-flow-col gap-2 justify-start place-items-center text-center">
            <span className="text-blue-600 text-xl">
              <ImLocation2 />
            </span>
            <p className="tracking-tight font-boldt text-base">
              Manila, Philippines
            </p>
          </span>
        </div>
        <div>
          <h1 className="font-bold">Mail</h1>
          <span className="grid grid-flow-col gap-2 justify-start place-items-center text-center">
            <span className="text-blue-600 text-xl">
              <HiOutlineMailOpen />
            </span>
            <p className="tracking-tight font-boldt text-base">
              griel034@gmail.com
            </p>
          </span>
        </div>
      </div>

      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div className="grid grid-cols-2 gap-10">
      <span className="block text-sm text-gray-500 sm:text-end dark:text-gray-400">
      &#169; 2023{" "}
        <a href="#" className="hover:underline">
          gabb
        </a>
        . All Rights Reserved.
      </span>
      <span className="flex gap-2 text-xl pb-2 sm:text-start">
      <BsGithub/>
    <BsLinkedin/>
    </span>
    </div>
    </div>
  </footer>
  )
}

export default Footer