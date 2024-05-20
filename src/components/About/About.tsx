import './About.module.scss'
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="about-section">
        <h3 className='sub-heading'>About</h3>
        <Fade direction='up'>
        <p>Hello! I am Dushan Senadheera. I am a passionate and highly motivated undergraduate software engineer who loves to learn new things and improve my knowledge and skills. I am skilled in full-stack web application development using the MERN stack and my further skills include Cloud Computing, UI/UX Design, Mobile & Desktop Application Development, DevOps and I am a cybersecurity enthusiast as well.</p>
        </Fade>
    </div>
  )
}
