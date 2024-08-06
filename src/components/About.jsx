import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex justify-center w-full h-full px-48">
        <div className="flex flex-col items-start justify-start">
          <div className="">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <lord-icon
            src="https://cdn.lordicon.com/rnvjhobj.json"
            trigger="loop"
            colors="primary:#F6009C,secondary:#FFD600,tertiary:#ebe6ef,quaternary:#000000,quinary:#000000"
            class="lord-icon"
            data-aos="fade-down"
          ></lord-icon>
        </div>
        <div className="flex flex-col gap-5 pt-28 pl-5 ml-10">
          <div className="flex flex-col">
            <div className=" text-4xl font-bold">
              <p>
                Hi. I'm Suraj Pandey, nice to meet you. Please take a look
                around.
              </p>
            </div>
          </div>

          <div data-aos="fade-down">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me.I'm not just a developer; I'm a
              problem solver. I thrive in collaborative environments, valuing
              open communication and teamwork to achieve project goals Thank you
              for visiting my portfolio, and I look forward to the opportunity
              of working together! Feel free to reach out via
              [srjpandey15@gmail.com] to start a conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
