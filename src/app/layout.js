"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Aman Verma",
//   description: "Aman Verma Portfolio",
// };

export default function RootLayout({ children }) {
  const data = [
    {
      id: 1,
      title: "Email",
      value: "amanv7404@gmail.com",
      icon: <MdMailOutline />,
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 7225090867",
      icon: <IoPhonePortraitOutline />,
    },
    {
      id: 3,
      title: "Birthday",
      value: "October 4, 2001",
      icon: <SlCalender />,
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
        <main className="bg-[#121212] w-full h-screen flex items-center flex-col p-3">
          <div className="w-[98%] md:flex ">
            {/* top section start*/}
            <div className=" bg-primary border-[0.2px] border-[#5a5a5b]  text-white  px-3 py-2 md:my-10 my-5 rounded-3xl flex flex-col items-center gap-x-5 md:h-fit md:block relative md:w-[25%] md:justify-center">
              <div
                className=" absolute top-0 right-0 rounded-lg bg-primary text-yellow-primary text-xl border border-[#5a5a5b] p-1 md:hidden"
                onClick={handleShow}
              >
                <MdKeyboardArrowDown />
              </div>
              <div className="flex flex-col justify-center items-center space-x-4  md:p-10 p-5 ">
                <div className="flex md:flex-col space-x-5 justify-center items-center">
                  <div className="bg-[#383839] rounded-3xl   flex justify-center items-center md:w-40 ">
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Aman Verma"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:mt-8 ">
                    <div className="flex flex-col space-y-2 justify-center items-center">
                      <h1 className="md:text-2xl font-medium text-base">
                        Aman Verma
                      </h1>
                      <div className="text-xs w-28 bg-[#383839] px-2 py-1 text-center rounded-lg">
                        Web developer
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#383839] w-full h-[1px] mt-10"></div>

                <div
                  className={`${
                    show ? "block" : "hidden"
                  } md:block  transition-all ease-in-out duration-500`}
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
                      <FaGithubSquare className="rounded-lg" />
                      <FaLinkedin className="rounded-lg" />
                      <FaInstagramSquare className="rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile view navbar start */}
              <div className="fixed w-full bg-[hsla(240, 1%, 20%, 0.75)] bottom-0 left-0 right-0  z-10  p-3  border-[0.2px] border-[#5a5a5b] backdrop-blur-[10px] rounded-tr-2xl rounded-tl-2xl md:hidden">
                <ul className="flex items-center justify-around text-text-secondary text-xs p-2">
                  <Link href="/">
                    <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                      About
                    </li>
                  </Link>
                  <Link href={"/resume"}>
                    <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                      Resume
                    </li>
                  </Link>
                  <Link href={"/portfolio"}>
                    <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                      Portfolio
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>

              {/* Mobile view navbar end */}
            </div>
            {/* top section end*/}
            <div className="bg-primary text-white w-full  mt-10 md:ml-5 border-[0.2px] border-[#5a5a5b] rounded-3xl">
              <div className=" hidden md:flex justify-end ">
                <div className="navbar bg-[#383839] px-5 py-3 rounded-bl-2xl rounded-tr-2xl w-[60%]">
                  <ul className="flex items-center justify-around text-base font-medium p-2">
                    <Link href="/">
                      <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                        About
                      </li>
                    </Link>
                    <Link href={"/resume"}>
                      <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                        Resume
                      </li>
                    </Link>
                    <Link href={"/portfolio"}>
                      <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                        Portfolio
                      </li>
                    </Link>
                    <Link href={"/contact"}>
                      <li className="hover:text-text-secondary transition-all ease-in-out duration-200">
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="px-7 py-2">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
