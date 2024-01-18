import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="home">
      <div className="name">
        <h1>Desmond Chi</h1>
        <p>I am an aspiring software engineer.</p>
      </div>
      <div className="profile_picture">
        <Image
          src="./images/profile_picture.png"
          alt={""}
          width={"100"}
          height={"100"}
        ></Image>
      </div>
    </div>
  );
}
