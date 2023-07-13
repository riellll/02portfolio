
'use client'
import { Link } from "react-scroll";

const Navbar = () => {

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg shadow-gray-300/30 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" as="home" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Gab dev
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
              <Link
              activeClass="active border-b-2 border-y-black"  to="hero" spy={true} smooth={true} offset={-100} duration={500}    
                // crossOrigin="true"
              >
                Home
              </Link>
            </li>
            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
              <Link
              activeClass="active border-b-2 border-y-black"  to="about" spy={true} smooth={true} offset={-100} duration={500}
                // crossOrigin="true"
              >
                About
              </Link>
            </li>
            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
              <Link
              activeClass="active border-b-2 border-y-black"  to="project" spy={true} smooth={true} offset={-100} duration={500}
                // crossOrigin="true"
              >
                Project
              </Link>
            </li>
            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white hover:cursor-pointer">
              <Link
              activeClass="active border-b-2 border-y-black"  to="contact" spy={true} smooth={true} offset={-100} duration={500}
                // crossOrigin="true"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
