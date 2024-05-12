import React from "react";
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function portfolio() {
  const portfolioData = [
    {
      id: 1,
      title: "SocialFlock",
      category: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      id: 2,
      title: "SocialFlock",
      category: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat",
      image:
        "https://plus.unsplash.com/premium_photo-1692241091702-bc574bf6b720?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      id: 3,
      title: "SocialFlock",
      category: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat",
      image:
        "https://plus.unsplash.com/premium_photo-1690303193898-f9c721d0770b?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      id: 4,
      title: "SocialFlock",
      category: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      id: 5,
      title: "SocialFlock",
      category: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat",
      image:
        "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      id: 6,
      title: "SocialFlock",
      category: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat",
      image:
        "https://plus.unsplash.com/premium_photo-1683141123518-ae57c1b4d335?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
  ];
  return (
    <div className="portfolio py-6">
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <div className="bg-yellow-primary w-10 h-1 rounded-2xl"></div>
      </div>
      {/* portfolio card start*/}
      <div className="w-full portfolioCard my-10 flex flex-wrap gap-8">
        {portfolioData.map((item) => {
          return (
            <div key={item.id} className="portfolioCard ">
              <div className="w-full flex justify-between">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl">
                  <div class="md:w-60 md:h-60 ">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={item.image}
                      alt=""
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
                        <button className="rounded-full bg-[#282828] py-3 px-4 font-com text-lg capitalize  shadow shadow-black/60 text-yellow-primary">
                          <IoEye />
                        </button>
                      </Link>
                      <Link href={item.github}>
                        <button className="rounded-full bg-[#282828] py-3 px-4 font-com text-lg capitalize  shadow shadow-black/60 text-yellow-primary">
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
    </div>
  );
}

export default portfolio;
