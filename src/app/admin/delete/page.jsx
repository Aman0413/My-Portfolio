"use client";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";

function Page() {
  const [projects, setProjects] = useState([]);
  const [disebleButton, setDisebleButton] = useState(false);

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
      const res = await axios.delete("/api/admin/project", {
        data: { id },
      });

      toast.success(res.data.message);
      setDisebleButton(false);
    } catch (error) {
      setDisebleButton(false);
      toast.error("Error in deleting project");
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProjects();
  }, []);

  useEffect(() => {}, [projects]);

  return (
    <div className="p-4 mt-5">
      <table className="w-full text-left p-2">
        <tr className=" p-4 rounded-md">
          <th>Project</th>
          <th>Delete</th>
        </tr>
        {projects.length > 0 &&
          projects.map((item) => {
            return (
              <tr key={item._id} className="mt-4 cursor-pointer">
                <td>{item.title}</td>
                <td
                  className="bg-[#383839] w-20 p-3 rounded-full text-center text-red-600 text-2xl"
                  onClick={() => handleDelete(item._id)}
                  diseable={disebleButton}
                >
                  <AiFillDelete />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Page;
