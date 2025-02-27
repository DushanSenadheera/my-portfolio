import "./Header.scss";
import me from "../../assets/me.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    <div className="header">
      <Fade direction="up">
      <div className="header-content">
        <h1>
          <span>Hi</span>, Welcome!
        </h1>
        <h1>
          I am <span>Dushan Senadheera</span>
        </h1>
        <p>
        <Typewriter
          options={{
            strings: ["Software Engineer", "AI & Cloud Enthusiast"],
            autoStart: true,
            loop: true,
          }}
        />
        </p>
        <div className="cta-btns">
          <button className="primary-btn">Contact</button>
        </div>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/dushansenadheera"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DushanSenadheera"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
      </Fade>
      <Fade direction="down">
      <div className="header-img">
        <img src={me} alt="Dushan Senadheera" />
      </div>
      </Fade>
      
    </div>
  );
}
