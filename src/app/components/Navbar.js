"use client";
import { Link } from "react-scroll";



const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg shadow-gray-300/10 sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" as="home" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Gab dev
            </span>
          </a>      

          <div
            className="w-full min-[620px]:w-auto"
            id="navbar_default"
          >
            <ul className="font-medium flex flex-row justify-center p-2 min-[620px]:p-0 mt-4 rounded-lg min-[620px]:flex-row min-[620px]:space-x-8 min-[620px]:mt-0 min-[620px]:border-0 min-[620px]:bg-white dark:bg-gray-800 min-[620px]:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-black dark:border-y-white"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  Home
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-black dark:border-y-white"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  About
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-black dark:border-y-white"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  Project
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
                <Link
                  activeClass="active border-b-2 border-y-black dark:border-y-white"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // crossOrigin="true"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
