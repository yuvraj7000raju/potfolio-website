import "./SkillBtn.css";
import drop from "./drop.png";

export default function SkillBtn({ skill , className}){
    return(
        <div className="s-div">
            <button className="s-btn" >{skill} <img className="img-drop" src={drop} alt=">" srcset="" /></button>
        </div>
    )
}