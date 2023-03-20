import React from "react";

const Video = () => {
    return (
        <div className="content-container">
            <div className="video-container">
                <img
                    id="myVideo"
                    src="./src/assets/img/noel_img.png"
                    alt="et"
                />
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
