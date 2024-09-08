"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

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

  // useEffect(() => {
  //   getAllProjects();
  // }, [handleDelete]);

  return (
    <div className="mt-6">
      <h2 className="font-bold">Actions</h2>
      <div className="mt-3 py-5">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[#383839] ">
              <th className="w-full py-4 px-6 text-left text-white font-bold uppercase ">
                Project Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">
                Update
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
                        className="bg-green-500 text-white py-1 px-2 rounded-full text-xs"
                        onClick={() => {
                          router.push(`/admin/update/${item._id}`);
                        }}
                      >
                        Update
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 cursor-pointer">
                      <span
                        className="bg-red-500 text-white py-1 px-2 rounded-full text-xs"
                        onClick={() => handleDelete(item._id)}
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
