import React from "react";
import backgroundNoel from "../assets/img/backgroundNoel.png";

const Video = () => {
    return (
        <div className="content-container">
            <div className="video-container">
                <img id="myVideo" src={backgroundNoel} alt="bg-noel" />
                {/* <video
                    src="./src/assets/decorations-de-noel-illuminees.mp4"
                    autoPlay
                    muted
                    loop
                    id="myVideo"></video> */}
            </div>
        </div>
    );
};

export default Video;
