import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col ml-[120px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      <div className="grid items-center grid-cols-3 gap-4 font-inter">
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959794/portfolio/React-Ecommerce_kerdnf.png"
              alt="React-Ecommerce"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                React.js Ecommerce Web App
              </div>
              <p className="text-base text-gray-700">
                Comfy Sloth is a online based furniture shop developed by
                React.js with React Auth0 authentication and Stripe payment
                gateway system.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959794/portfolio/MERN-Ecommerce_tearfh.png"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                MERN Multivendor Ecommerce Web App
              </div>
              <p className="text-base text-gray-700">
                Preemela is MERN multivendor E-Commerce project like Amazon.
                React used as Front-End and Node.js & Express for Back-End and
                MongoDB as Database.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959795/portfolio/HTML-Website_ezbwkd.png"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-4 text-xl font-bold">
                Food Order and Deliver Web App
              </div>
              <p className="pb-4 text-base text-gray-700">
                Omnifood a food order and deliver single page web application
                design by HTML and CSS.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959793/portfolio/React-ExpenseTracker_zxpf8h.png"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                React.js Expense Tracker System
              </div>
              <p className="text-base text-gray-700">
                It is a expense tracker system for daily, monthly and annually
                based developed by React.js.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://media.graphassets.com/KBJx2oSB6xNmM3876gYY"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                Next.js Portfolio Blog
              </div>
              <p className="text-base text-gray-700">
                It is my portfolio blog developed by Next.js, React.js, Tailwind
                CSS, GraphQL and GraphCMS for Content management. So, it is a
                full stack portfolio blog application.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1660904803/portfolio/XD_to_Nextjs_hfnwo4.png"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
                Modern Business Website(XD to NextJs)
              </div>
              <p className="text-base text-gray-700">
                Modern business website,convert from Adobe XD design to NextJs
                TypeScript, TailwindCSS with animation by Framer-motion, GSAP
                etc.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
