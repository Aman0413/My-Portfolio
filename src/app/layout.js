"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { Toaster } from "react-hot-toast";

// import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Verma",
  description: "Aman Verma Portfolio",
};

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-image"), {
      max: 100,
      speed: 500,
      glare: false,
    });
  }, []);

  const data = [
    {
      id: 1,
      title: "Email",
      value: "amanv7404@gmail.com",
      icon: <MdMailOutline />,
    },
    {
      id: 4,
      title: "Location",
      value: "Indore, Madhya Pradesh, India",
      icon: <IoLocationOutline />,
    },
  ];

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] w-full h-screen flex items-center flex-col p-3"
        >
          <Toaster position="top-center" reverseOrder={false} />

          <div className="w-[98%] md:flex  ">
            {/* top section start*/}
            <div className=" bg-primary border-[0.2px] border-[#5a5a5b]  text-white  px-3 py-2 md:my-10 my-5 rounded-3xl flex flex-col items-center gap-x-5 md:h-fit md:block relative md:w-[25%] md:justify-center ">
              <div
                className=" absolute top-0 right-0 rounded-lg bg-primary text-yellow-primary text-xl border border-[#5a5a5b] p-1 md:hidden"
                onClick={handleShow}
              >
                <MdKeyboardArrowDown />
              </div>
              <div className="flex flex-col justify-center items-center space-x-4  md:p-10 p-5 profile ">
                <div className="flex md:flex-col space-x-5 justify-center items-center">
                  <Link href="/">
                    <div className="bg-[#383839] rounded-3xl   flex justify-center items-center w-30 h-30 p-6 tilt-image">
                      <Image
                        src="https://res.cloudinary.com/dd3yp2kob/image/upload/v1715588291/portfolio_project_image/IMG_20240513_134650_rmt22k.jpg"
                        alt="Aman Verma"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                  </Link>
                  <div className="md:mt-8 ">
                    <div className="flex flex-col space-y-2 justify-center items-center">
                      <h1 className="md:text-2xl font-medium text-base">
                        Aman Verma
                      </h1>
                      <div className="text-xs w-40 bg-[#383839] px-2 py-2 text-center rounded-lg ">
                        Software Engineer
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#383839] w-full h-[1px] mt-10"></div>

                {/* contact details */}
                <motion.nav
                  initial={{ y: 50 }}
                  animate={{ y: show ? 0 : 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={`${
                    show ? "block" : "hidden"
                  } md:block transition-all ease-in-out duration-500`}
                >
                  <div className="flex flex-col gap-2 mt-5">
                    {data.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex justify-start p-1 items-center space-x-4  "
                        >
                          <div className="logo  w-10 h-10  rounded-lg flex justify-center items-center text-yellow-primary border-[0.2px] border-[#383839] shadow-white shadow-2xl">
                            {item.icon}
                          </div>

                          <div className="field text-xs">
                            <div className="uppercase text-text-secondary">
                              {item.title}
                            </div>
                            <div>{item.value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className=" w-full mt-10 transition-all ease-in-out duration-500">
                    <div className="text-text-secondary flex justify-center items-center space-x-4 text-2xl ">
                      <a href="https://github.com/Aman0413">
                        <FaGithubSquare className="rounded-lg" />
                      </a>
                      <a href="https://www.linkedin.com/in/aman-verma-1a459020b/">
                        <FaLinkedin className="rounded-lg" />
                      </a>
                      <a href="#">
                        <FaInstagramSquare className="rounded-lg" />
                      </a>
                    </div>
                  </div>
                </motion.nav>
              </div>

              {/* Mobile view navbar start */}
              <div className="fixed w-full bg-[#282829] shadow-2xl bottom-0 left-0 right-0  z-10  p-3  border-[0.2px] border-[#5a5a5b] backdrop-blur-[10px] rounded-tr-2xl rounded-tl-2xl md:hidden">
                <ul className="flex items-center justify-around text-text-secondary text-xs p-2">
                  <Link href="/">
                    <li
                      className={`hover:text-text-secondary transition-all ease-in-out duration-200 ${
                        path === "/" ? "text-yellow-primary" : ""
                      }`}
                    >
                      About
                    </li>
                  </Link>
                  <Link href={"/resume"}>
                    <li
                      className={`hover:text-text-secondary transition-all ease-in-out duration-200 ${
                        path === "/resume" ? "text-yellow-primary" : ""
                      }`}
                    >
                      Resume
                    </li>
                  </Link>
                  <Link href={"/portfolio"}>
                    <li
                      className={`hover:text-text-secondary transition-all ease-in-out duration-200 ${
                        path === "/portfolio" ? "text-yellow-primary" : ""
                      }`}
                    >
                      Portfolio
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li
                      className={`hover:text-text-secondary transition-all ease-in-out duration-200 ${
                        path === "/contact" ? "text-yellow-primary" : ""
                      }`}
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>

              {/* Mobile view navbar end */}
            </div>

            {/* top section  end*/}
            <div className="bg-primary text-white w-full mt-10 md:ml-5 border-[0.2px] border-[#5a5a5b] rounded-3xl">
              <Navbar />
              <div className="px-7 py-2 ">{children}</div>
            </div>
          </div>
        </motion.div>
      </body>
    </html>
  );
}
