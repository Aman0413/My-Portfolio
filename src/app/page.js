"use client";

import React from "react";
import { SiAffinitydesigner } from "react-icons/si";

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
    {
      id: 3,
      title: "Web Design",
      desc: "The most modern and high-quality design made at a professional level",
      icon: <SiAffinitydesigner />,
    },
    {
      id: 4,
      title: "Web Design",
      desc: "The most modern and high-quality design made at a professional level",
      icon: <SiAffinitydesigner />,
    },
  ];
  return (
    <div className="about py-6">
      <div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl font-semibold">About Me</h1>
          <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
        </div>

        <div className="mt-4">
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
              return (
                <div
                  key={item.id}
                  className="bg-[#212123] border-[0.2px] border-[#383839] p-8  mt-4 flex flex-col md:flex-row  space-y-4 md:space-y-0 items-center justify-center space-x-6 md:w-[48%] rounded-2xl shadow-2xl"
                >
                  <div className="text-3xl text-yellow-primary">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-2 items-center md:items-start">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <div className=" text-text-secondary text-sm text-center md:text-left">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
