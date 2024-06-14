import React from "react";
// import './education.css';
import "../education/education.css";
const Skills = () => {
  return (
    <section
      id="what-i-do"
      className="bg-wheat flex flex-col justify-center min-h-svh"
    >
      <h3 className="title w-full text-2xl tracking-[0.6rem] max-w-4xl px-10 mx-auto mb-7">
        Skills
      </h3>
      <div className="h-[1px] mb-5 w-full relative">
        <div className="h-5 w-full relative -top-5 z-[1] hover:h-[500px] hover:-top-[250px]"></div>
        <svg className="w-full h-[500px] absolute -top-[250px]">
          <path
            className="stroke-slate-700 stroke-1 fill-none"
            d="M0 250 Q123.47395833333334 249.38655127961889, 302 250"
          ></path>
        </svg>
      </div>
      <div className="content pt-3 sm:pt-5 hover-overlay">
        <p className="degree text-2xl sm:text-4xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          Programming Languages
        </p>
        <p className="details text-xl sm:text-xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          C &nbsp; &nbsp;&nbsp;C++&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; Java &nbsp;
          &nbsp;&nbsp; Python &nbsp; &nbsp;&nbsp; COBOL
        </p>
        <div className="h-[1px] mb-5 w-full relative">
          <div className="h-10 w-full relative -top-5 z-[1] hover:h-[500px] hover:-top-[250px]"></div>
          <svg className="w-full h-[500px] absolute -top-[250px]">
            <path
              className="stroke-slate-700 stroke-1 fill-none"
              d="M0 250 Q741 249.265786986986, 1536 250"
            ></path>
          </svg>
        </div>
      </div>
      <div className="content pt-3 sm:pt-5 hover-overlay">
        <p className="degree text-2xl sm:text-4xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          Front-End Technologies
        </p>
        <div className="details text-xl sm:text-xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          HTML &nbsp; &nbsp;&nbsp; CSS &nbsp; &nbsp;&nbsp; JavaScript &nbsp;
          &nbsp;&nbsp; ReactJS &nbsp; &nbsp;&nbsp; Tailwind CSS &nbsp;
          &nbsp;&nbsp; Redux{" "}
        </div>
        <div className="h-[1px] mb-5 w-full relative">
          <div className="h-10 w-full relative -top-5 z-[1] hover:h-[500px] hover:-top-[250px]"></div>
          <svg className="w-full h-[500px] absolute -top-[250px]">
            <path
              className="stroke-slate-700 stroke-1 fill-none"
              d="M0 250 Q826 250.43364538220777, 1536 250"
            ></path>
          </svg>
        </div>
      </div>
      <div className="content pt-3 sm:pt-5 hover-overlay">
        <p className="degree text-2xl sm:text-4xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          Back-End Technologies
        </p>
        <div className="details text-xl sm:text-xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          NodeJS &nbsp; &nbsp;&nbsp; ExpressJS &nbsp; &nbsp;&nbsp; MongoDB
        </div>
      </div>
      <div className="content pt-3 sm:pt-5 hover-overlay">
        <p className="degree text-2xl sm:text-4xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          Other Technologies
        </p>
        <div className="details text-xl sm:text-xl leading-[80%] font-semibold w-full max-w-4xl px-10 mb-5 sm:mb-7 mx-auto">
          Git &nbsp; &nbsp;&nbsp; GitHub &nbsp; &nbsp;&nbsp; Vscode &nbsp;{" "}
        </div>
      </div>
    </section>
  );
};

export default Skills;
