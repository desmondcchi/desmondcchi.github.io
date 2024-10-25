import { useState, useEffect } from "react";

const SCROLL_IN_VIEW_TEXT_COLOR: string = "text-blue-400";
const HOVER_TEXT_COLOR: string = "hover:text-cyan-300";

function scrollToElement(element: string) {
  document.querySelector(element)?.scrollIntoView({ behavior: "smooth" });
}

function findCurrElementInScrollView(): string {
  const scrollTop: number = document.documentElement.scrollTop;

  const homeElement: HTMLElement = document.getElementById("home")!;
  const homeBottom: number = homeElement.offsetTop + homeElement.offsetHeight;

  const aboutElement: HTMLElement = document.getElementById("about_me")!;
  const aboutBottom: number =
    aboutElement.offsetTop + aboutElement.offsetHeight;

  const experienceElement: HTMLElement = document.getElementById("experience")!;
  const experienceBottom: number =
    experienceElement.offsetTop + experienceElement.offsetHeight;

  const contactElement: HTMLElement = document.getElementById("contact")!;
  const contactBottom: number =
    contactElement.offsetTop + contactElement.offsetHeight;

  if (0 <= scrollTop && scrollTop <= homeBottom) {
    return "home";
  } else if (homeBottom < scrollTop && scrollTop <= aboutBottom) {
    return "about_me";
  } else if (aboutBottom < scrollTop && scrollTop <= experienceBottom) {
    return "experience";
  } else if (experienceBottom < scrollTop && scrollTop <= contactBottom) {
    return "contact";
  }

  return "";
}

export default function NavigationBar() {
  const [homeIsInView, setHomeIsInView] = useState(false);
  const [aboutIsInView, setAboutIsInView] = useState(false);
  const [experienceIsInView, setExperienceIsInView] = useState(false);
  const [contactIsInView, setContactIsInView] = useState(false);

  const handleScrollInView = () => {
    const currElementInScrollView: string = findCurrElementInScrollView();
    setHomeIsInView(currElementInScrollView == "home");
    setAboutIsInView(currElementInScrollView == "about_me");
    setExperienceIsInView(currElementInScrollView == "experience");
    setContactIsInView(currElementInScrollView == "contact");
  };

  useEffect(() => {
    handleScrollInView(); // Run on page load.
    window.addEventListener("scroll", handleScrollInView);
  });

  return (
    <div>
      <nav className="w-[6rem] h-[35rem] bg-slate-700 rounded-full fixed top-[10rem] ml-6 py-8 shadow-2xl">
        <ul className="flex flex-col justify-between text-center h-full">
          <li
            onClick={() => scrollToElement("#home")}
            className={`cursor-pointer ${HOVER_TEXT_COLOR} transition-all duration-300 ease-in-out ${
              homeIsInView ? SCROLL_IN_VIEW_TEXT_COLOR : "text-inherit"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => scrollToElement("#about_me")}
            className={`cursor-pointer ${HOVER_TEXT_COLOR} transition-all duration-300 ease-in-out ${
              aboutIsInView ? SCROLL_IN_VIEW_TEXT_COLOR : "text-inherit"
            }`}
          >
            About
          </li>
          <li
            onClick={() => scrollToElement("#experience")}
            className={`cursor-pointer ${HOVER_TEXT_COLOR} transition-all duration-300 ease-in-out ${
              experienceIsInView ? SCROLL_IN_VIEW_TEXT_COLOR : "text-inherit"
            }`}
          >
            Experience
          </li>
          <li
            onClick={() => scrollToElement("#contact")}
            className={`cursor-pointer ${HOVER_TEXT_COLOR} transition-all duration-300 ease-in-out ${
              contactIsInView ? SCROLL_IN_VIEW_TEXT_COLOR : "text-inherit"
            }`}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
