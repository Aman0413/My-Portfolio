"use client";

import React from "react";

import { SiAffinitydesigner } from "react-icons/si";
import { motion } from "framer-motion";
import ShowcaseModal from "../components/ShowcaseModal";

function page() {
  const data = [
    {
      id: 1,
      title: "Web Development",
      desc: "High-quality development of sites at the professional level.",
      icon: <SiAffinitydesigner />,
    },
    {
      id: 2,
      title: "Web Design",
      desc: "The most modern and high-quality design made at a professional level",
      icon: <SiAffinitydesigner />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about py-6"
    >
      <div>
        <div className="flex flex-col space-y-3 ">
          <h1 className="text-3xl font-semibold">About Me</h1>
          <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
        </div>

        <div className="mt-4 ">
          <p className="text-text-secondary text-left leading-7 font-normal">
            I&apos;m your full-stack MERN virtuoso, with Next.js as my secret
            wand. With MongoDB, Express.js, React, Node.js, and the wizardry of
            Next.js in my arsenal, I conjure up web applications that dazzle and
            delight. From sleek interfaces to seamless server-side rendering, I
            specialize in crafting experiences that leave users spellbound.
            Let&apos;s collaborate to transform your visions into digital
            enchantments.
          </p>
        </div>

        <div className="mt-10 ">
          <div className="text-2xl  font-semibold">
            <h2>What I&apos;m doing</h2>
          </div>
          <div className="flex flex-wrap justify-between gap-2 mt-6 pb-10">
            {data.map((item) => {
              return <ShowcaseModal key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
