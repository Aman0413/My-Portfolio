"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Layout({ children }) {
  const path = usePathname();

  const handleLogout = async () => {
    try {
      const res = await axios.delete("/api/logout");

      if (res.data.success) {
        toast.success(res.data.message);
        window.location.href = "/";
      }
    } catch (error) {
      toast.error("Error in Logout");
      console.log(error);
    }
  };

  return (
    <>
      <div className=" text-center text-xl py-4">Admin Panel</div>

      <div className="">
        <ul className="flex justify-center items-center gap-8 ">
          <Link href={"/admin/add"}>
            <li
              className={`bg-[#383839] px-4 py-2 rounded-full ${
                path == "/admin/add" ? "text-yellow-primary" : ""
              }`}
            >
              Add Project
            </li>
          </Link>
          <Link href={"/admin/update"}>
            <li
              className={`bg-[#383839] px-4 py-2 rounded-full ${
                path == "/admin/update" ? "text-yellow-primary" : ""
              }`}
            >
              Update Project
            </li>
          </Link>
          <Link href={"/admin/delete"}>
            <li
              className={`bg-[#383839] px-4 py-2 rounded-full ${
                path == "/admin/delete" ? "text-yellow-primary" : ""
              }`}
            >
              Delete Project
            </li>
          </Link>
        </ul>
      </div>
      <main>{children}</main>
      <div className=" m-4 flex justify-between items-center">
        <div className="py-4">It can access admin only</div>
        <button
          className="bg-[#1e1e1f]  w-full md:w-40 h-10 rounded-2xl font-semibold flex justify-center items-center space-x-2 px-2 py- text-sm border-[0.2px] border-[#5a5a5b] shadow-lg text-yellow-primary transition-all ease-in-out duration-300 active:scale-95"
          onClick={handleLogout}
        >
          <p>Logout</p>
        </button>
      </div>
    </>
  );
}
