import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center tracking-wider">
        <h1 className="pb-4 text-5xl font-bold font-kaushan">
          Showkat Alamgir
        </h1>
        <h3 className="pb-4 text-2xl font-bold font-kaushan">
          A Full Stack Developer
        </h3>
      </div>
      <div className="p-2">
        <button className="p-2 w-[180px] text-xl font-kaushan">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
