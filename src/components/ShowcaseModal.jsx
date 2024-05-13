import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function ShowcaseModal({ item }) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-image"), {
      max: 35,
      speed: 300,
      glare: false,
    });
  }, []);

  return (
    <div className="ShowcaseModal bg-[#212123] border-[0.2px] border-[#383839] p-8  mt-4 flex flex-col md:flex-row  space-y-4 md:space-y-0 items-center justify-center space-x-6 md:w-[48%] rounded-2xl shadow-2xl tilt-image">
      <div className="text-3xl text-yellow-primary">{item.icon}</div>
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <div className=" text-text-secondary text-sm text-center md:text-left">
          {item.desc}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseModal;
