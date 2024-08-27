import "./About.css"
import rocket from "./rocket.webp"
import SkillBtn from "./SkillBtn"
import SkillCard from "./SkillCard"
import front from "./log1.png"
import back from "./log2.png"
import dsa from "./dsa.png"


export default function About() {
    

    const skillData =["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, porro.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, porro."]

    return (
        <div className="about">
            <div className="about-heading">about</div>
            <div className="about-content">
                <p>
                    I'm Yuvraj Yadav, a full-stack web developer specializing in the MERN stack. My expertise extends to ethical hacking, data structures and algorithms (DSA), and Linux. I'm passionate about creating innovative solutions and continuously expanding my skill set in technology.
                </p>
            </div>

            <div className="about-container">

                <div className="btn">
                    <button className="buttons">Open Resume</button>
                    <button className="buttons">Open CV</button>
                </div>

                <div className="skill">
                    <div className="skill-options">
                     
                     <SkillCard image={front} skill="Frontend" skillContent={skillData[0]}></SkillCard>
                     <SkillCard image={back} skill="Backend" skillContent={skillData[0]}></SkillCard>
                     <SkillCard image={dsa} skill="DSA" skillContent={skillData[0]}></SkillCard>
                    </div>








                    {/* <div className="skill-content">
                        <div className="content-cover">

                        </div>
                    </div> */}

                </div>


            </div>
            {/* <img src={rocket} alt="rocket" /> */}
        </div>
    )
}