import Image from "next/image";
import "./globals.css";
import AboutMe from "./components/about_me";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main>
      <div className="home flex mt-80 mb-[500px]">
        <div className="inline-block text-left pl-80 m-auto">
          <b className="heading_text text-7xl">Desmond Chi</b>
          <p className="text-xl font-light">An aspiring software engineer.</p>
        </div>
        <div className="profile_picture inline-block pr-80 m-auto">
          <Image
            className="rounded-full"
            src="./images/profile_picture.png"
            alt={""}
            width="300"
            height="300"
          />
        </div>
      </div>
      <AboutMe />
      <Experience />
    </main>
  );
}
