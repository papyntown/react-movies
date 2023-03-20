import React from "react";

const ToTop = () => {
    return (
        <div className="top" onClick={() => window.scrollTo(0, 0)}>
            <img src="./src/assets/img/arrow-icon.svg" alt="arrow to scroll" />
        </div>
    );
};

export default ToTop;
