"use client";

import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import Loader from "../../components/Loader";
import Image from "next/image";

function portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/admin/project");
      setPortfolioData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return loading ? (
    <Loader />
  ) : (
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
            <div key={item._id} className="portfolioCard ">
              <div className="w-full flex justify-between">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-2xl">
                  <div class="w-full h-56 md:w-72 md:h-72 ">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={item.image?.url}
                      alt=""
                      height={240}
                      width={240}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-xl font-bold text-white mb-16">
                      {item?.title}
                    </h1>
                    <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item?.description}
                    </p>
                    <div className="flex space-x-2">
                      <Link href={item?.live}>
                        <button className="rounded-full bg-[#282828]  p-2 md:py-3 md:px-4 font-com text-lg capitalize  shadow shadow-black/60 text-yellow-primary">
                          <IoEye />
                        </button>
                      </Link>
                      <Link href={item?.github}>
                        <button className="rounded-full bg-[#282828] p-2 md:py-3 md:px-4 font-com text-lg capitalize  shadow shadow-black/60 text-yellow-primary">
                          <FaGithub />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 ml-2 text-sm flex flex-col  ">
                <p>{item?.title}</p>
                {/* <p className="text-[#8d8d8e]">{item.category}</p> */}
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
