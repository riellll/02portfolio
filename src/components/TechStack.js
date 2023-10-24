'use client'
import Image from "next/image";
import { techImage } from "@/constants";
import { motion } from "framer-motion";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  }),
};

const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 text-center md:px-18 sm:px-12">
      <div className="flex justify-center place-items-center">
        <h1 className="flex flex-wrap border-b-2 border-b-slate-600 dark:border-b-cyan-800 text-lg font-semibold">
          Tech Stack
        </h1>
      </div>
      <div className="flex flex-wrap justify-center place-items-center gap-2 sm:gap-5 border-b-2 border-b-gray-600 dark:border-b-cyan-800 text-black min-[320px]:px-0 min-[320px]:pb-1">
        {techImage.map((item, index) => (
          <motion.div key={item.alt} variants={fadeAnimationVariants} initial='initial' whileInView={'animate'} viewport={{once: true,}} custom={index}>
            <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
      <Image
            src={item.imgURL}
            alt={item.alt}
            width={1000}
            height={1000}
            className={`${item.className} cursor-pointer px-1`}
            priority
          />
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 w-48">
          <div className="text-small font-bold text-center">{item.title}</div>
          <div className="text-tiny">{item.desc}</div>
        </div>
      </PopoverContent>
    </Popover>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
