"use client";

import React from "react";
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

import Image from "next/image";

function portfolio() {
  const portfolioData = [
    {
      id: 1,
      title: "SocialFlock",
      category: "Web Development",
      desc: "SocialFlock is a dynamic social media platform designed to connect users worldwide. Built on the MERN (MongoDB, Express.js, React.js, Node.js) stack",
      image:
        "https://res.cloudinary.com/dd3yp2kob/image/upload/v1715571570/portfolio_project_image/scialflock_mbe0iu.png",
      live: "https://socialflock.onrender.com/",
      github: "https://github.com/Aman0413/Social-Flock",
    },
    {
      id: 2,
      title: "Google Search Engine",
      category: "Web Development",
      desc: "A clone of the Google search engine, providing users with a familiar search experienc",
      image:
        "https://res.cloudinary.com/dd3yp2kob/image/upload/v1715571569/portfolio_project_image/google_duyhrn.png",
      live: "https://google-clone-two-silk.vercel.app/",
      github: "https://github.com/Aman0413/Google-Clone",
    },
    {
      id: 3,
      title: "Code editor",
      category: "Web Development",
      desc: "A code editor that allows users to write, compile, and run code in multiple languages. Built using React.js, express.js and the Ace code editor library.",
      image:
        "https://res.cloudinary.com/dd3yp2kob/image/upload/v1715571569/portfolio_project_image/editor_mkw1eh.png",
      live: "https://writecodeide.netlify.app/",
      github: "https://github.com/Aman0413/IDE-Project",
    },
    {
      id: 4,
      title: "AI Image Generator",
      category: "Web Development",
      desc: "An AI-powered image generator that uses the GAN (Generative Adversarial Network) algorithm to generate images based on user input.",
      image:
        "https://res.cloudinary.com/dd3yp2kob/image/upload/v1715571569/portfolio_project_image/imageGen_aifr9z.png",
      live: "https://ai-image-generator-client.onrender.com/",
      github: "https://github.com/Aman0413/Ai-image-generator-client",
    },
    {
      id: 5,
      title: "Movie App",
      category: "Web Development",
      desc: "A movie web app that allows users to search for movies, view movie details, and watch trailers. Built using React.js and the IMDb API",
      image:
        "https://res.cloudinary.com/dd3yp2kob/image/upload/v1715571573/portfolio_project_image/movie_yjhpxp.png",
      live: "https://movie-app-b7km.onrender.com/",
      github: "https://github.com/Aman0413/Movie-Web-App",
    },
    {
      id: 6,
      title: "ChatGpt Clone",
      category: "Web Development",
      desc: "A clone of the ChatGPT chatbot, which uses the GPT-3f model to generate human-like responses to user input. Built using React.js and the OpenAI GPT-3 API.",
      image:
        "https://res.cloudinary.com/dd3yp2kob/image/upload/v1715571570/portfolio_project_image/chagpt_ueo94q.png",
      live: "https://www.youtube.com/watch?v=umh1Ac5oXC4",
      github: "https://github.com/Aman0413/Ask-me-anything",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="portfolio py-6"
    >
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
      </div>
      {/* portfolio card start*/}
      <div className=" w-full portfolioCard my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {portfolioData.map((item) => {
          return (
            <div key={item.id} className="portfolioCard ">
              <div className="w-full flex justify-between">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl">
                  <div class="w-full h-56 md:w-72 md:h-72 ">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={item.image}
                      alt=""
                      height={240}
                      width={240}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-xl font-bold text-white">
                      {item.title}
                    </h1>
                    <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.desc}
                    </p>
                    <div className="flex space-x-2">
                      <Link href={item.live}>
                        <button className="rounded-full bg-[#282828]  p-2 md:py-3 md:px-4 font-com text-lg capitalize  shadow shadow-black/60 text-yellow-primary">
                          <IoEye />
                        </button>
                      </Link>
                      <Link href={item.github}>
                        <button className="rounded-full bg-[#282828] p-2 md:py-3 md:px-4 font-com text-lg capitalize  shadow shadow-black/60 text-yellow-primary">
                          <FaGithub />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 ml-2 text-sm flex flex-col  ">
                <p>{item.title}</p>
                <p className="text-[#8d8d8e]">{item.category}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* portfolio card end*/}
    </motion.div>
  );
}

export default portfolio;
