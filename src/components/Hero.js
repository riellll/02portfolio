import { BsGithub, BsLinkedin } from "react-icons/bs";
import TechStack from "./TechStack";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid bg-white h-screen gap-4 sm:mt-0 sm:mb-10 content-center justify-items-center text-center dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-900 md:px-32 sm:px-12 min-[320px]:px-6 min-[320px]:mb-40 min-[320px]:mt-10">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
        Hi, I&#39;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">
          Gabriel Noe Napiere
        </span>
      </h1>
      <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
        I&#39;m A Full Stack Web Developer. I bring ideas to life through
        elegant code and intuitive designs. My goal is to deliver seamless,
        responsive, and scalable web applications that not only meet the clients
        needs but also exceed their expectations.
      </p>
      <div className="grid grid-cols-2 gap-4 text-3xl">
        <Link href={"https://github.com/riellll"} target="_blank">
          <BsGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gabriel-noe-napiere-88009525a/"}
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </div>
      <div className="pt-16">
        <TechStack />
      </div>
    </div>
  );
};

export default Hero;
