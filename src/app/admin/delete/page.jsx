"use client";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { FaAws } from "react-icons/fa";

function Page() {
  const [projects, setProjects] = useState([]);
  const [disebleButton, setDisebleButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAllProjects = async () => {
    try {
      const res = await axios.get("/api/admin/project");

      setProjects(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      setDisebleButton(true);
      const myPromise = fetch("/api/admin/project", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      toast.promise(myPromise, {
        loading: "Deleting....",
        success: "Project delete successfully",
        error: "Error in deleting project",
      });
    } catch (error) {
      setDisebleButton(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  useEffect(() => {
    getAllProjects();
  }, [handleDelete]);

  return (
    <div className="p-4 mt-5">
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[#383839] ">
              <th className="w-full py-4 px-6 text-left text-white font-bold uppercase ">
                Project Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#383839] text-white">
            {projects.length > 0 &&
              projects.map((item) => {
                return (
                  <tr key={item._id}>
                    <td className=" py-4 px-6 border-b border-gray-200">
                      {item.title}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 cursor-pointer">
                      <span
                        className="bg-red-500 text-white py-1 px-2 rounded-full text-xs"
                        onClick={() => handleDelete(item._id)}
                        diseable={disebleButton}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
