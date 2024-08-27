import { useEffect } from "react";
import "./Home.css";
import myImage from "./my2.png"; // Correctly import the image

export default function Home() {
    return (
        <div className="home-container">
            <div className="name-section">
                <div className="name-box">
                    <div className="name">YUVRAJ YADAV</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae animi ab aspernatur corrupti consequatur volup</div>
                </div>
            </div>
            <div className="image-section">
                <div className="img-box">
                    <div className="c c3">
                        <div className="planet c31"></div>
                        <div className="planet c32"></div>
                        <div className="planet c33"></div>
                        </div>
                    <div className="c c2">
                        <div className="planet c21"></div>
                        <div className="planet c22"></div>
                        </div>
                    <div className="c c1"><div className="planet c11"></div></div>
                    <img src={myImage} className="img" alt="yuvraj" srcSet="" />

                </div>
            </div>
        </div>
    )
}