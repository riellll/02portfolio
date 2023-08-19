import Image from "next/image";
import proj1 from "../../../public/proj1.PNG";
import proj2 from "../../../public/proj2.PNG";
import proj3 from "../../../public/proj3.PNG";
import Link from "next/link";

const Project = () => {
  return (
    <div className="grid bg-white h-full gap-10 lg:mt-20 content-center justify-items-center text-center lg:px-32 md:px-16 md:mb-20 sm:px-10 sm:mb-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        PROJECTS
      </h1>

      <div className="grid grid-cols-2 gap-5 py-5">
        <Image
          src={proj1}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50 px-2"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">Cinezone</h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-white">
            {" "}
            Dive into an extensive and ever-growing collection of movies from
            different genres, eras, and cultures. a meticulously crafted movie
            collection app that seamlessly combines the power of React and
            Next.js with the vast MovieDB API. you can effortlessly search for
            your favorite films or discover hidden gems that you never knew
            existed.
          </p>
          <div className="flex justify-center gap-4 pt-3">
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              React
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Javascript
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Next.js
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Tailwind
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://cinezone-sigma.vercel.app/"}
              target="_blank"
              className="font-semibold rounded py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 hover:text-black hover:bg-white"
            >
              See Live
            </Link>
            <Link
              href={"https://github.com/riellll/Cinezone.git"}
              target="_blank"
              className="font-semibold rounded py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 hover:text-black hover:bg-white"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 py-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">TechStack</h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-white">
          Dive into the ever-evolving world of technology with TechStack, your go-to app for staying updated on the latest tech news and harnessing the collective wisdom of the tech community. Crafted using cutting-edge technologies, including React and Next.js, and fueled by the TechNews API and Stack Overflow integration, TechStack empowers you to explore, learn, and engage like never before.
          </p>
          <div className="flex justify-center gap-4 pt-3">
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              React
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Javascript
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Next.js
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Tailwind
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://techstack-ucode.vercel.app/"}
              target="_blank"
              className="font-semibold rounded py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 hover:text-black hover:bg-white"
            >
              See Live
            </Link>
            <Link
              href={"#"}
              // target="_blank"
              className="font-semibold rounded py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 hover:text-black hover:bg-white"
            >
              Source Code
            </Link>
          </div>
        </div>
        <Image
          src={proj2}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 py-5">
        <Image
          src={proj3}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">Kodejobs</h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-white">
          KodeJobs simplifies the hiring process by allowing companies to effortlessly post job openings. Whether you're a startup, an established firm, or anything in between, our platform provides a user-friendly interface to showcase your company and the positions you're looking to fill.
          </p>
          <div className="flex justify-center gap-4 pt-3">
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              React
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Javascript
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Next.js
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Tailwind
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Node.js
            </p>
            <p className="font-semibold border border-black rounded px-2 shadow-inner shadow-neutral-950/50">
              Express
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://kodejobs.vercel.app/"}
              target="_blank"
              className="font-semibold rounded py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 hover:text-black hover:bg-white"
            >
              See Live
            </Link>
            <Link
              href={"https://github.com/riellll/kodejobs.git"}
              target="_blank"
              className="font-semibold rounded py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 hover:text-black hover:bg-white"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
