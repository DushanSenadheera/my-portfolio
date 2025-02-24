// import Marquee from "react-fast-marquee";
import "./Tech.scss";

export default function Tech() {
  return (
    <div className="tech">
        <h3 className="sub-heading">Tools & Technologies</h3>
{/*       <Marquee> */}
      <img
          src="https://skillicons.dev/icons?i=react,nodejs,expressjs,angular,nestjs,graphql,kafka,redis,mongodb,mysql,postgres,next,redux,sass,tailwind,ts,aws,docker,kubernetes,githubactions,linux&perline=50"
          alt="tech"
        />
{/*       </Marquee> */}
    </div>
  );
}
