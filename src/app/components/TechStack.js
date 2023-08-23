import Image from "next/image";
import htmlLogo from "@/tech_stack_pic/html.png"
import cssLogo from "@/tech_stack_pic/css.png"
import javascriptlogo from "@/tech_stack_pic/javascript.png"
import tailwindLogo from "@/tech_stack_pic/tailwind.png"
import reactLogo from "@/tech_stack_pic/react.png"
import nextjsLogo from "@/tech_stack_pic/nextjs.png"
import expressLogo from "@/tech_stack_pic/express.png"
import mongodbLogo from "@/tech_stack_pic/mongodb.png"
import nodejsLogo from "@/tech_stack_pic/nodejs.png"
import phpLogo from "@/tech_stack_pic/php.png"
import laravelLogo from "@/tech_stack_pic/laravel.png"
import mySQL from "@/tech_stack_pic/sql.png"

const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 text-center md:px-18 sm:px-12">
      <div className="flex justify-center place-items-center">
        <h1 className="flex flex-wrap border-b-2 border-b-cyan-800 text-lg font-semibold">
          Tech Stack
        </h1>
      </div>
      <div className="flex flex-wrap justify-center place-items-center gap-5 border-b-2 border-b-cyan-800 text-black min-[320px]:px-6">
        <Image src={htmlLogo} alt="html" width={1000} height={1000} className="w-11 h-auto" priority/>
        <Image src={cssLogo} alt="css" width={1000} height={1000} className="w-16 h-auto" priority/>
        <Image src={javascriptlogo} alt="js" width={1000} height={500} className="w-12 h-auto" priority />
        <Image src={tailwindLogo} alt="tailwind" width={1000} height={500} className="w-12 h-auto" priority />
        <Image src={reactLogo} alt="react" width={1000} height={500} className="w-12 h-auto" priority />
        <Image src={nextjsLogo} alt="nextjs" width={1000} height={1000} className="w-14 h-auto" priority />
        <Image src={expressLogo} alt="ex" width={1000} height={1000} className="w-14 h-auto" priority />
        <Image src={mongodbLogo} alt="mongodb" width={1000} height={1000} className="w-14 h-auto" priority />
        <Image src={nodejsLogo} alt="nodejs" width={1000} height={1000} className="w-16 h-auto" priority />
        <Image src={phpLogo} alt="php" width={1000} height={1000} className="w-16 h-auto" priority />
        <Image src={laravelLogo} alt="laravel" width={1000} height={1000} className="w-14 h-auto" priority />
        <Image src={mySQL} alt="mySQL" width={1000} height={1000} className="w-14 h-auto" priority />
      </div>
    </div>
  );
};

export default TechStack;
