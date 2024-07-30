import styles from "./About.module.scss";
import { Fade } from "react-awesome-reveal";
import bg from '../../assets/about.jpg';

export default function About() {
  return (
    <div id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <img src={bg} alt="Dushan Senadheera" />
        </div>
        <div className={styles.aboutDescription}>
          <Fade direction="up">
          <h3 className="sub-heading">Who am I?</h3>
            <p>
              Hiii, I am Dushan Senadheera and I'm a self-motivated
              undergraduate software engineer with a strong academic foundation,
              I specialize in full-stack web application development using the
              MERN (React, Node, Express, MongoDB) stack with Test Driven
              Development, Cloud Computing and DevOps exposure. My track record
              includes successful completion of both academic and individual
              projects demonstrating adaptability, teamwork, analytical skills
              and a keenness to explore new technologies. Furthermore, my
              additional knowledge areas include, UI/UX Design, Cloud Computing,
              DevOps, Enterprise Application Development and Mobile Application
              Development as well.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
