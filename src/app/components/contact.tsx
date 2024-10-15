import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="my-[500px] flex items-center justify-center">
      <div className="w-[1000px] text-center">
        <div className="my-10">
          <b className="text-5xl">Contact Me</b>
        </div>

        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="w-8 m-5" />
          <p>desmonddchi@gmail.com</p>
        </div>

        <div className="flex items-center justify-center m-[-2rem]">
          <a
            className="m-7"
            href="https://github.com/desmondcchi"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="w-20" />
          </a>
          <a
            className="m-7"
            href="https://www.linkedin.com/in/desmondchi/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-20" />
          </a>
        </div>
      </div>
    </div>
  );
}
