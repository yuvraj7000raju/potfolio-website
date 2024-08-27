import "./SkillCard.css";
import drop from "./drop.png"
export default function SkillCard({ skill, skillContent, image }) {
    return (
        <div class="card">
        <div class="card-icon"><img src={image} alt="" /></div>
        <h3 class="card-title">{skill}</h3>
        <p class="card-description">
            {skillContent}
        </p>
    
        <button class="card-button"><span>Tech stack</span><img className="img-drop" src={drop} alt="" srcset="" /></button>
    </div>
    )
}