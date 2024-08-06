import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-200 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Suraj Pandey
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
          I'm a pasionate web developer, experienced in backend development.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[1000px]">
          I'm a passionate full stack developer with a strong specialization in
          backend development. I excel in creating robust and scalable
          server-side applications, ensuring high performance and security.
          While my expertise lies in backend technologies, I am also interested
          in front-end development, enabling me to build comprehensive
          full-stack solutions.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              onClick={handleClick}
              to="work"
              smooth={true}
              duration={500}
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
