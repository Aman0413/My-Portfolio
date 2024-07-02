import React from "react";

function Loader() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-gray-100 dark:text-white mt-4">Loading...</h2>
      </div>
    </div>
  );
}

export default Loader;
