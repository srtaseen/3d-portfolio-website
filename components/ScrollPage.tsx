import { forwardRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export const DivSpinner = () => <div>Loading...</div>;

export const DivContainer = forwardRef(({ children }, ref) => (
  <>
    <div ref={ref} className="fixed top-0 left-0 outline-none"></div>
    <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded]">
      <Hero />
    </section>

    <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] justify-end">
      <About />
    </section>

    <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded]">
      <Skills />
    </section>

    <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] justify-end">
      <Projects />
    </section>

    <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%]text-[#ffeded]">
      <Contact />
    </section>
  </>
));

const Loader = () => {
  return (
    <DivContainer>
      <DivSpinner />
    </DivContainer>
  );
};
export default Loader;
