import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="mt-[500px] mb-[250px] flex items-center justify-center scroll-m-[10rem]">
      <div className="w-[1000px] text-center">
        <div className="my-10">
          <b className="text-5xl">Contact Me</b>
        </div>

        <div className="flex items-start justify-center">
          <div className="flex items-center justify-center font-thin">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="w-8 m-5" />
            <p>desmonddchi@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start justify-center m-[-1.5rem]">
          <a
            href="./data/Desmond%20Chi%20Resume.pdf"
            download="Desmond Chi Resume.pdf"
          >
            <div className="flex items-center justify-center font-thin ml-[-8rem]">
              <FontAwesomeIcon
                icon={faFile}
                size="3x"
                className="w-8 m-5"
              ></FontAwesomeIcon>
              <p className="hover:text-blue-400 transition-all duration-300 ease-in-out">Resume</p>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center m-[1.5rem]">
          <a
            className="m-7"
            href="https://github.com/desmondcchi"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="6x"
              className="w-20 hover:text-slate-400 transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            className="m-7"
            href="https://www.linkedin.com/in/desmondchi/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="6x"
              className="w-20 hover:text-slate-400 transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
