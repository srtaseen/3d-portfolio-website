import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#1e293b] p-4 ml-[200px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>
      <p className="pl-10 text-xl tracking-wider font-inter">
        I am a full stack web developer working on over 10 years of experience.
        I love to take challenge and egger to deliver it within schedule.My
        expertise on MERN stack, Nextjs, Firebase, Stepzen, Supabase PostgreSQL,
        GraphQL, Typescript, Tailwind etc. I have well experienced to convert
        website from Figma, Photoshop, Adobe XD file.
      </p>
      <div className="pt-20">
        <p className="uppercase tracking-widest text-[#5651e5]">
          {" "}
          Lets Connect
        </p>
        <div className="flex items-center justify-between my-3 w-full sm:w-[80%] gap-6">
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <FaLinkedinIn />
          </div>
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <FaGithub />
          </div>
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <AiOutlineMail />
          </div>
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
            <BsPersonLinesFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
