"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { m } from "framer-motion";

function page() {
  const [data, setData] = useState({
    title: "",
    category: "",
    desc: "",
    image: "",
    github: "",
    live: "",
  });

  const [disebleButton, setDisebleButton] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setData({ ...data, image: fileReader.result });
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisebleButton(true);
      const myPromise = fetch("/api/admin/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast.promise(myPromise, {
        loading: "Loading....",
        success: "Project added successfully",
        error: "Error in adding project",
      });

      setDisebleButton(false);
      e.form.reset();
    } catch (error) {
      setDisebleButton(false);
      console.log(error);
      toast.error("Error in adding project");
    }
  };
  return (
    <div className="flex  items-center justify-center rounded-lg">
      <div className="mx-auto w-full p-10  bg-[#1e1e1f] rounded-lg ">
        <form onSubmit={handleSubmit}>
          <div className="mb-5 ">
            <label
              for="title"
              className="mb-3 block text-base font-medium text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Title of the project"
              className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
            />
          </div>
          <div className="mb-5">
            <label
              for="category"
              className="mb-3 block text-base font-medium text-white"
            >
              Category
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => setData({ ...data, category: e.target.value })}
              placeholder="Category"
              className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
            />
          </div>
          <div className="mb-5">
            <label
              for="Description"
              className="mb-3 block text-base font-medium text-white"
            >
              Description
            </label>
            <textarea
              type="textarea"
              name="Description"
              id="Description"
              onChange={(e) => setData({ ...data, desc: e.target.value })}
              placeholder="Description"
              className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  for="live"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Live/Deploy Link
                </label>
                <input
                  type="text"
                  name="live"
                  id="live"
                  onChange={(e) => setData({ ...data, live: e.target.value })}
                  placeholder="Live"
                  className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  for="github"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Github Link
                </label>
                <input
                  type="text"
                  name="github"
                  id="github"
                  onChange={(e) => setData({ ...data, github: e.target.value })}
                  placeholder="Github"
                  className="bg-[#1e1e1f]  w-full p-4 rounded-2xl outline-none border-[0.2px] border-[#5a5a5b] caret-yellow-primary placeholder-[#7b7b7b] font-semibold focus:border-yellow-primary focus:border-2"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-white sm:text-xl">
              Preview Upload
            </label>
            <div className="-mx-3 flex justify-center items-center flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div class="extraOutline p-4 bg-[1e1e1f] w-max bg-whtie m-auto rounded-lg">
                  <div class="file_upload p-5 relative border-4 border-dotted border-yellow-primary rounded-lg">
                    <svg
                      class="text-white w-24 mx-auto mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div class="input_field flex flex-col w-max mx-auto text-center">
                      <input
                        className="text-sm cursor-pointer w-36"
                        id="inputImg"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                      />

                      <div class="text bg-yellow-primary text-[#1e1e1f] border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-yellow-600">
                        Select
                      </div>

                      <div class="title text-white uppercase">
                        or drop files here
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              className="hover:shadow-form w-full rounded-md bg-yellow-primary py-3 px-8 text-center text-base font-semibold text-[#1e1e1f] outline-none"
              disabled={disebleButton}
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
