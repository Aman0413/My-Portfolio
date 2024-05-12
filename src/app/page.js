"use client";

import React from "react";
import { SiAffinitydesigner } from "react-icons/si";

function page() {
  const data = [
    {
      id: 1,
      title: "Web Design",
      desc: "The most modern and high-quality design made at a professional level",
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
            I&apos;m Creative Director and UI/UX Designer from Sydney,
            Australia, working in web development and print media. I enjoy
            turning complex problems into simple, beautiful and intuitive
            designs. My job is to build your website so that it is functional
            and user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </div>

        <div className="mt-10 ">
          <div className="text-2xl font-normal">
            <h2>What I&apos;m doing</h2>
          </div>
          <div className="flex flex-wrap justify-between gap-2 mt-6">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-[#212123] border-[0.2px] border-[#383839] p-8  mt-4 flex items-center justify-center space-x-6 md:w-[48%] rounded-2xl shadow-2xl"
                >
                  <div className="text-3xl text-yellow-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
