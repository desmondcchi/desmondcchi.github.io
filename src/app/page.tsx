"use client";

import Image from "next/image";
import "./globals.css";
import AboutMe from "./components/about_me";
import Experience from "./components/experience";
import Contact from "./components/contact";

function scrollToElement(element: string) {
  document.querySelector(element)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main>
      <nav className="w-[6rem] h-[35rem] bg-slate-700 rounded-full fixed top-[10rem] ml-6 py-8 shadow-2xl">
        <ul className="flex flex-col justify-between text-center h-full">
          <li
            onClick={() => scrollToElement("#home")}
            className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out"
          >
            Home
          </li>
          <li
            onClick={() => scrollToElement("#about_me")}
            className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out"
          >
            About
          </li>
          <li
            onClick={() => scrollToElement("#experience")}
            className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToElement("#contact")}
            className="cursor-pointer hover:text-blue-400 transition-all duration-300 ease-in-out"
          >
            Contact
          </li>
        </ul>
      </nav>
      <div id="home" className="flex mt-80 mb-[500px] scroll-m-[20rem]">
        <div className="text-left pl-80 m-auto">
          <b className="text-7xl">Desmond Chi</b>
          <p className="text-xl font-light">An aspiring software engineer.</p>
        </div>
        <div className="pr-60 m-auto">
          <Image
            className="rounded-full shadow-2xl"
            src="./images/profile_picture.png"
            alt={""}
            width="300"
            height="300"
          />
        </div>
      </div>
      <AboutMe />
      <Experience />
      <Contact />
    </main>
  );
}
