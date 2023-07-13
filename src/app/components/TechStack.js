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
    <div className="text-center">
      <div className="flex justify-center place-items-center">
        <h1 className="flex flex-wrap border-b-2 border-b-cyan-800 text-lg font-semibold">
          Tech Stack
        </h1>
      </div>
      <div className="grid grid-flow-col justify-center place-items-center gap-5 border-b-2 border-b-cyan-800 text-black">
        <Image src={htmlLogo} alt="html" width={40} height={10} priority={false} className="w-full h-auto" />
        <Image src={cssLogo} alt="css" width={60} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={javascriptlogo} alt="js" width={40} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={tailwindLogo} alt="tailwind" width={40} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={reactLogo} alt="react" width={50} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={nextjsLogo} alt="nextjs" width={60} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={expressLogo} alt="ex" width={60} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={mongodbLogo} alt="mongodb" width={50} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={nodejsLogo} alt="nodejs" width={50} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={phpLogo} alt="php" width={50} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={laravelLogo} alt="laravel" width={40} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
        <Image src={mySQL} alt="mySQL" width={40} height={10} priority={false} style={{width: "100%", height: 'auto'}} />
      </div>
    </div>
  );
};

export default TechStack;
