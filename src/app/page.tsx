import Image from "next/image";
import "./globals.css";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main>
      <div className="home flex mt-80">
        <div className="name inline-block text-left pl-80 m-auto">
          <b className="text-7xl">Desmond Chi</b>
          <p className="text-xl">An aspiring software engineer.</p>
        </div>
        <div className="profile_picture inline-block pr-80 m-auto">
          <Image
            className="rounded-full"
            src="./images/profile_picture.png"
            alt={""}
            width="300"
            height="300"
          ></Image>
        </div>
      </div>
      <AboutMe />
    </main>
  );
}
