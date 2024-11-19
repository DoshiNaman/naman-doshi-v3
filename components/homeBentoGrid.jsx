"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconInfoCircle,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconCloud } from "./iconCloud";
import Link from "next/link";

const slugs = [
  "typescript",
  "javascript",
  "shadcnui",
  "tailwindcss",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "python",
  "django",
  "php",
  "bootstrap",
  "nodedotjs",
  "express",
  "prisma",
  "clerk",
  "redux",
  "flux",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
];

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full pl-2 text-sm color-white bg-gray-100 h-5 rounded-full dark:bg-neutral-900">
          Attribute
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-5 text-right pr-2 text-sm color-white rounded-full dark:bg-neutral-900">
          {" "}
          Based
        </div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full pl-2 text-sm color-white bg-gray-100 h-5 rounded-full dark:bg-neutral-900">
          Access
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-5 text-right pr-2 text-sm color-white rounded-full dark:bg-neutral-900">
          Control
        </div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full pl-2 text-sm color-white bg-gray-100 h-5 rounded-full dark:bg-neutral-900">
          System
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden pb-10">
        <IconCloud iconSlugs={slugs} />
      </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="md:mt-0 mt-20 flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg">
        <div className="flex justify-center items-center h-full w-full">
          <Image
            src={"/profile-pic.png"}
            width={100}
            height={100}
            className=""
            alt="naman"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const first2 = {
    initial: { y: 10, rotate: -5 },
    hover: { y: 0, rotate: 0 },
  };
  const second = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] md:flex-row space-x-2 flex-col"
    >
      <motion.div
        variants={first}
        className="h-full md:w-1/3 w-[80vw] rounded-2xl bg-white p-4 dark:bg-neutral-800 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="text-center font-semibold text-lg text-neutral-700 dark:text-neutral-300">
          Creativity
        </p>
        <p className="sm:text-sm text-xs text-center text-neutral-500 mt-4">
          Finding unique solutions and innovative approaches to problems.
        </p>
        <p className="border border-pink-500 bg-pink-100 dark:bg-pink-900/20 text-pink-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Think Outside the Box
        </p>
      </motion.div>

      <motion.div
        variants={first2}
        className="h-full relative z-20 md:w-1/3 w-[80vw] rounded-2xl bg-white p-4 dark:bg-neutral-900 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="text-center font-semibold text-lg text-neutral-700 dark:text-neutral-300">
          Resilience
        </p>
        <p className="sm:text-sm text-xs text-center text-neutral-500 mt-4">
          Embracing challenges and learning from failures.
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Bounce Back Stronger
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full md:w-1/3 w-[80vw] rounded-2xl bg-white p-4 dark:bg-neutral-800 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="text-center font-semibold text-lg text-neutral-700 dark:text-neutral-300">
          Collaboration
        </p>
        <p className="sm:text-sm text-xs text-center text-neutral-500 mt-4">
          Working effectively with teams to bring ideas to life.
        </p>
        <p className="border border-yellow-500 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Stronger Together
        </p>
      </motion.div>

      <motion.div
        variants={first2}
        className="h-full relative z-20 md:w-1/3 w-[80vw] rounded-2xl bg-white p-4 dark:bg-neutral-900 dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="text-center font-semibold text-lg text-neutral-700 dark:text-neutral-300">
          Growth Mindset
        </p>
        <p className="sm:text-sm text-xs text-center text-neutral-500 mt-4">
          Continuously seeking knowledge and new skills.
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Never Stop Learning
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Greetings! I'm NAMAN",
    description: (
      <span className="text-sm">
        A web developer & designer based in India! I specialize in Fullstack
        Engineering, focusing on building high quality web experiences through
        clean code and thoughtful design.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconInfoCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: (
      <Link
        target="_blank"
        href={"https://abac-demo.vercel.app/"}
        className="flex gap-2 flex-wrap"
      >
        <span className="whitespace-nowrap">Checkout the Recent Project</span>
        <IconArrowUpRight className="border border-white rounded-full size-6" />
      </Link>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Skilled Tech Stack",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Developer Mindset: My Core Values",
    header: <SkeletonFour />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
