"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const path = usePathname();

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
      <div className="py-4">It can access admin only</div>
    </>
  );
}
